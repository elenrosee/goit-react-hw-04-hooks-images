import React, { Component } from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./App.scss";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";

import PicturesApiService from "./Services/apiService";
const picturesApiService = new PicturesApiService();

class App extends Component {
  state = {
    images: [],
    loading: false,
    showModal: false,
    modalImg: null,
    loadMoreBtn: true,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = (largeImageURL, tags) => {
    this.setState({ modalImg: { largeImageURL, tags } });
    this.toggleModal();
  };

  formSubmitHandler = ({ request }) => {
    this.setState(() => {
      return { images: [] };
    });

    if (request.trim()) {
      picturesApiService.resetPage();
      picturesApiService.searchQuery = request;
      this.fetchPageImages();
    } else {
      alert("Enter search request");
    }
  };

  fetchPageImages = () => {
    this.setState({ loading: true });
    return picturesApiService
      .fetchImages()
      .then(this.addImages)
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        this.setState({ loading: false });
        if (picturesApiService.page > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      });
  };

  addImages = ({ hits }) => {
    if (!hits.length) {
      alert("Try another word");
    }

    if (hits.length < 12) {
      this.setState({ loadMoreBtn: false });
    } else {
      this.setState({ loadMoreBtn: true });
    }

    this.setState((prevState) => {
      return {
        images: [...prevState.images, ...hits],
      };
    });
  };

  render() {
    const { images, showModal, modalImg, loadMoreBtn, loading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmitHandler} />
        {images.length > 0 && (
          <React.Fragment>
            <ImageGallery>
              <ImageGalleryItem images={images} openModal={this.onOpenModal} />
            </ImageGallery>
            {loadMoreBtn && <Button onClick={this.fetchPageImages} />}
          </React.Fragment>
        )}
        ,
        {loading && (
          <Loader
            className="loader"
            type="ThreeDots"
            color="#3f51b5"
            height={120}
            width={120}
          />
        )}
        ,
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {<img src={modalImg.largeImageURL} alt={modalImg.tags} />}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
