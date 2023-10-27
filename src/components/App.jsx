import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}

export default App;
