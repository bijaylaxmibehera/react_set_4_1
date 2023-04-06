import { useState } from "react";

export function DisplayChar({ characters: { heroes, villains } }) {
  const [displayHeroes, setDisplayHeroes] = useState(false);
  const [displayVillains, setDisplayVillains] = useState(false);

  function showHeroes() {
    setDisplayHeroes(true);
    setDisplayVillains(false);
  }
  function showVillains() {
    setDisplayVillains(true);
    setDisplayHeroes(false);
  }

  return (
    <>
      <button onClick={showHeroes}>Show Heros</button>
      <button onClick={showVillains}>Show Villains</button>

      {displayHeroes && (
        <>
          <h1>Heroes: </h1>
          <ul style={{ listStyle: "none" }}>
            {heroes.map(({ name, powers, costume }) => (
              <li key={name}>
                <h1>{name}</h1>
                <p>Powers: {powers}</p>
                <p>Costume: {costume}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {displayVillains && (
        <>
          <h1>Villains: </h1>
          <ul style={{ listStyle: "none" }}>
            {villains.map(({ name, powers, costume }) => (
              <li key={name}>
                <h1>{name}</h1>
                <p>Powers: {powers}</p>
                <p>Costume: {costume}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
