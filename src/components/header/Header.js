import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

function Header({ title }) {
  return (
    <header className={styles.Header}>
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.PropTypes.string.isRequired
};

export default Header;
