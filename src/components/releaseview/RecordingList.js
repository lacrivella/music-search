import React from 'react';
import PropTypes from 'prop-types';
import RecordingItem from './RecordingItem';

function RecordingList({ recordings, artistName }) {
  const recordingList = recordings.map(recording => {
    return (
      <li key={recording.id}>
        <RecordingItem recording={recording} artistName={artistName}/>
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
  recordings: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
};

export default RecordingList;
