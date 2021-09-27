import React from "react";
import "./Character.css";

const Character = (props) => {
  const { name, age, role, img, price, height } = props.character;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card mb-2 rounded">
        <img
          src={img}
          className="image-size card-img-top text-center img-fluid mx-auto"
          alt="..."
        />
        <div className="card-body text-left">
          <h3 className="card-title">{name}</h3>
          <h5 className="card-text">Role: {role}</h5>
          <h5 className="card-text">Age: {age}</h5>
          <h5 className="card-text">Height: {height}</h5>
          <h5 className="card-text">Price: ${price}</h5>
          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => props.handleAddToTeam(props.character)}
            >
              Add To Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
