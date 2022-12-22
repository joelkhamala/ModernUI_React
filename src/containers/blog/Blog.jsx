import React from 'react'
import './blog.css'
import {Article } from '../../components';

import { blog01, blog02, blog03, blog04, blog05 } from './imports'
const Blog = () => {
  return (
    <div className='modernui__blog section__padding' id='blog'>
      <div className='modernui__blog-heading'>
        <h1 className='gradient__text'>Alot is happening, we are blogging about it</h1>
      </div>
      <div className='modernui__blog-container'>
        <div className='modernui__blog-container_groupA'>
          <Article imageUrl={ blog01 } date="Dec 22, 2022" title="ModernUI and OpenAI is the future. Le uts explore it."/>
        </div>
        <div className='modernui__blog-container_groupB'>
        <Article imageUrl={ blog02 } date="Dec 22, 2022" title="ModernUI and OpenAI is the future. Le uts explore it."/>
        <Article imageUrl={ blog03 } date="Dec 22, 2022" title="ModernUI and OpenAI is the future. Le uts explore it."/>
        <Article imageUrl={ blog04 } date="Dec 22, 2022" title="ModernUI and OpenAI is the future. Le uts explore it."/>
        <Article imageUrl={ blog05 } date="Dec 22, 2022" title="ModernUI and OpenAI is the future. Le uts explore it."/>
        </div>
      </div>
    </div>
  )
}

export default Blog