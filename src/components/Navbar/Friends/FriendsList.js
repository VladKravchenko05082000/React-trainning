import React from 'react';
import style from './FriendsList.module.css';

const FriendsList = (props) => {

   return (
      <div>
         <div className={style.title}>
            <p>Friends List</p>
         </div>
         <ul className={style.items}>
            {
               props.friendsList.map(friendList => (
                  <li className={style.item} key={friendList.id}>
                     <img key={friendList.id} src={friendList.avatar} alt='FriendAvatar' />
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