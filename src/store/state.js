import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";
import avatar3 from "../assets/3.jpg";
import avatar4 from "../assets/4.png";
import dialogsPageReducer from "./dialogsPageReducer";
import friendsListNavBarReducer from "./friendsListNavBarReducer";
import profilePageReducer from "./profilePageReducer";



let store = {
   _state: {
      dialogsPage: {
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
         dialogstMassage: "1"
      },
      profilePage: {
         postListData: [
            { id: 1, massage: "Hi, it`s my first post", likesCount: 15 },
            { id: 2, massage: "Hi, it`s my second post", likesCount: 20 },
            { id: 3, massage: "Hi, it`s my third post", likesCount: 25 }
         ],
         profilePostMassage: "1"
      },
      friendsListNavBar: {
         friendsListData: [
            { id: "/1", name: "Vlad", avatar: avatar1 },
            { id: "/2", name: "Roma", avatar: avatar2 }
         ]
      }
   },

   _callSubscribe() {
      console.log("State is changed")
   },

   getState() {
      return this._state
   },

   subscribe(observer) {
      this._callSubscribe = observer;//Паттерн observer
   },

   dispatch(action) {
      this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
      this._state.friendsListNavBar = friendsListNavBarReducer(this._state.friendsListNavBar, action);
      this._state.profilePage = profilePageReducer(this._state.profilePage, action);
      this._callSubscribe(this._state);
   }
}

window.store = store;
export default store;

