import "./styles.css";
import { characters } from "./CharactersData";
import { DisplayChar } from "./Tab";

export default function App() {
  return (
    <div className="App">
      <DisplayChar characters={characters} />
    </div>
  );
}
