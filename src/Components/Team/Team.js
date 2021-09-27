import {
  faClipboardList,
  faDollarSign,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = (props) => {
  console.log(props.team);
  const { team } = props;
  let totalCost = 0;
  //Using Set to prevent addition of duplicate members.
  const addedMembers = new Set();
  for (const member of team) {
    if (addedMembers.has(member.name)) {
    } else {
      addedMembers.add(member.name);
      totalCost += member.price;
    }
  }
  let uniqueMembers = [];
  console.log(addedMembers);
  for (const item of addedMembers.values()) {
    uniqueMembers.push(item);
  }

  const userIcon = <FontAwesomeIcon icon={faUsers} />;
  const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />;
  const clipBoardIcon = <FontAwesomeIcon icon={faClipboardList} />;

  return (
    <div>
      <div className="card">
        <div className="card-body text-left">
          <h3 className="card-title">
            {userIcon} Current Team Members:{" "}
            <span className="text-success">{addedMembers.size}</span>
          </h3>
          <h4 className="card-text">
            {dollarIcon} Current Cost of Team:{" "}
            <span className="text-success">${totalCost}</span>
          </h4>
        </div>
        <div className="card-body">
          <h4>{clipBoardIcon} Characters Added on the team: </h4>
          <ul className="list-group list-group-flush">
            {uniqueMembers.map((detail) => (
              <li className="list-group-item">
                <h5>{detail}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
