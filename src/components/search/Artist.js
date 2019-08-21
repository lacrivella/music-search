import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  return (
    <section>
      <p>{artist.name}</p>
      <p>{artist.disambiguation}</p>
    </section>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    disambiguation: PropTypes.string.isRequired,
    id: PropTypes.string
  })
};

export default Artist;
