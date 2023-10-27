import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <li className={styles.imageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.imageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
