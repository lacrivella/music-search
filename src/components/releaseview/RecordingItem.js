import React from 'react';
import PropTypes from 'prop-types';

function RecordingItem({ recording }) {
  return (
    <section>
      <p>{recording.title}</p>
    </section>
  );
}

RecordingItem.propTypes = {
  recording: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default RecordingItem;
