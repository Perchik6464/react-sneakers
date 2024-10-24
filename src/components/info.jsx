import React from 'react';
import { AppContext } from '../App';

const Info = ({title, img,description}) => {
    const {setCartOpened} = React.useContext(AppContext);
  return (
    <div className="cartEmpty">
        <img className="cartEmpty__box" alt="box" src={img}/>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className="_greenBtn" onClick={() => setCartOpened(false)}><img alt="arrow" src='/img/arrowLeft.svg' />Вернуться назад</button>
    </div>
  );
};

export default Info;
