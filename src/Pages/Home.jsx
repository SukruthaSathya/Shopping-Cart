import React from 'react'
import Categories from '../Components/Categories/Categories'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Newsletter from '../Components/Newsletter/Newsletter'
import Products from '../Components/Products/Products'
import Slider from '../Components/Slider/Slider'
import Announcement from '../Components/Announcement/Announcement'

function Home() {
 
  return (
    <div>
        <Announcement />
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home