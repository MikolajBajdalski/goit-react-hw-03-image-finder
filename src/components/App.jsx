import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    selectedImage: null,
  };

  fetchImages = async query => {
    try {
      this.setState({ isLoading: true });
      const { searchQuery, currentPage } = this.state;

      if (searchQuery !== query) {
        this.setState({ images: [], currentPage: 1, searchQuery: query });
      }

      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=39482556-d60da0ad7dc5ab6f886d79ae4&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        currentPage: prevState.currentPage + 1,
      }));
      this.setState({ isLoading: false });
    } catch (error) {
      console.error('Błąd: ', error);
    }
  };

  loadMoreImages = async () => {
    this.setState({ isLoading: true });
    const { searchQuery } = this.state;
    await this.fetchImages(searchQuery);
    this.setState({ isLoading: false });
  };

  openModal = (image, onImageLoaded) => {
    this.setState({ selectedImage: image, onImageLoaded });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        {selectedImage && (
          <Modal
            imageUrl={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            onClose={this.closeModal}
            onImageLoaded={this.state.onImageLoaded}
          />
        )}
        <Loader isVisible={isLoading} />
      </>
    );
  }
}

export default App;
