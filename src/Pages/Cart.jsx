import React, { useContext } from 'react';
import './CSS/Cart.css'
import { ShopContext } from '../Context/ShopContext';

export const Cart = () => {
  const { cart, totalAmount, handleDecrement, handleIncrement } = useContext(ShopContext);

  // Filter out items with quantity zero
  const filteredCart = cart.filter(item => item.quantity >= 1);

  if (filteredCart.length === 0) {
    return <div className="empty-cart"><h1>Your Cart is Empty</h1></div>;
  } else {
    return (
      <div className="cart-container">
        <h2 className="cart-heading">Your Cart</h2>
        <div className="cart-items">
          {filteredCart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="item-price-container">
                <h3 className="item-price">Price: ${item.new_price}</h3>
              </div>
              <img className="item-image" src={item.image} width={70} alt={item.name} />
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <div className="quantity-controls">
                  <button className="quantity-button" onClick={() => handleDecrement(index)}>-</button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button className="quantity-button" onClick={() => handleIncrement(index)}>+</button>
                </div>
                <span className="item-total">${item.new_price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h3>Total: ${totalAmount}</h3>
        </div>
      </div>
    );
  }
};

