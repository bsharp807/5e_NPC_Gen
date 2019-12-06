import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Menu from '../menu/Menu';
import CharacterContainer from '../containers/CharacterContainer';
import AllCharacterContainer from '../containers/AllCharacterContainer';
import CreateCharacterContainer from '../containers/CreateCharacterContainer';

class Main extends Component{

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route path="/Character" component={CharacterContainer} />
              <Route path="/Characters" component={AllCharacterContainer} />
              <Route path="/Generate" component={CreateCharacterContainer} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }

}

export default Main;
