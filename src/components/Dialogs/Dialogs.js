import React from 'react';
import style from './Dialogs.module.css'
import UserList from './UserList/UserList';
import Conversation from './Conversation/Conversation';

const Dialogs = (props) => {

   let userListData = [
      { id: "/1", name: "Vlad" },
      { id: "/2", name: "Roma" },
      { id: "/3", name: "Vika" },
      { id: "/4", name: "Luda" },
   ]

   let conversationListData = [
      { id: 1, massage: "12" },
      { id: 2, massage: "21" },
      { id: 3, massage: "32" },
      { id: 4, massage: "23" },
   ]

   return (
      <div className={style.Dialogs}>
         <div className={style.Dialogs__list}>
            <ul className={style.list__items}>
               {userListData.map(userlist =>
                  <li className={style.list__item} key={userlist.id}>
                     <UserList id={userlist.id} name={userlist.name} />
                  </li>
               )}
            </ul>
         </div>
         <div className={style.Dialogs__conversation}>
            <ul className={style.conversation__items}>
               {conversationListData.map(conversationList =>
                  <li className={style.conversation__item} key={conversationList.id}>
                     <Conversation id={conversationList.id} massage={conversationList.massage} />
                  </li>
               )}
            </ul>
         </div>
      </div >
   );
}

export default Dialogs;