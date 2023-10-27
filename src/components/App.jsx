import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Button />
      </>
    );
  }
}

export default App;
