import React, { Component } from 'react';
import Header from '../components/header/Header';
import Artists from '../components/search/Artists';
import { getArtists } from '../services/musicBrainzApi';
import Input from '../components/search/Input';
import Paging from '../components/paging/Paging';

export default class Search extends Component {
  state = {
    artists: [],
    artist: '',
    page: 1,
    count: 0,
    loading: false
  }

  inputChange = ({ target }) => {
    this.setState({ artist: target.value });
  }

  getArtists = () => {
    getArtists(this.state.artist, this.state.page)
      .then(({ artists, count }) => {
        this.setState({ artists, count: Math.ceil(count / 25), loading: false });
      });
  }

  onSearch = () => {
    return this.getArtists();
  }

  changePage = page => {
    this.setState({ page }, () => {
      this.getArtists();
    });
  }

  render() {
    if(this.state.loading) return <h1>Loading</h1>;
    return (
      <>
        <Header title="Search for an Artist" />
        <Input 
          artist={this.state.artist}
          inputChange={this.inputChange}
          onSearch={this.onSearch} />
          <div>
            <Paging 
              currentPage={this.state.page}
              totalPages={this.state.count}
              onPrevious={() => this.changePage(this.state.page - 1)}
              onNext={() => this.changePage(this.state.page + 1)}/>
          </div>
        <Artists artists={this.state.artists} />
      </>
    );
  }
}
