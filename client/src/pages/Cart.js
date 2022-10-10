import React from 'react'


const Cart = () => {
  const items = ["item1", "item2", "item3"]

  if(items.length === 0){
    return <h1>Your Cart is Empty</h1>
  }else{
  return (
    items.map((item =>(
    <div className='Product'>
    <h1>{item}</h1>
    <div>QTY:
      <select className='QTY-Box' >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
      <button className='DLT-BTN'>Delete</button>
    </div>
    )))
  )
    }
}

export default Cart