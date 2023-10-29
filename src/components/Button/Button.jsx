import React, { Component } from 'react';
import styles from './Button.module.css';
import Loader from '../Loader/Loader';

class Button extends Component {
  handleClick = e => {
    const { onClick } = this.props;
    onClick && onClick(e);
  };
  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.buttonContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <button className={styles.button} onClick={this.handleClick}>
            <span>Load More</span>
          </button>
        )}
      </div>
    );
  }
}

export default Button;
