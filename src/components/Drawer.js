function Drawer(){
    return(
        <div className="overlay">
            <div className="drawer">
                <h3 className="cart__title d-flex justify-between">Корзина
                    <img className="BtnRemove cu-p" src="/img/BtnRemove.svg" alt="Remove"/>
                </h3>
                
                <div className="itemsCart">
                <div className="catrSneakers__card">
                    <img className="cartSneakers__img" src="/img/sneakers/1.jpg" alt="Sneakers" />
                    <div className="cartSneakers__text">
                    <p className="cartSneakers__name">Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <p className="cartSneakers__price">12 999руб.</p>
                    </div>
                    <img className="cartSneakers__BtnRemove" src="/img/BtnRemove.svg" alt="Remove"/>
                </div>

                <div className="catrSneakers__card">
                    <img className="cartSneakers__img" src="/img/sneakers/2.jpg" alt="Sneakers" />
                    <div className="cartSneakers__text">
                    <p className="cartSneakers__name">Мужские Кроссовки Nike Air Max 270</p>
                    <p className="cartSneakers__price">8 479руб.</p>
                    </div>
                    <img className="cartSneakers__BtnRemove" src="/img/BtnRemove.svg" alt="Remove"/>
                </div>
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