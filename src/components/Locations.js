import React from 'react'
import santorini from '../Assets/Images/santorini.png'
import dubai from '../Assets/Images/dubai.png'
import paris from '../Assets/Images/paris.png'
import tradetag from '../Assets/Images/tradeTag.png'

const Locations = () => {
  return (
    <div className='locations'>
        <div className='location'>
            <div className='location1'>
                <img src={santorini} alt='location' className='santorini-img'/>
                <div className='santorini-tag'>
                    <div><p className='santorini'>Santorini</p></div>
                    <div> <img src={tradetag} alt='tag' /></div>
                </div>

                <div className='amt-id-btn'>
                    <div>
                        <p className='amt'>$2000</p>
                        <p className='booking-id'>Booking ID: 24863DR</p>
                    </div>
                    <div><button className='santorini-btn'>Book Now</button></div>
                </div>
            </div>

            <div className='location1'>
                <img src={dubai} alt='location' className='santorini-img'/>
                <div className='santorini-tag'>
                    <div><p className='santorini'>Dubai</p></div>
                    <div> <img src={tradetag} alt='tag' /></div>
                </div>

                <div className='amt-id-btn'>
                    <div>
                        <p className='amt'>$2500</p>
                        <p className='booking-id'>Booking ID: 64879KC</p>
                    </div>
                    <div><button className='santorini-btn'>Book Now</button></div>
                </div>
            </div>

            <div className='location1'>
                <img src={paris} alt='location' className='santorini-img'/>
                <div className='santorini-tag'>
                    <div><p className='santorini'>Paris</p></div>
                    <div> <img src={tradetag} alt='tag' /></div>
                </div>

                <div className='amt-id-btn'>
                    <div>
                        <p className='amt'>$2800</p>
                        <p className='booking-id'>Booking ID: 38540MT</p>
                    </div>
                    <div><button className='santorini-btn'>Book Now</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations