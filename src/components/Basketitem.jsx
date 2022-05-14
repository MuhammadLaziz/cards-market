import React from "react";

const Basketitem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    incrementQuantity,
    decrementQuantity,
  } = props;

  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity}
      <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>Add
        </a>
        <a
          className="waves-effect waves-light btn"
          onClick={() => decrementQuantity(id)}
        >
          <i className="material-icons left">exposure_minus_1</i>Remove
        </a>
        <a
          className="waves-effect waves-light btn"
          style={{ padding: "15px 20px" }}
        >
          <i className="material-icons" onClick={() => removeFromBasket(id)}>
            delete_forever
          </i>
        </a>
      </span>
    </li>
  );
};

export default Basketitem;
