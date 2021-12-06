import React from 'react';
import store from "../../store/redux-store";
import { newMassageActionCreator, onMessageChangeActionCreator } from '../../store/dialogsPageReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
   
   let userList = store.getState().dialogsPage.userListData;
   let conversationListf = store.getState().dialogsPage.conversationListData;
   let dialogsMassage = store.getState().dialogsPage.dialogsMassage;

   let newMassage = () => {
      store.dispatch(newMassageActionCreator());
   }

   let onMessageChange = (text) => {
      store.dispatch(onMessageChangeActionCreator(text));
   }

   return (
      <Dialogs newMassage={newMassage} massageChange={onMessageChange} userList={userList}
         conversationListf={conversationListf} dialogsMassage={dialogsMassage}  />
   );
}

export default DialogsContainer;