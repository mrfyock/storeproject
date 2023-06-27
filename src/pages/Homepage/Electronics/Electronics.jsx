import React, { useEffect, useState} from 'react'
import './Electronics.css'
import axios from 'axios'
import ItemCards from '../../../components/ItemCards/ItemCards'


function Electronics() {
     //create state for items
     const [items, setItems] = useState([])
     //https://fakestoreapi.com/products/category/electronics
     //need to make api call when page loads so I need to useEffect
 
     useEffect(
         ()=> {
             console.log('electronics Loaded');
             //call api to get all items
             axios.get(`https://fakestoreapi.com/products/category/electronics`)
             .then(res => {
                 console.log(res);
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

export default Electronics


///https://fakestoreapi.com/products/category/electronics