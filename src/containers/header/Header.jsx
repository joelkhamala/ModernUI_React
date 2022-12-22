import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='modernui__header section__padding'>
      <div className='modernui__header-content'>
         <h1 className='gradient__text'>Let's build something amazing with ModernUI and Open AI</h1>
         <p>Got anyhting for travelling?</p>
         <div className='modernui__header-content__input'>
          <input type="email" placeholder="Your Email" />
          <button type='button'>Get started</button>
         </div>
         <div className='modernui__header-content__people'>
          <img src={people} alt="people" />
          <p>1600 people requested access to a visit in the last 24hours</p>
         </div>
      </div>
      <div className='modernui__header-image'>
            <img src={ai} alt="ai" />
          </div>
    </div>
  )
}

export default Header