import { newMassageActionCreator, onMessageChangeActionCreator } from '../../store/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      userList: state.dialogsPage.userListData,
      listConversation: state.dialogsPage.conversationListData,
      dialogsMassage: state.dialogsPage.dialogsMassage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      newMassage: () => {
         dispatch(newMassageActionCreator());
      },
      massageChange: (text) => {
         dispatch(onMessageChangeActionCreator(text));
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;