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
    isLoading: false,
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

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        <Loader isVisible={isLoading} />
      </>
    );
  }
}

export default App;
