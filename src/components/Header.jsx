import React from "react";
import { AppContext } from "../App";

function Header(props){
    const {cartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);
    return(
    <header className="header d-flex justify-between align-center">
        <div className="headerLeft  d-flex align-center">
            <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
            <div className="headerInfo">
                <h3 className="headerInfo__h3">REACT SNEAKERS</h3>
                <p className="headerInfo__p">Магазин лучших кроссовок</p>  
            </div>
        </div>
        <ul className="headerRight d-flex ">
            <li onClick={props.onClickCart} className="headerTable">
                <img  width={18} height={18} src="/img/cart.svg" alt="cart"/>
                <span className="headerTable__text">{totalPrice} руб.</span>
            </li>
        </ul>  
    </header>
    );
}
export default Header;