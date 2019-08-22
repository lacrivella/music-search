import React, { Component } from 'react';
import Header from '../components/header/Header';
import Releases from '../components/artistwork/Releases';
import { getWorks } from '../services/musicBrainzApi';

export default class ArtistWorks extends Component {
  state = {
    releases: [] 
  }

  componentDidMount() {
    getWorks(this.props.match.params.id)
      .then(({ releases }) => {
        this.setState({ releases });
      });
  }
  
  render() {
    return (
      <>
      <Header title="List of Artist's Works" />
      <Releases releases={this.state.releases} />
      </>
    );
  }
};