function Card (){
    return(
        <div className="sneakersCard">
            <img className="unLiked__ico" src="/img/unLiked.svg" alt="unLiked"/>
            <img className='sneakersCard__img' src="/img/sneakers/1.jpg" alt="Sneaker"/>
            <p className="sneakersCard__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="sneakersCard__info">
              <div className="sneakersCard__price">
                <p className="sneakersCard__price_up">Цена:</p>
                <p className="sneakersCard__price_down">12 999 руб.</p>
              </div>
              <button className="sneakersCard__add">
                <img src="/img/plus.svg"/>
              </button>
            </div>
        </div>
    );
}
export default Card;