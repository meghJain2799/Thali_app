import React from 'react'
import Thali from '../Images/Thali.png'

const Banner = () => {
  return (
    <div className='header-container'>
        <div className='banner-body p-2'>
            <div className=''>
             <img src={Thali} alt='banner IMG' className='banner_image'/>
            </div>
            <div className=''>
              <h1> Thali On Go</h1>
              <p> Customised Thali As Per your Need</p>
            </div>
        </div>
    </div>
  )
}

export default Banner