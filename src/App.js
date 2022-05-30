import React from 'react';
import './index.css';
import Tile from "./components/Tile"

function App(props) {
  const animalData = props.data.filter(word => word.category === "animal");
  const numberData = props.data.filter(word => word.category === "number");

  return (
    <main>
      <header>
        <h1>🇨🇿</h1>
      </header>
      <h2>zvířata</h2>
      <div className="tileContainer">
        {animalData.map(word => (<Tile key={word.id} id={word.id} emoji={word.emoji} cz={word.cz} en={word.en} />))}
      </div>
      <h2>čísla</h2>
      <div className="tileContainer">
        {numberData.map(word => (<Tile key={word.id} id={word.id} emoji={word.emoji} cz={word.cz} en={word.en} />))}
      </div>
    </main>
  );
}

export default App;
