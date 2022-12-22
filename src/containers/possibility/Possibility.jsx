import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='modernui__possibility section__padding' id='possibility'>
      <div className='modernui__possibility-image'>
        <img src={possibilityImage } alt="Possibility Image"/>
      </div>
      <div className='modernui__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imaginations</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dicta enim iure sapiente blanditiis. Deserunt odit, voluptatem unde iusto reiciendis amet sed deleniti repudiandae nihil facilis neque. Saepe, cum repellat.</p>
        <h4>Request for early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility