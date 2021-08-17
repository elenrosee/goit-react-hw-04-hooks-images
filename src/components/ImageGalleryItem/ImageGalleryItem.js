import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.scss";
import uuid from "react-uuid";

class ImageGalleryItem extends Component {
  render() {
    const { images, openModal } = this.props;
    return (
      <React.Fragment>
        {images.map(({ webformatURL, largeImageURL, tags }) => (
          <li key={uuid()} className="ImageGalleryItem">
            <img
              onClick={() => openModal(largeImageURL, tags)}
              src={webformatURL}
              alt={tags}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </React.Fragment>
    );
  }
}

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGalleryItem;
