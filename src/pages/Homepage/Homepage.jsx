import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCards from '../../components/ItemCards/ItemCards'

function Homepage() {
    //create state for items
    const [items, setItems] = useState([])
    //https://fakestoreapi.com/products
    //need to make api call when page loads so I need to useEffect

    useEffect(
        ()=> {
            console.log('Homepage Loaded');
            //call api to get all items
            axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data);
                //store the data in state
                setItems(res.data)
            })
            .catch(err=>console.log(err))
        }, []
    )


  return (
    <div className='items-container'>
        {items.map(item =><ItemCards key={item.id} item={item} />)
        } 
      
    </div>
  )
}

export default Homepage
