import React, { useContext } from 'react'
// import { Cartitems } from '../Components/Cartitems/Cartitems'
import { ShopContext } from '../Context/ShopContext'

export const Cart = () => {
 
  const {cart ,totalAmount, handleDecrement, handleIncrement} = useContext(ShopContext)

  if (cart.length === 0){
    return <div><h1>Your Cart is Empty</h1></div>
  }
  else{
  return (
     <div>
      <h2>Cart</h2>
      <ul>
         {
          cart.map((item , index)=>(

              <div key={index}>
                     <img src={item.image} width={70} alt="" />
                <span> {item.name}  </span>
                <button onClick={()=> handleDecrement(index)} >-</button>
                <span> {item.quantity} </span>
                <button onClick={()=> handleIncrement(index)} >+</button>
                 <span> {item.new_price} </span>
                <span> {item.new_price * item.quantity} </span>

              </div>
            
          )

          )
         }
            
        
        </ul>
        {
            <h1> {totalAmount} </h1>
        }
     </div>
      
  )
        }
}
