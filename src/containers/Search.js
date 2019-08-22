import React, { Component } from 'react';
import Header from '../components/header/Header';
import Artists from '../components/search/Artists';
import { getArtists } from '../services/musicBrainzApi';
import Input from '../components/search/Input';

export default class Search extends Component {
  state = {
    artists: [],
    artist: '',
  }

  inputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  getArtists = () => {
    getArtists(this.state.artist)
      .then(({ artists }) => {
        this.setState({ artists });
      });
  }

  onSearch = () => {
    return this.getArtists();
  }

  render() {
    return (
      <>
        <Header title="Search for an Artist" />
        <Input 
          artist={this.state.artist}
          inputChange={this.inputChange}
          onSearch={this.onSearch} />
        <Artists artists={this.state.artists} />
      </>
    );
  }
}
