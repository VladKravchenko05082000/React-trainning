import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';
import { PROFILE_ROUTE, MESSAGE_ROUTE, NEWS_ROUTE, MUSIC_ROUTE, SETTINGS_ROUTE } from "../../utils/const";
import FriendsListContainer from './Friends/FriendsListContainer';

const SideBar = () => {
   return (
      <nav className={style.Main__sidebar}>
         <ul>
            <li >
               <NavLink to={PROFILE_ROUTE} activeClassName={style.activeLink} className={style.item}>Profile</NavLink>
            </li>
            <li >
               <NavLink to={MESSAGE_ROUTE} activeClassName={style.activeLink} className={style.item}>Massage</NavLink>
            </li>
            <li >
               <NavLink to={NEWS_ROUTE} activeClassName={style.activeLink} className={style.item}>News</NavLink>
            </li>
            <li >
               <NavLink to={MUSIC_ROUTE} activeClassName={style.activeLink} className={style.item}>Music</NavLink>
            </li>
            <li >
               <NavLink to={SETTINGS_ROUTE} activeClassName={style.activeLink} className={style.item}>Settings</NavLink>
            </li>
            <li className={style.FriendsList}>
               <FriendsListContainer />
            </li>
         </ul>
      </nav>
   );
}

export default SideBar;