import React from 'react'
import UpdateCard from './UpdateCard'
import {BsSearch} from 'react-icons/bs'
import './updates.css'
function Updates() {
  const locationURL = window.location;

  console.log(locationURL)
  return (
    <div className='update-container'>
        <div className='upper-portion'>
            <div className='info'>
                <button id='btn-2'>Search</button>
                <div id='str-top'></div>
            </div>
            <div className='input-parent'>
            <input lang='arabic' className='input-box' />
            <BsSearch/>
            </div>
        </div>

        <div className='grid-container'>
            Current URL {locationURL.href}

        </div>
    </div>
  )
}

export default Updates