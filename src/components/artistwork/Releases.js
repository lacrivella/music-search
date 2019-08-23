import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';


function Releases({ releases, artist }) {
  const releaseList = releases.map(release => {
    return (
      <li key={release.id}>
        <Release release={release} artist={artist} />
      </li>
    );
  });
  return (
    <ul>
      {releaseList}
    </ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  artist:  PropTypes.string
};

export default Releases;
