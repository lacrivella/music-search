import React from 'react';
import PropTypes from 'prop-types';
import placeholderImg from '../../assets/placeholder.png';

function Release({ release }) {
  const coverArt = release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : placeholderImg;
  return (
    <section>
      <p>{release.title}</p>
      <span><img src={coverArt} /></span>
    </section>
  );
}


Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string
  })
};

export default Release;
