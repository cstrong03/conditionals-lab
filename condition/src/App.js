import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><button>Welcome</button></li>
            <li><button>All Planets</button></li>
            <li><button>See a Random Planet</button></li>
          </ul>
        </nav>
        <h1>Majestic's Planetarium</h1>
      </div>
    );
  }
}

export default App;
