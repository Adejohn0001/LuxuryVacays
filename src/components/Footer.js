import React from 'react'
import Twitter from '../../src/Assets/Images/Twitter.png'
import instagram from '../../src/Assets/Images/instagram.png'
import facebook from '../../src/Assets/Images/facebook.png'
import linkedIn from '../../src/Assets/Images/linkedIn.png'
import youtube from '../../src/Assets/Images/youtube.png'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="container1">
            <div>
                <h4 className='text1'>LuxuryVacays</h4>
                <p>Visit us: Block D, Garki 2, Abuja</p>
                <p>Call us: +234-8000-920-400</p>
                <p>Emails us: info@luxuryvacay.com</p>
            </div>
            <div>
                <h6>About</h6>
                <p>Company</p>
                <p>Sponsorship</p>
                <p>Trips</p>
                <p>Events</p>
                <p>Magazine Features</p>
            </div>

            <div>
                <h6>Product</h6>
                <p>Discounts</p>
                <p>Offers</p>
                <p>Customers</p>
                <p>Locations</p>
                <p>Reviews</p>
            </div>

            <div>
                <h6>For Customer</h6>
                <p>Help Center</p>
                <p>FAQs</p>
                <p>Features</p>
                <p>Community Forums</p>
                <p>Support</p>
            </div>
        </div>

        <div className="container2"></div>


        <div className="container3">
            <div><p>English</p></div>
            <div className='ptc'>
              <div className='ptc-text'> <p> Private Policy </p> </div>
              <div className='ptc-text'><p>Terms</p></div>
              <div  className="container3-text ptc-text"><p>Copyright @2022 luxuryvacay</p></div>
            </div>  


            <div className='socials'>
                <div><img src={Twitter} alt='' className='icons'/></div>
                <div><img src={instagram} alt='' className='icons'/></div>
                <div><img src={facebook} alt='' className='icons'/></div>
                <div><img src={linkedIn} alt='' className='icons'/></div>
                <div><img src={youtube} alt='' className='icons'/></div>
            </div> 
        </div>
      </footer>
    </div>
  )
}

export default Footer