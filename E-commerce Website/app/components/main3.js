import React from 'react'
import Image from 'next/image'
import img1 from "../images/card1.webp"
import img2 from "../images/card2.webp"
import img3 from "../images/card3.webp"
import img4 from "../images/card4.webp"
import img5 from "../images/card5.webp"
import img6 from "../images/card6.webp"
import "../style.css";

const main3 = () => {
  return (
    <div className='text-xl'><div className="box1">

    <div className="box1-head">
     <div className="mya">
         <h1><b>NIKE</b></h1>
         <h6 className='mt-7'>BRAND</h6>
     </div>
     <div className="icons">
         <i className="fa-solid fa-bars"></i><br/>
         <i className="fa-solid fa-cart-shopping"></i>
     </div>
    </div>
    
   {/* <!-- <marquee behavior="" direction="scroll"> --> */}
    <button className="btn" id="backward">&lt;</button>
    <div className="content4">
        
        <div className="card">
            <p>Air Force X1</p>
            <h3>from $120</h3>
            <Image width={100} height={0} className="edit" src={img1} alt=""/>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="card">
            <p>Air Jordan</p>
            <h3>from $120</h3>
            <Image width={100} height={0} className="edit" src={img2} alt=""/>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="card">
            <p>Dunks</p>
            <h3>from $120</h3>
            <Image width={0} height={0} className="edit"  src={img3} alt=""/>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="card">
            <p>Air Force X1</p>
            <h3>from $120</h3>
            <Image width={0} height={0} className="edit" src={img4}  alt=""/>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="card">
            <p>Air Jordan</p>
            <h3>from $120</h3>
            <Image width={0} height={0} className="edit" src={img5} alt=""/>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="card">
            <p>Dunks</p>
            <h3>from $120</h3>
            <Image width={0} height={0} className="edit" src={img6} alt=""/>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        
    </div>
    <button className="btn" id="forward">&gt;</button>
   {/* <!-- </marquee> --> */}

    <div className="box1-bottom">
     <div className="bot1">
         <h4>More</h4>
         <h4>Parts & Accessories</h4>
         <h4>Custom Design</h4>
     </div>
     <div className="bot2">
         <h4>Discounts</h4>
         <h4>Pricing</h4>
         <h4>Contact</h4>
     </div>
    </div>
    
 </div></div>
  )
}

export default main3