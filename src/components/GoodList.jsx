import React from 'react'
import GoodItem from './GoodItem'

const GoodList = ({ goods = [], addTobasket }) => {
  
    if(!goods.length) {
        <h2>Noting Here</h2>
    }
  
    return (
    <div className='goods'>
        {goods.map(i => <GoodItem key={i.id} {...i} addTobasket={addTobasket} />)}
    </div>
  )
}

export default GoodList