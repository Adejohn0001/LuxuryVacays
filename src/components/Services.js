import React from 'react'
import accommodation from '../../src/Assets/Images/accommodation.png';
import tourism from '../../src/Assets/Images/tourism.png'
import shows from '../../src/Assets/Images/shows.png'
import games from '../../src/Assets/Images/games.png'
import wifi from '../../src/Assets/Images/wifi.png'
import swimming from '../../src/Assets/Images/swimming.png'
import spa from '../../src/Assets/Images/spa.png'
import dinner from '../../src/Assets/Images/dinner.png'
import bar from '../../src/Assets/Images/bar.png'


const Services = () => {
  return (
    <div className='services'>
        <div className='our-services'>
        <div className='ser-container1'>
            <div className='cover-see-more'>
                <p className='what-we-cover'>What we Cover</p>
                <a href='Nav.js'className='see-more'>See more</a>
            </div>
            <div className='list1'>
                <div className='accommodation'>
                    <div>  <img src={accommodation} alt='' className='accommodation-img' /> </div>
                    <div> <p>Accommodation</p> </div>
                </div>
                <div className='accommodation'>
                    <div>  <img src={tourism} alt='' className='accommodation-img' /> </div>
                    <div> <p>Tourism</p> </div>
                </div>
                <div className='accommodation'>
                    <div>  <img src={shows} alt='' className='accommodation-img' /> </div>
                    <div> <p>Shows</p> </div>
                </div>
                <div className='accommodation'>
                    <div>  <img src={games} alt='' className='accommodation-img' /> </div>
                    <div> <p>Outdoor Games</p> </div>
                </div>
            </div>
        </div>


        <div className='ser-container2'>
            <div className='cover-see-more'>
            <p className='what-we-cover'>Side Attractions</p>
                <a href='Nav.js'className='see-more'>See more</a>
            </div>
            <div className='list1'>
              <div className='wifi'>
                    <div className='wifi-imgs1'>  <img src={wifi} alt='' className='wifi-img' /> </div>
                    <div> <p>Wifi</p> </div>
              </div>
              <div className='wifi'>
                    <div className='wifi-imgs2'>  <img src={swimming} alt='' className='wifi-img' /> </div>
                    <div> <p>Swimming</p> </div>
                </div>
                <div className='wifi'>
                    <div className='wifi-imgs3'>  <img src={spa} alt='' className='wifi-img' /> </div>
                    <div> <p>Luxury Spa</p> </div>
                </div>
                <div className='wifi'>
                    <div className='wifi-imgs'>  <img src={dinner} alt='' className='wifi-img' /> </div>
                    <div> <p>Dinner</p> </div>
                </div>
                <div className='wifi'>
                    <div className='wifi-imgs4'>  <img src={bar} alt='' className='wifi-img' /> </div>
                    <div> <p>Luxury Bar</p> </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services