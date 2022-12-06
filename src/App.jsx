import "./App.scss";
import Tile from "./components/Tile/Tile";
import pokemonArray from "./data/pokemon";

const App = () => {
  const pokemonTileJsx = pokemonArray.map(({ id, name, types, sprite }) => (
    //return a tile component
    <Tile key={id} name={name} id={id} types={types} image={sprite} />
  ));

  // show only the pokemon where the id >= 130
  const filteredArr = pokemonArray.filter((e) => e.id >= 130);

  const bigIDJsx = filteredArr.map(({ id, name, types, sprite }) => (
    <Tile key={id} name={name} id={id} types={types} image={sprite} />
  ));

  // show only the pokemon that have a type that includes "ground"
  const filteredGroundArr = pokemonArray.filter((e) =>
    e.types.includes("ground")
  );

  const filteredGroundJsx = filteredGroundArr.map(
    ({ id, name, types, sprite }) => (
      <Tile key={id} name={name} id={id} types={types} image={sprite} />
    )
  );

  return (
    <div>
      <h1>Pokedom</h1>
      {/* <main className="tile-container">{bigIDJsx}</main> */}
      <main className="tile-container">{filteredGroundJsx}</main>
    </div>
  );
};

export default App;
