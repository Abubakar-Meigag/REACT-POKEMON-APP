import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";

function App() {
  return (
    <div>
      <Logo appName="Beko's Pokedex" />
      <BestPokemon />
      <CaughtPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]} />
    </div>
  );
}

export default App;
