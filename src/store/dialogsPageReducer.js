const newMassageActionType = "addMessage";
const onMessageChangeActionType = "changeMassage";

export const dialogsPageReducer = (state, action) => {
   switch (action.type) {
      case newMassageActionType:
         let createMassage = {
            id: 5, massage: state.dialogstMassage
         };
         state.conversationListData.push(createMassage);
         state.dialogstMassage = ""
         return state;
      case onMessageChangeActionType:
         state.dialogstMassage = action.newMassages;
         return state;
      default:
         return state;
   }
}

export const newMassageActionCreator = () => ({ type: newMassageActionType });
export const onMessageChangeActionCreator = (text) =>
   ({ type: onMessageChangeActionType, newMassages: text })

export default dialogsPageReducer;