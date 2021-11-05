import React from 'react';
import style from './Sidebar.module.css';

const SideBar = () => {
   return (
      <nav className={style.Main__sidebar}>
         <ul>
            <li >
               <a href="#s" className={style.item}>Profile</a>
            </li>
            <li >
               <a href="#s" className={style.item}>Massage</a>
            </li>
            <li >
               <a href="#s" className={style.item}>News</a>
            </li>
            <li >
               <a href="#s" className={style.item}>Music</a>
            </li>
            <li >
               <a href="#s" className={style.item}>Settings</a>
            </li>
         </ul>
      </nav>
   );
}

export default SideBar;