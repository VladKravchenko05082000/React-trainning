import React from 'react';
import style from './FriendsList.module.css';
import store from "../../../store/state";


const FriendsList = (props) => {
   return (
      <div>
         <div className={style.title}>
            <p>Friends List</p>
         </div>
         <ul className={style.items}>
            {
               store._state.friendsListNavBar.friendsListData.map(friendList => (
                  <li className={style.item} key={friendList.id}>
                     <img key={friendList.id} src={friendList.avatar} />
                     <div className={style.name}>
                        {friendList.name}
                     </div>

                  </li>
               ))
            }
         </ul>
      </div>
   );
}

export default FriendsList;