import React, { useState } from 'react'
import './Nav.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Nav = () => {
    const [menu , setmenu] = useState("shop")
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setmenu("shop")}}> <Link to = '/' style={{textDecoration:"none"}}>Shop</Link> {menu === "shop" ?<hr /> : <></>} </li>
                <li onClick={()=>{setmenu("men")}}> <Link to='/men' style={{textDecoration:"none"}}>Men </Link> {menu === "men" ?<hr /> : <></>}</li>
                <li onClick={()=>{setmenu("women")}}> <Link to='/women' style={{textDecoration:"none"}} >Women</Link>  {menu === "women" ?<hr /> : <></>}</li>
                <li onClick={()=>{setmenu("kid")}}> <Link to = '/kid' style={{textDecoration:"none"}}>Kids</Link>  {menu === "kid" ?<hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'> <button>Login</button> </Link>
               <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
