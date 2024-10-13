import React from "react";
function Card ({ imageUrl, title, price, onPlus}){
  const[isAddPlus, setIsAddPlus] = React.useState(false);
  const handleClickPlus = () =>{
    onPlus({imageUrl, title, price});
    setIsAddPlus(!isAddPlus);

  }
  const[isAddLiked, setIsAddLiked] = React.useState(false);
  const handleClickLiked = () =>{
    setIsAddLiked(!isAddLiked);
  }

    return(
        <div className= 'sneakersCard'>
            <img className="unLiked__ico" src={isAddLiked?"/img/Liked.svg":"/img/unLiked.svg" } alt="unLiked" onClick={handleClickLiked}/>
            <img className='sneakersCard__img' src={imageUrl} alt="Sneaker"/>
            <p className="sneakersCard__title">{title}</p>
            <div className="sneakersCard__info">
              <div className="sneakersCard__price">
                <b className="sneakersCard__price_up">Цена:</b>
                <p className="sneakersCard__price_down">{price} руб.</p>
              </div>
              <button className="sneakersCard__add" >
                <img src={isAddPlus ? "/img/Cheked.svg":"/img/plus.svg"} alt='Plus' onClick={handleClickPlus}/>
              </button>
            </div>
        </div>
    );
}
export default Card;