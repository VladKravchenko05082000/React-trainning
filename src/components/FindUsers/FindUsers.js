import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './FindUsers.module.css'
import defaultavatar from "../../assets/defaultusericon.png"
import { PROFILE_ROUTE } from '../../utils/const';

const FindUsers = (props) => {
   return (
      <div>
         <div className={style.pages__container}>
            {props.pages.map(pages => {
               return <button key={pages} className={props.activePage === pages
                  && style.pageActive || props.activePage !== pages && style.pageCount}
                  onClick={() => { props.onChangedPage(pages) }}>{pages}</button>
            })}
         </div>
         {props.findUsers.map(users => <div key={users.id} className={style.container}>
            <div className={style.img}>
               <NavLink to={PROFILE_ROUTE + users.id}>
                  <img src={users.photos.small != null ? users.photos.small : users.photos.small = defaultavatar} alt='UserPhoto' />
               </NavLink>
            </div>
            <div className={style.description__content}>
               <div >
                  <div>{users.followed ? <button onClick={() => { props.unfollow(users.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(users.id) }}> Follow</button>}</div>
               </div>
               <div>{users.name}</div>
               <div>{users.status}</div>
            </div>
         </div>)}
      </div>
   )
}

export default FindUsers