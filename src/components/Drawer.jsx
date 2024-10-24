import React from 'react';
import Info from './info';
import { AppContext } from '../App';
import axios from 'axios';
function Drawer( {onClose ,onRemove, items =[]}){
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const [isComplited, setisComplited] = React.useState(false);
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

    const onClickOrder = ()=>{
        setisComplited(true);
        setCartItems([]);
        cartItems.forEach(item => {
            axios.delete('http://localhost:3001/cart/' + item.id);
        });
        
    }
    return(
        <div className="overlay">
            <div className="drawer">
                <h3 className="cart__title d-flex justify-between">Корзина
                    <img onClick={onClose} className="BtnRemove cu-p" src="/img/BtnRemove.svg" alt="Remove"/>
                </h3>
                { 
                    items.length > 0 ? 
                    <div className="parent_block">
                    <div className="itemsCart">
                    {items.map((obj) =>(
                        
                        <div key={obj.id} className="catrSneakers__card">
                            <img className="cartSneakers__img" src={obj.imageUrl} alt="Sneakers" />
                            <div className="cartSneakers__text">
                            <p className="cartSneakers__name">{obj.title}</p>
                            <p className="cartSneakers__price">{obj.price} руб.</p>
                            </div>
                            <img className="cartSneakers__BtnRemove" src="/img/BtnRemove.svg" alt="Remove" onClick={() => onRemove(obj.title, obj.id)}/>
                        </div>
                    ))}
                    </div>
                    <ul className="cartFooter">
                    <li className="cartFooter__item">
                        <span className="cartFooter__span_left">Итого:</span>
                        <div className="cartFooter__dot"></div>
                        <b className="cartFooter__b_right">{totalPrice} руб.</b>
                    </li>
                    <li className="cartFooter__item">
                        <span className="cartFooter__span_left">Налог 5%:</span>
                        <div className="cartFooter__dot"></div>
                        <b className="cartFooter__b_right">{Math.round(totalPrice * 0.05)} руб.</b>
                    </li>
                    </ul>
                    <button onClick={onClickOrder} className="cartFooter__btn _greenBtn">Оформить заказ <img src="/img/arrowRight.svg" alt="arrow"/></button>
                </div> : <Info 
                title={isComplited ? 'Заказ оформлен':'Корзина пустая'}
                description={isComplited ?'Ваш заказ скоро будет передан курьерской доставке' :'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.' }
                img ={isComplited ? '/img/complited.svg' :'/img/box.svg'}/>
                }
                

            </div>
        </div>
    );
}
export default Drawer;