import React from "react";
import Basketitem from "./Basketitem";

const BasketList = (props) => {
  const { order, handlebasketShow, incrementQuantity, decrementQuantity } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((i) => (
            <Basketitem
              key={i.id}
              {...i}
              removeFromBasket={props.removeFromBasket}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          ))
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active ">
          Total cost : {totalPrice} <b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={handlebasketShow}>
          close
        </i>
      </ul>
    </div>
  );
};

export default BasketList;
