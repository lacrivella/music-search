import React from 'react';
import PropTypes from 'prop-types';
import RecordingItem from './RecordingItem';

function RecordingList({ recordings }) {
  const recordingList = recordings.map(recording => {
    return (
      <li key={recording.id}>
        <RecordingItem recording={recording} />
      </li>
    );
  });
  return (
    <ul>
      {recordingList}
    </ul>
  );
}

RecordingList.propTypes = {
  recordings: PropTypes.array.isRequired
};

export default RecordingList;
