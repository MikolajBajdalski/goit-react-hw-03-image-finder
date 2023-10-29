import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  handleClick = e => {
    const { onClick } = this.props;
    onClick && onClick(e);
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
