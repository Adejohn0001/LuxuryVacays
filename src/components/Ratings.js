import React from 'react'
import rating from '../Assets/Images/rating.png'
import countries from '../Assets/Images/countries.png'
import pupil from '../Assets/Images/pupil.png'

const Ratings = () => {
  return (
    <div className='ratings'>
        <div className='rating1'>
            <img src={rating} alt='img' />
            <p className='rating1-num'>28,000</p>
            <p className='rating1-name'>Travel Experience</p>
        </div>
        <div className='rating2'>
        <img src={countries} alt='img' />
            <p className='rating1-num'>62 +</p>
            <p className='rating1-name'>Countries</p>
        </div>
        <div className='rating1'>
        <img src={pupil} alt='img' />
            <p className='rating1-num'>35,000</p>
            <p className='rating1-name'>Happy Travellers</p>
        </div>
    </div>
  )
}

export default Ratings