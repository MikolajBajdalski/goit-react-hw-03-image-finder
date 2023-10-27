import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  fetchImages = async () => {
    try {
      const response = await fetch(
        'https://pixabay.com/api/?q=cat&page=1&key=39482556-d60da0ad7dc5ab6f886d79ae4&image_type=photo&orientation=horizontal&per_page=12'
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Błąd: ', error);
    }
  };

  componentDidMount() {
    this.fetchImages();
  }

  render() {
    return <Searchbar />;
  }
}

export default App;
