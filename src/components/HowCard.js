import React, {useState} from 'react';
import Star from "../assets/icon-star.svg"
import "../styles/HowCard.scss"

const HowCard = ({calificacion, setCalificacion}) => {
    let [rate, setRate] = useState(0)
    const hwCard = document.getElementById('hwCard')
    let rateProp = rate

    const handleClick = (event) => {
        event.preventDefault()
        if (rate > 0) {
            setTimeout(() => setCalificacion(rateProp), 600)
        }
        setTimeout(() => hwCard.classList.add('none'), 450)
        hwCard.classList.add('slide-out-blurred-bottom')
    }
    return (
        <div className="card howCard" id="hwCard">
            <div className="howCard__img">
              <figure>
                <img src={Star} alt="Star"></img>
              </figure>
            </div>
            <div className="howCard__Text">
              <h1>How did we do?</h1>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="howCard__form">
              <form>
                <div className="form__inputs">
                  <input type="radio" id="1" name="rate" value="1" onFocus={(e) => {setRate(e.currentTarget.value)}} />
                  <label htmlFor="1" >1</label>
                  <input type="radio" id="2" name="rate" value="2" onFocus={(e) => {setRate(e.currentTarget.value)}} />
                  <label htmlFor="2" >2</label>
                  <input type="radio" id="3" name="rate" value="3" onFocus={(e) => {setRate(e.currentTarget.value)}} />
                  <label htmlFor="3" >3</label>
                  <input type="radio" id="4" name="rate" value="4" onFocus={(e) => {setRate(e.currentTarget.value)}} />
                  <label htmlFor="4" >4</label>
                  <input type="radio" id="5" name="rate" value="5" onFocus={(e) => {setRate(e.currentTarget.value)}} />
                  <label htmlFor="5" >5</label>
                </div>
                <button type="submit" onClick={handleClick}>SUBMIT</button>
              </form>
            </div>
          </div>
    );
};

export default HowCard