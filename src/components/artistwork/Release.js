import React from 'react';
import PropTypes from 'prop-types';

function Realese({ release }) {
  return (
    <section>
      <p>{release.title}</p>
      <span><img src={} /></span>
    </section>
  );
}

Release.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
  })
};

export default Release;