import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

function Input({ artist, inputChange, onSearch }) {
  return (
    <section className={styles.Input}>
      <input type="text" placeholder="search..." name="artist" value={artist} onChange={inputChange} />
      <button onClick={onSearch}>⌕</button>
    </section>
  );
}

Input.propTypes = {
  artist: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Input;
