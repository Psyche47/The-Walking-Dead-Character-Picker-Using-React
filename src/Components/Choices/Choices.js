import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import Character from "../Character/Character";

const Choices = () => {
  const [characters, setCharacters] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("./characters.JSON")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  const handleAddToTeam = (character) => {
    const newTeam = [...team, character];
    setTeam(newTeam);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-8 col-md-9">
          <div className="row">
            {characters.map((character) => (
              <Character
                key={character.key}
                character={character}
                handleAddToTeam={handleAddToTeam}
              ></Character>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-3">
          <Team team={team}></Team>
        </div>
      </div>
    </div>
  );
};

export default Choices;
