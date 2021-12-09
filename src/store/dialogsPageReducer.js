import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";
import avatar3 from "../assets/3.jpg";
import avatar4 from "../assets/4.png";

const newMassageActionType = "addMessage";
const onMessageChangeActionType = "changeMassage";

export let initialState = {
   userListData: [
      { id: "/1", name: "Vlad", avatar: avatar1 },
      { id: "/2", name: "Roma", avatar: avatar2 },
      { id: "/3", name: "Vika", avatar: avatar3 },
      { id: "/4", name: "Luda", avatar: avatar4 },
   ],
   conversationListData: [
      { id: 1, massage: "Привет" },
      { id: 2, massage: "Привет" },
      { id: 3, massage: "Как дела?" },
      { id: 4, massage: "Норм" },
   ],
   dialogsMassage: ""
}

export const dialogsPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case newMassageActionType: {
         let createMassage = {
            id: 5, massage: state.dialogsMassage
         };
         let copyState = { ...state }
         copyState.conversationListData = [...state.conversationListData]
         copyState.conversationListData.push(createMassage);
         copyState.dialogsMassage = ""
         return copyState;
      }
      case onMessageChangeActionType: {
         let copyState = { ...state }
         copyState.dialogsMassage = action.newMassages;
         return copyState;
      }
      default:
         return state;
   }
}

export const newMassageActionCreator = () => ({ type: newMassageActionType });
export const onMessageChangeActionCreator = (text) =>
   ({ type: onMessageChangeActionType, newMassages: text })

export default dialogsPageReducer;