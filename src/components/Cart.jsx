import React from 'react'

const Cart = ({quantity = 0, handlebasketShow}) => {
  return (
    <div className='cart red' onClick={handlebasketShow}>
        <i className="material-icons">add_shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}

export default Cart