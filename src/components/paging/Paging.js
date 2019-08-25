import React from 'react';
import PropTypes from 'prop-types';

function Paging({ onPrevious, onNext, currentPage, totalPages }) {
  return (
    <span>
      <button onClick={onPrevious}>↲</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={onNext}>↳</button>
    </span>
  );
}

Paging.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

}

export default Paging;
