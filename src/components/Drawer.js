function Drawer( {onClose , items =[]}){
    return(
        <div className="overlay">
            <div className="drawer">
                <h3 className="cart__title d-flex justify-between">Корзина
                    <img onClick={onClose} className="BtnRemove cu-p" src="/img/BtnRemove.svg" alt="Remove"/>
                </h3>
                
                <div className="itemsCart">
                {items.map((obj) =>(
                    <div className="catrSneakers__card">
                        <img className="cartSneakers__img" src={obj.imageUrl} alt="Sneakers" />
                        <div className="cartSneakers__text">
                        <p className="cartSneakers__name">{obj.title}</p>
                        <p className="cartSneakers__price">{obj.price} руб.</p>
                        </div>
                        <img className="cartSneakers__BtnRemove" src="/img/BtnRemove.svg" alt="Remove"/>
                    </div>
                ))}
                </div>
                <ul className="cartFooter">
                <li className="cartFooter__item">
                    <span className="cartFooter__span_left">Итого:</span>
                    <div className="cartFooter__dot"></div>
                    <b className="cartFooter__b_right">21 498 руб.</b>
                </li>
                <li className="cartFooter__item">
                    <span className="cartFooter__span_left">Налог 5%:</span>
                    <div className="cartFooter__dot"></div>
                    <b className="cartFooter__b_right">1074 руб.</b>
                </li>
                </ul>
                <button className="cartFooter__btn _greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
            </div>
        </div>
    );
}
export default Drawer;