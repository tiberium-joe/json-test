import React, { Component } from 'react';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';

import './App.css';
import GetLocalPosts from './components/LocalPosts/GetLocalPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tiberium Incident Dashboard</h1>
        <h2 className="header"></h2>
        <GetOnlinePosts/>
      </div>
    );
  }
}

export default App;