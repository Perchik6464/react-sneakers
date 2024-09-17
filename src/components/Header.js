function Header(){
    return(
    <header class="header d-flex justify-between align-center">
        <div className="headerLeft  d-flex align-center">
            <img width={40} height={40} src="/img/logo.svg" alt="logo"/>
            <div className="headerInfo">
                <h3 className="headerInfo__h3">REACT SNEAKERS</h3>
                <p className="headerInfo__p">Магазин лучших кроссовок</p>  
            </div>
        </div>
        <ul className="headerRight d-flex ">
            <li className="headerTable">
                <img  width={18} height={18} src="/img/cart.svg" alt="cart"/>
                <span className="headerTable__text">1205 руб.</span>
            </li>
            <li className="headerTable">
                <img  width={18} height={18} src="/img/like.svg" alt="like"/>
                <span className="headerTable__text">Закладки</span>
            </li>
            <li className="headerTable">
                <img  width={18} height={18} src="/img/user.svg" alt="user"/>
                <span className="headerTable__text">Профиль</span>
            </li>
        </ul>  
    </header>
    );
}
export default Header;