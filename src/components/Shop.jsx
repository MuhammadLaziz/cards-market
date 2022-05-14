import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL, API_KEY } from "../config";
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loader from "./Loader";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isbasketShow, setbasketShow] = useState(false);

  const addTobasket = (item) => {
    const itemIndex = order.findIndex((i) => i.id === item.id);

    if (itemIndex < 0) {
      const newitem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newitem]);
    } else {
      const newOrder = order.map((itemOrder, index) => {
        if (index === itemIndex) {
          return {
            ...itemOrder,
            quantity: itemOrder.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setOrder(newOrder);
    }
    toast.success('Added Successfuly')
  };

  const handlebasketShow = () => {
    setbasketShow(!isbasketShow);
  };

  const removeFromBasket = (itemID) => {
    const newOrder = order.filter(item => item.id !== itemID)
    setOrder(newOrder)
    toast.error('Deleted')
  };

  const incrementQuantity = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id === itemID) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else{
        return el
      }
    })

    setOrder(newOrder)
    toast.success('Added Successfuly')
  }
  const decrementQuantity = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id === itemID) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else{
        return el
      }
    })

    setOrder(newOrder)
    toast.error('Deleted')
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content container">
      <Cart quantity={order.length} handlebasketShow={handlebasketShow} />
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} addTobasket={addTobasket} />
      )}
      {isbasketShow && (
        <BasketList
          order={order}
          removeFromBasket={removeFromBasket}
          handlebasketShow={handlebasketShow}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
    </div>
  );
};

export default Shop;
