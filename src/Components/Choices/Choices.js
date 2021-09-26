import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Character from "../Character/Character";

const Choices = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("./characters.JSON")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-9">
          <div className="row">
            {characters.map((character) => (
              <Character key={character.key} character={character}></Character>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Choices;
