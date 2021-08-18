import React, { Fragment, useState, useEffect } from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./App.scss";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";

import PicturesApiService from "./Services/apiService";

export default function App() {
  const [request, setRequest] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);

  useEffect(() => {
    if (!request) {
      setPage(1);
      return;
    }
    setLoading(true);

    PicturesApiService(page, request)
      .then(addImages)
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      });
  }, [request, page]);

  const addImages = ({ hits }) => {
    if (!hits.length) {
      alert("Try another word");
    }

    hits.length < 12 ? setLoadMoreBtn(false) : setLoadMoreBtn(true);

    setImages((prevState) => [...prevState, ...hits]);
  };

  const formSubmitHandler = (request) => {
    if (request.trim()) {
      setImages([]);
      setPage(1);
      setRequest(request);
    } else {
      alert("Enter search request");
    }
  };

  return (
    <div className="App">
      <Searchbar onSubmit={formSubmitHandler} />
      {images && (
        <Fragment>
          <ImageGallery>
            <ImageGalleryItem images={images} openModal={setModalImg} />
          </ImageGallery>
          {loadMoreBtn && (
            <Button
              onClick={() => {
                setPage((prevState) => (prevState += 1));
              }}
            />
          )}
        </Fragment>
      )}
      {loading && (
        <Loader
          className="loader"
          type="ThreeDots"
          color="#3f51b5"
          height={120}
          width={120}
        />
      )}
      {modalImg && (
        <Modal onClose={() => setModalImg(null)}>
          {<img src={modalImg.largeImageURL} alt={modalImg.tags} />}
        </Modal>
      )}
    </div>
  );
}
