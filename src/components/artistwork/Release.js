import React from 'react';
import PropTypes from 'prop-types';

function Release({ release }) {
  return (
    <section>
      <p>{release.title}</p>
      <span><img src={release.cover} /></span>
    </section>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string
  })
};

export default Release;
