import React from 'react';
import thanYou from "../assets/illustration-thank-you.svg"
import "../styles/TyCard.scss"

const TyCard = ({calificacion}) => {
    if (calificacion > 0) {
        return (
        <div className="card tyCard slide-in-blurred-top">
          <figure className="tyCard__figure">
            <img src={thanYou} alt="Thank you!"></img>
          </figure>
          <div className="tyCard__selected">
            <p className="tyCard__selected-p">You selected {calificacion} out of 5</p>
          </div>
          <div className="tyCard__text">
            <p className="tyCard__text-ty">Thank you!</p>
            <p className="tyCard__text-p">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
        </div>
        )
    }
};

export default TyCard;