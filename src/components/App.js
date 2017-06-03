import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Jimmy Chen
            </a>
          </div>

        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
