import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
  };

  fetchImages = async query => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=1&key=39482556-d60da0ad7dc5ab6f886d79ae4&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      console.log(data);
      this.setState({ images: data.hits });
    } catch (error) {
      console.error('Błąd: ', error);
    }
  };
  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={this.state.images} />
        {images.length > 0 && <Button />}
      </>
    );
  }
}

export default App;
