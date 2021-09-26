import React from "react";
import "./Character.css";

const Character = (props) => {
  const { name, age, role, img, price } = props.character;
  return (
    <div className="card-group">
      <img
        src={img}
        className="image-size card-img-top text-center img-fluid"
        alt="..."
      />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-text">Role: {role}</h5>
        <h5 className="card-text">Age: {age}</h5>
        <h5 className="card-text">Price: ${price}</h5>
      </div>
    </div>
  );
};

export default Character;
