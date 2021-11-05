import React from 'react';
import style from "./Header.module.css";

const Header = () => {
   return (
      <header className={style.Main__header}>
         <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png' alt='Не удалось загрузить картинку'></img>
      </header>
   );
}

export default Header;