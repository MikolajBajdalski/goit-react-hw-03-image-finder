import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
  };

  fetchImages = async query => {
    try {
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
    } catch (error) {
      console.error('Błąd: ', error);
    }
  };

  loadMoreImages = () => {
    const { searchQuery } = this.state;
    this.fetchImages(searchQuery);
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        <Loader />
      </>
    );
  }
}

export default App;
