import React from 'react'

const Relax = () => {
  return (
    <div className='relax'>
        <div className='relax-container1'>
            <p className='relax-vacay'>What to Expect</p>
            <p className='memorable-relax'>We are committed to making your vacations experiences all-round exciting</p>
        </div>

        <div className='resort-treats'>
          {/**this is for the first left row **/}
          <div>
            <p className='resort-treat'>Resort Treats</p>
            <p className='resort-treat-small'>We've curated exciting number of things to give you the luxurious vacation that you deserve and keep you thrilled every second of the day. </p>
            <ol>
              <li className='offer1'><span className='number1'>1</span>Luxury Bar</li>
              <li  className='offer'><span className='numbers'>2</span> Pool Bar</li>
              <li  className='offer'><span className='numbers'>3</span> Banquetting</li>
              <li  className='offer'><span className='numbers'>4</span> Iron Cinema</li>
              <li  className='offer'><span className='numbers'>5</span> Tour Guides</li>
              <li  className='offer'><span className='number6'>6</span> Indoor Mall</li>
            </ol>
            
            <div className='flex-btns'>
              <div><button className='btn5'>Book Now</button></div>
              <div><button className='btn6'><a href='https' > View all </a> <span className='arrow'> &#x2192; </span></button></div>
            </div>
          </div>
          {/**this is for the left row end**/}

           {/**this is for the right row **/}
           <div></div>
          {/**this is for the right row end**/}
        </div>
    </div>
  )
}

export default Relax