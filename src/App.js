import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <main className="content p-40">
        <div className="headerContent">
          <h1 className="content__h1">Все кроссовки</h1>
          <div className="searchBlock">
            <img width={14} height={14} className='searchIco'src="/img/search.svg" alt="Serch"/>
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="goodsContainer">
          <Card/>
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
          <div className="sneakersCard">
          <img className="unLiked__ico" src="/img/unLiked.svg" alt="unLiked"/>
            <img className='sneakersCard__img' src="/img/sneakers/2.jpg"  alt="Sneaker"/>
            <p className="sneakersCard__title">Мужские Кроссовки Nike Air Max 270</p>
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
          <div className="sneakersCard">
          <img className="unLiked__ico" src="/img/unLiked.svg" alt="unLiked"/>
            <img className='sneakersCard__img' src="/img/sneakers/3.jpg"  alt="Sneaker"/>
            <p className="sneakersCard__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="sneakersCard__info">
              <div className="sneakersCard__price">
                <p className="sneakersCard__price_up">Цена:</p>
                <p className="sneakersCard__price_down">8 499 руб.</p>
              </div>
              <button className="sneakersCard__add">
                <img  src="/img/plus.svg"/>
              </button>
            </div>
          </div>
          <div className="sneakersCard">
          <img className="unLiked__ico" src="/img/unLiked.svg" alt="unLiked"/>
            <img className='sneakersCard__img' src="/img/sneakers/4.jpg"  alt="Sneaker"/>
            <p className="sneakersCard__title">Кроссовки Puma X Aka Boku Future Rider</p>
            <div className="sneakersCard__info">
              <div className="sneakersCard__price">
                <p className="sneakersCard__price_up">Цена:</p>
                <p className="sneakersCard__price_down">8 999 руб.</p>
              </div>
              <button className="sneakersCard__add">
                <img src="/img/plus.svg"/>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
