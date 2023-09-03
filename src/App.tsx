import Pokeball from "./components/Pokeball/Pokeball";
import PokeImage1 from "./assets/161.svg";
import PokeImage2 from "./assets/172.svg";

import "./App.css";

function App() {
  return (
    <>
      <main className="flex mt-24 ml-12 flex-wrap">
        <Pokeball
          topBallColor="#6495ed"
          pokeImage={PokeImage1}
          bgColor="#6495edB2"
        />
        <Pokeball
          topBallColor="red"
          pokeImage={PokeImage2}
          bgColor="#FF00004C"
        />
      </main>
    </>
  );
}

export default App;
