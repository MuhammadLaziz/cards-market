import React from 'react'

const GoodItem = ({ id, name, description, price, full_background, addTobasket }) => {
  return (
    <div className='card' id={id}>
        <div className="card-image">
            <img src={full_background} alt="" />
        </div>
        <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={() => addTobasket({id, name, price})}>Buy</button>
            <span className="right" style={{fontSize: '24px', fontWeight: 'bold'}}>{price}$</span>
        </div>
    </div>
  )
}

export default GoodItem