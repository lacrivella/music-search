import React from 'react';
import Search from '../containers/Search';
import ArtistWorks from '../containers/ArtistWorks';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={ArtistWorks} />
        <Route path ="/" component={Search} />
      </Switch>
    </Router>
  );
}
