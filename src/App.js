import React, { Component } from 'react';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import './App.css';

class App extends Component {

  state = {
    showMessage: false
  }
  onButtonClickHandler = () => {
   this.setState({showMessage: true});
  };

  render() {
    return (
      <div className="App">
        <h1>Tiberium Incident Dashboard</h1>
        <h2 className="header">Derived from Logic Apps</h2>
        
        {this.state.showMessage && <GetOnlinePosts/>}
        <button onClick={this.onButtonClickHandler}>Get Incidents</button>
      </div>
    );
  }

  
}

export default App;