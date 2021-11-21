import React from 'react';
import style from './Dialogs.module.css'
import UserList from './UserList/UserList';
import Conversation from './Conversation/Conversation';
import state from "../../store/state";




const Dialogs = (props) => {


   return (
      <div className={style.Dialogs}>
         <div className={style.Dialogs__list}>
            <ul className={style.list__items}>
               {state.dialogsPage.userListData.map(userlist =>
                  <li className={style.list__item} key={userlist.id}>
                     <img key={userlist.id} src={userlist.avatar} />
                     <UserList id={userlist.id} name={userlist.name} />
                  </li>
               )}
            </ul>
         </div>
         <div className={style.Dialogs__conversation}>
            <ul className={style.conversation__items}>
               {state.dialogsPage.conversationListData.map(conversationList =>
                  <li className={conversationList.id % 2 === 0 ? style.conversation__item : style.conversation__item__right}
                     key={conversationList.id}>
                     <p>
                        <Conversation id={conversationList.id} massage={conversationList.massage} />
                     </p>
                  </li>
               )}
            </ul>
         </div>
      </div >
   );
}

export default Dialogs;