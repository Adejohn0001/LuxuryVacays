import React from "react";
import BookNow from "./BookNow";
import SeeVideos from "./SeeVideos";

const Header = () => {
  return (
    <div className="header">
      <section className="section-container1">
        <p className="heading">Giving You the Vacation of Your Dreams</p>
        <p className="body">
          We put the luxury in your vacation experiences, literally! Making
          every trip with us feel like a once-in-a-lifetime kind of experience.
        </p>
        <div className="btns">
            <BookNow />
            <SeeVideos />
        </div>
      </section>
    </div>
  );
};

export default Header;
