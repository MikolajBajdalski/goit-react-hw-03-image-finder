import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.setState({ isLoading: true });
    const { onImageClick, image } = this.props;
    onImageClick(image);
  };

  render() {
    const { image } = this.props;

    return (
      <>
        <li className={styles.imageGalleryItem} onClick={this.handleClick}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={styles.imageGalleryItemImage}
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
