import React from 'react';
import PropTypes from 'prop-types';
import placeholderImg from '../../assets/placeholder.png';
import { Link } from 'react-router-dom';

function Release({ release, artist }) {
  const coverArt = release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : placeholderImg;
  return (
    <Link to={`/release/${artist}/${release.title}/${release.id}`}>
      <section>
        <p>{release.title}</p>
        <span><img src={coverArt} /></span>
      </section>
    </Link>
  );
}


Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
  }),
  artist: PropTypes.string
};

export default Release;
