import React, { Component } from 'react';
import Header from '../components/header/Header';
import Releases from '../components/artistwork/Releases';
import PropTypes from 'prop-types';
import { getWorks } from '../services/musicBrainzApi';
import Paging from '../components/paging/Paging';

export default class ArtistWorks extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    releases: [],
    page: 1,
    count: 0,
    loading: false 
  }

  fetchWork = () => {
    getWorks(this.props.match.params.id, this.state.page)
      .then((json) => {
        this.setState({ releases: json.releases, count: Math.ceil(json['release-count'] / 25), loading: false });
      });
  }
  componentDidMount() {
    this.fetchWork();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchWork();
  }

  changePage = page => {
    this.setState({ page }, () => {
      this.fetchWork();
    });
  }

  render() {
    if(this.state.loading) return <h1>Loading</h1>;
    return (
      <>
      <Header title="List of Artist's Works" />
      <div>
        <Paging 
          currentPage={this.state.page}
          totalPages={this.state.count}
          onPrevious={() => this.changePage(this.state.page - 1)}
          onNext={() => this.changePage(this.state.page + 1)}/>
      </div>
      <Releases releases={this.state.releases} artist={this.props.match.params.artistName} />
      </>
    );
  }
};