import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';

export const AppContext = React.createContext({});


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [serchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened]= React.useState(false);



 React.useEffect(()=>{
    async function fetchData() {     
      const cartResponse = await axios.get('http://localhost:3001/cart');
      const itemsResponse = await axios.get('http://localhost:3001/items');

      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);

    }
    fetchData();
 }, []);



 const onAddToCart = (obj) =>{
  if (cartItems.find((item) => item.title === obj.title)){
  axios.delete(`http://localhost:3001/cart/${obj.id}`);
  setCartItems(prev => prev.filter(item => item.title !== obj.title));
  }
  else{
    try{
      axios.post('http://localhost:3001/cart/' , obj)
      setCartItems((prev) => [...prev, obj]);
    }
    catch(error){
      alert('Не удалось добавить в корзину');
    }
    
  }
  
  };
  const onRemoveItemCart = (title, id) => {
    try{
      axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.title !== title));
    }
    catch(error){
      alert('Не удалось удалить из корзины');
    }
    
  };

 const onChangeSearchInput = (event) =>{
  setSearchValue(event.target.value);
 }

 const isItemAdded = (title) => {
  return cartItems.some(obj => obj.title === title);
 }

  return (
    <AppContext.Provider value={{cartItems, items, isItemAdded, setCartOpened,setCartItems}}>
      <div className="wrapper clear">
      {cartOpened && <Drawer items= {cartItems} onClose={()=>setCartOpened(false)} onRemove = {onRemoveItemCart}/> }
      <Header onClickCart={()=>setCartOpened(true)}/>
      <main className="content p-40">
        <div className="headerContent">
          <h1 className="content__h1">{serchValue ? `Поиск по запросу: "${serchValue}"` : "Все кроссовки"}</h1>
          <div className="searchBlock">
            <img width={14} height={14} className='searchIco'src="/img/search.svg" alt="Serch"/>
            <input onChange={onChangeSearchInput} value={serchValue} className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="goodsContainer">
          {items.filter(item => item.title.toLowerCase().includes(serchValue.toLowerCase())).map((item) => (
            <Card
            onRemove = {onRemoveItemCart}
            key={item.title}
            id={item.id}
            title = {item.title} 
            price = {item.price} 
            imageUrl={item.imageUrl}
            onPlus = { (obj) =>onAddToCart(obj)}
            />
          ))}
        </div>
      </main>
    </div>
    </AppContext.Provider>
  );
}

export default App;
