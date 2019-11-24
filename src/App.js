import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './cmpts/nav.js'


class App extends React.Component {
        render() {
          return(
            <Router>
                <Switch>
                      <Route exact path="/"><Nav /></Route>
                </Switch>
              </Router>
          );
        }
      }

export default App;
