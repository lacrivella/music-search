import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecordingItem({ recording, artistName }) {
  return (
    <Link to={`/song/${artistName}/${recording.title}`}>
      <section>
        <p>{recording.title}</p>
      </section>
    </Link>
  );
}

RecordingItem.propTypes = {
  recording: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  artistName: PropTypes.string
};

export default RecordingItem;
