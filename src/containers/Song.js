import React, { Component } from 'react';
import Header from '../components/header/Header';
import Lyrics from '../components/song/Lyrics';
import PropTypes from 'prop-types';
import { getLyrics } from '../services/musicBrainzApi';

export default class Song extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    lyrics: ''
  }

  componentDidMount() {
    return getLyrics(this.props.match.params.artistName, this.props.match.params.title)
      .then(({ lyrics }) => {
        this.setState({ lyrics });
      });
  }

  render() {
    return (
      <>
        <Header title="Song Lyrics" />
        <Lyrics 
          lyrics={this.state.lyrics}
          artist={this.props.match.params.artistName}
          title={this.props.match.params.title} />
      </>
    );
  }
}
