import React from "react";
import sunkiss from "../../src/Assets/Images/sunkiss.png";
import skiving from "../../src/Assets/Images/skiving.png";
import lunch from "../../src/Assets/Images/lunch.png";

const Experience = () => {
  return (
    <div className="experience">
      <div className="left-container">
        <div className="left-container1"></div>
        <div className="sun-ski-lun">
          <img src={sunkiss} alt="img" className="img-sun"/>
          <img src={skiving} alt="img"  className="img-ski"/>
          <img src={lunch} alt="img" className="img-lunch"/>
        </div>
      </div>

      <div className="right-container">
        <p className="exciting-experience">Exciting Experiences</p>
        <p className="small">
          From group picnics, to boat cruise down to exciting adventures,
          luxuryvacay summer edition promises to leave you thrilled every step
          of the way. It's going to be an endless round of new and exciting
          experiences with strangers turned friends.{" "}
        </p>
        <div className='flex-btns'>
              <div><button className='btn5'>Book Now</button></div>
              <div><button className='btn7'><a href='https' > Vacation details</a> <span className='arrow'> &#x2192; </span></button></div>
            </div>
      </div>
    </div>
  );
};

export default Experience;
