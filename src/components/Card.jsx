import React from "react";
import { AppContext } from "../App";
function Card ({ imageUrl, title, price, onPlus, id, added = false}){
  const {isItemAdded} = React.useContext(AppContext);
  const handleClickPlus = () =>{
    onPlus({imageUrl, title, price, id});
  }
    return(
        <div className= 'sneakersCard' key={id} >
            <img className='sneakersCard__img' src={imageUrl} alt="Sneaker"/>
            <p className="sneakersCard__title">{title}</p>
            <div className="sneakersCard__info">
              <div className="sneakersCard__price">
                <b className="sneakersCard__price_up">Цена:</b>
                <p className="sneakersCard__price_down">{price} руб.</p>
              </div>
              <button className="sneakersCard__add" >
                <img src={isItemAdded(title) ? "/img/Cheked.svg":"/img/plus.svg"} alt='Plus' onClick={handleClickPlus}/>
              </button>
            </div>
        </div>
    );
}
export default Card;