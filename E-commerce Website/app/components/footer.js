import React from 'react'
import Link from 'next/link'
import "../style.css";

const footer = () => {
  return (
    <div>
        <div className="foot-panel4">
    <div className="foot1">
        <Link href="#" style={{"padding-left": "10px;"}}>Conditions of Use</Link>
        <Link href="#" style={{"padding-left": "10px;"}}>Privacy Notice</Link>
        <Link href="#" style={{"padding-left": "10px;"}}>Your Ads Privacy Choices</Link>
    </div>
    <div className="foot2">
        <p>@ 1996-2023, Amazon.com, Inc. or its affliates</p>
    </div>
  </div>
  </div>
  )
}

export default footer