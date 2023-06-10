const Logo = () => {
   const appName = "Beko's Pokedex";
  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <div>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
      </div>
    </header>
  );
};

const BestPokemon = () => {
  return <p>My favorite Pokemon is Squirtle</p>;

};

const CaughtPokemon = () =>{

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


function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
