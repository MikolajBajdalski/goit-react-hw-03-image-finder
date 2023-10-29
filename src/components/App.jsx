import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
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

  loadMoreImages = async () => {
    const { searchQuery } = this.state;

    this.setState({ isLoading: true });
    await this.fetchImages(searchQuery);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={images} />
        {images.length > 0 && (
          <Button onClick={this.loadMoreImages} isLoading={isLoading} />
        )}
      </>
    );
  }
}

export default App;
