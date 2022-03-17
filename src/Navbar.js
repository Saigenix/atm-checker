import React from 'react'

export default function Navbar() {
  return (
    <>
<div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
     <div className="nav-title">
     <img src={require('./assets/atm_header.png')} alt="logo" className="logo"/>
      Helper
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
  {/* <a href="/#" >Login/sign-up</a>
    <a href="/#" >About us</a>
    <a href="/#" >Contact us</a>
    <a href="/#" >Privacy policy</a>
     */}
  </div>
</div>
    </>
  )
}
