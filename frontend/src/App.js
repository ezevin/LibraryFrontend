import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Main from './containers/Main'

class App extends React.Component {

  render(){
    return (
      <>
        <Header />
        <Main />
      </>
    )
  }
}

export default App;
