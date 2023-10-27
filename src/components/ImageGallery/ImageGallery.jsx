import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  fetchImages = async () => {
    try {
      const response = await fetch(
        'https://pixabay.com/api/?q=cat&page=1&key=39482556-d60da0ad7dc5ab6f886d79ae4&image_type=photo&orientation=horizontal&per_page=12'
      );
      const data = await response.json();
      this.setState({ images: data.hits });
    } catch (error) {
      console.error('Błąd: ', error);
    }
  };

  componentDidMount() {
    this.fetchImages();
  }

  render() {
    const { images } = this.state;
    return (
      <ul className={styles.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
