import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ artist, title, lyrics }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>by {artist}</p>
      <p>{lyrics ? lyrics : 'This song suxs it has no lyrics!'}</p>
    </section>
  );
}

Lyrics.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
