import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Lisboa. L'imposant château de Saint-Georges, les bâtiments aux tons pastel de la vieille ville, l'estuaire du Tage et le pont du 25 avril"
          country="Portugal"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Montagem_de_Lisboa.png/250px-Montagem_de_Lisboa.png"
          distance="1735 km depuis Paris"
        />
        <Travel
          destination="London. Une ville moderne dont l'histoire remonte à l'époque romaine."
          country="United Kingdom"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/280px-London_Montage_L.jpg"
          distance="456 km depuis Paris"
        />
      </div>
    );
  }
}

export default App;
