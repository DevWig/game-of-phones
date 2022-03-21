import React from 'react';
import './App.css';

import LeftNavBar from './components/LeftNavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LeftNavBar />
        <p>This is the Game of Phones web application</p>
      </div>
    );
  } 
}

export default App;
