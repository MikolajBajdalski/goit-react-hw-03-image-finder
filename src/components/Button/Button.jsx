import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  handleClick = e => {
    console.log('Hello');
  };
  render() {
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <span>Load More</span>
        </button>
      </div>
    );
  }
}

export default Button;
