import { useState , useEffect } from 'react'


import './App.css'
import { Nav } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route ,Navigate  } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSign } from './Pages/LoginSign'
import { Footer } from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'



function App() {
  const [count, setCount] = useState(0)






  return (
    <>
      <BrowserRouter>
        <Nav />
        
        <Routes>

          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid" />} />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSign />} />
        </Routes>
        <Footer />


      </BrowserRouter>

    </>
  )
}

export default App