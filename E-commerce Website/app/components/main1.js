"use client"
import React, { useState } from 'react'
import "../style.css";


const Main = () => {

const [modal, setmodal] = useState(false)


  return (
    <div className='text-xl'>
        <div className="box1">

<div className="box1-head">
 <div className="mya">
     <h1><b>NIKE</b></h1>
     <h6 className='mt-7'>BRAND</h6>
 </div>
 <div className="icons">
     <i className="fa-solid fa-bars"></i><br></br>
     <i className="fa-solid fa-cart-shopping"></i>
 </div>
</div>

<div className="content1">
    <div className="image h-10"></div>
    <div className="img-content">
     <h1>SNEAKERS<br></br>NEW COLLECTION</h1>
     <div className="line"></div>
     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam.</h3>
     <h2><b>from $200</b></h2>
     <div id="popupbtn" className="button cursor-pointer" onClick={()=>{setmodal(!modal)}}>MORE</div>
    </div>
</div>

{/* {modal && <><div id="hide" class="image"></div>
    <div class="cross">X</div>
    <div class="img-content">
     <h1>NIKE<br/>AIR JORDON LOW 1</h1>
     <div class="line"></div>
     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam.
     <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam.</h3>
     <h2><b>from $200</b></h2>
     <div class="button">BUY NOW</div>
    </div></>} */}

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

</div>
    </div>
  )
}

export default Main