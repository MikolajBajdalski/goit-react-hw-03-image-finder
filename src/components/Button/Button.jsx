import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button className={styles.button}>
        <span>Load More</span>
      </button>
    );
  }
}

export default Button;
