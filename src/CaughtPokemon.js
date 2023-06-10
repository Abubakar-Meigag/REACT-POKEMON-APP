import React from "react";

const CaughtPokemon = () => {
  const data = new Date().toLocaleDateString();
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <ul>
        {abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
      <p>Caught 0 Pokemon on {data} </p>;
    </div>
  );
};

export default CaughtPokemon;
