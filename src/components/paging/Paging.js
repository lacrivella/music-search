import React from 'react';
import PropTypes from 'prop-types';

function Paging({ onPrevious, onNext, currentPage, totalPages }) {
  return (
    <span>
      <button onClick={onPrevious}>↲</button>
      <p>Page {currentPage} of {totalPages}</p>
      <button onClick={onNext}>↳</button>
    </span>
  );
}

Paging.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,

}

export default Paging;
