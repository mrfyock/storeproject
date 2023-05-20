import React from 'react'
import './ItemCards.css'

function ItemCards({item}) {
  return (
    <div className='item-card'>
        <img src={item.image} />
        <p style={{fontWeight: 'bold'}}>{item.title}</p>
        <p>{item.category}</p>
        <p style={{fontWeight: 'bold'}}>{item.price}€</p> 
      
    </div>
  )
}

export default ItemCards
