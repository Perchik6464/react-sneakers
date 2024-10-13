import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened]= React.useState(false);

 React.useEffect(()=>{
  fetch('https://670a72c9ac6860a6c2c98557.mockapi.io/items').then(res => {
    return res.json();
  }).then(json =>{
    setItems(json);
  }
  );
 }, []);
 
 const onAddToCart = (obj) =>{
  setCartItems((prev) => [ ... prev, obj]);
  
 };


  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items= {cartItems} onClose={()=>setCartOpened(false)}/> : null }
      <Header onClickCart={()=>setCartOpened(true)}/>
      <main className="content p-40">
        <div className="headerContent">
          <h1 className="content__h1">Все кроссовки</h1>
          <div className="searchBlock">
            <img width={14} height={14} className='searchIco'src="/img/search.svg" alt="Serch"/>
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="goodsContainer">
          {items.map((item) => (
            <Card
            title = {item.title} 
            price = {item.price} 
            imageUrl={item.imageUrl}
            onPlus = { (obj) =>onAddToCart(obj)}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
