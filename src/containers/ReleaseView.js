import React, { Component } from 'react';
import Header from '../components/header/Header';
import RecordingList from '../components/releaseview/RecordingList';
import { getRecording } from '../services/musicBrainzApi';

export default class ReleaseView extends Component {
  state = {
    recordings: []
  }

  componentDidMount() {
    getRecording(this.props.match.params.id)
      .then(({ recordings }) => {
        this.setState({ recordings });
      });
  }
  render() {
    return (
      <>
      <Header title="List of Song Releases" />
      <RecordingList recordings={this.state.recordings} />
      </>
    );
  }
};

