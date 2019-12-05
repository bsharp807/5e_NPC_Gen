import { Component } from "react";
import { connect } from "react-redux"
import React from "react";
import Main from './components/Main';
import Header from './components/Header';

import './App.css';

const RequestHelper = require('./helpers/request_helper');
const configFile = require('./config/config');

class App extends Component {
  componentDidMount(){
    this.props.getCharacters();
    this.props.getAttributes();
  }

  render() {
    return (
          <div className="app">
            <Header />
            <Main />
          </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  getCharacters(){
    dispatch(() => {
      RequestHelper.get(configFile.char)
      .then(characters => {
        dispatch({
          type: 'GET_CHARACTERS',
          characters
        })
      })
    })
  },
  getAttributes(){
    dispatch(() => {
      RequestHelper.get(configFile.att)
      .then(attributes => {
        dispatch({
          type: 'GET_ATTRIBUTES',
          attributes
        })
      })
    })
  }
})

export default connect(null,mapDispatchToProps)(App);
