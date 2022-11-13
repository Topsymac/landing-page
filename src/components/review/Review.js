import React from 'react';
import './review.css';
import memoji from '../../Assets/Male 02.png'

const Review = () => {
  return (
    <div className="review-container">
      <div className="reviewHeading">
        <h2>Let's hear from other Roqquians</h2>
        <p>Peope who use our app think we are awesome. Here's what they are saying!</p>
      </div>
      <div className="reviewCardWrapper">
        <div className="reviewCards">
          <div className="CardOne">
            <img src={memoji} alt="" />
            <p>Having 15 years of experience in design field. Design is my passion and sharing my knowledge is my love.</p>
            <p><b>-Ann Franks</b></p>
          </div>
          <div className="CardOne">
            <img src={memoji} alt="" />
            <p>Having 15 years of experience in design field. Design is my passion and sharing my knowledge is my love.</p>
            <p><b>-Ann Franks</b></p>
          </div>
          <div className="CardOne">
            <img src={memoji} alt="" />
            <p>Having 15 years of experience in design field. Design is my passion and sharing my knowledge is my love.</p>
            <p><b>-Ann Franks</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review