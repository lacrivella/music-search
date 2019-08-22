import React from 'react';
import Search from '../containers/Search';
import ArtistWorks from '../containers/ArtistWorks';
import ReleaseView from '../containers/ReleaseView';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/release/:artist/:release/:id" component={ReleaseView} />
        <Route path="/artist/:artistName/:id" component={ArtistWorks} />
        <Route path ="/" component={Search} />
      </Switch>
    </Router>
  );
}
