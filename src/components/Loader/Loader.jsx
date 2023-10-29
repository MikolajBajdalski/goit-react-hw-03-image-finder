import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="red"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass={styles.loader}
    />
  </div>
);

export default Loader;
