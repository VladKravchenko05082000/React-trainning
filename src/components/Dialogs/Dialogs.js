import React from 'react';
import style from './Dialogs.module.css'
import UserList from './UserList/UserList';
import Conversation from './Conversation/Conversation';



const Dialogs = (props) => {

   let createNewMassage = () => {
      props.newMassage();
   }


   let onMessageChange = (e) => {
      let text = e.target.value;
      props.massageChange(text);
   }

   return (
      <div className={style.Dialogs}>
         <div className={style.Dialogs__list}>
            <ul className={style.list__items}>
               {props.userList.map(userlist =>
                  <li className={style.list__item} key={userlist.id}>
                     <img key={userlist.id} src={userlist.avatar} />
                     <UserList id={userlist.id} name={userlist.name} />
                  </li>
               )}
            </ul>
         </div>
         <div className={style.Dialogs__conversation}>
            <ul className={style.conversation__items}>
               {props.conversationListf.map(conversationList =>
                  <li className={conversationList.id % 2 === 0 ? style.conversation__item : style.conversation__item__right}
                     key={conversationList.id}>
                     <p>
                        <Conversation id={conversationList.id} massage={conversationList.massage} />
                     </p>
                  </li>
               )}
            </ul>
            <div className={style.message__form}>
               <input className={style.message__input} onChange={onMessageChange} value={props.dialogsMassage} placeholder="Enter you`re massage" />
               <button className={style.message__button} onClick={createNewMassage}>Send massage</button>
            </div>
         </div>
      </div >
   );
}

export default Dialogs;