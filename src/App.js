import{useState, useEffect} from 'react'
import './App.css';
import GroceryList from './GroceryList'
import groceries from './groceries'

function App() {
  const [list, setlist] = useState(groceries)
  
  const newItem = (event)=>{
      setlist(list.concat([{item: document.querySelector('#item').value, brand: document.querySelector('#brand').value, units: document.querySelector('#units').value, quantity: document.querySelector('#quantity').value, isPurchased: false}]))
      // event.preventDefault()
  }

  return (

  
       <div className="App">
      
      {list.map((groceries, i)=>{
        return(
          <div key ={i}>
            {!groceries.isPurchased?
            <GroceryList
            item={groceries.item}
            brand={groceries.brand}
            units={groceries.units}
            quantity={groceries.quantity}
            isPurchased={groceries.isPurchased}
            />:null}
          </div>
              )})}
              <div id ='new'>
            <h2>Add new item</h2>
            
              Item: <input id='item' type='text' item = 'item'/><br/>
              Brand: <input id='brand' type='text' brand = 'brand'/><br/>
              Units: <input id='units' type='text' units = 'units'/><br/>
              Quantity: <input id='quantity' type='number' quantity = 'quantity'/><br/>
              <button onClick={newItem}>Add Item</button>
              </div>
           
 
              </div>
  )
}

export default App