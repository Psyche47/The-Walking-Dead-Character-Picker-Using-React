import React, { useEffect, useState } from "react";
import Character from "../Character/Character";

const Choices = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("./characters.JSON")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  return (
    <div>
      <div className="characters row row-cols-lg-3 row-cols-md-3 row-cols-1">
        {characters.map((character) => (
          <Character key={character.key} character={character}></Character>
        ))}
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default Choices;
