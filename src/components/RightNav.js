import React from "react";
import styled from "styled-components";
import BookNow from './BookNow'

const UlStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-wrap: wrap;
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
  color: #321b00;

  a {
    text-decoration: none;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-left: 2rem;
  }

  a:hover {
    border-bottom: 2px solid #2351dc;
    font-weight: 700;
  }
  li {
    padding: 20px 30px 20px 0px;
  }
  .book-btn {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    justify-content: center;
    place-items: center;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    width: 80%;
    top: 0;
    right: 0;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 20px 30px 20px 0px;
    }
    a {
      color: aliceblue;
      font-size: 12px;
    }
    .book-btn {
      display: block;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <UlStyled open={open}>
      <li> Home </li>
      <li> Trips </li>
      <li> Services </li>
      <li> About </li>
      <li> Contact us </li>
      
      <div className="book-btn">
      <BookNow />
      </div>
      
    </UlStyled>
  );
};

export default RightNav;
