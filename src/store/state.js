import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";
import avatar3 from "../assets/3.jpg";
import avatar4 from "../assets/4.png";

const newPostActionType = "addPost";
const onPostChangeActionType = "changePost";
const newMassageActionType = "addMessage";
const onMessageChangeActionType = "changeMassage";

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

   __addPost() {
      let creatNewPost = {
         id: 4, massage: this._state.profilePage.profilePostMassage, likesCount: 0
      };
      this._state.profilePage.postListData.push(creatNewPost);
      this._state.profilePage.profilePostMassage = ""
      this._callSubscribe(this._state);
   },

   __changePost(newText) {
      this._state.profilePage.profilePostMassage = newText;
      this._callSubscribe(this._state);
   },

   __addMessage() {
      let createMassage = {
         id: 5, massage: this._state.dialogsPage.dialogstMassage
      };
      this._state.dialogsPage.conversationListData.push(createMassage);
      this._state.dialogsPage.dialogstMassage = ""
      this._callSubscribe(this._state);
   },

   __changeMassage(newMassages) {
      this._state.dialogsPage.dialogstMassage = newMassages;
      this._callSubscribe(this._state);
   },












   dispatch(action) {
      if (action.type === newPostActionType) {
         this.__addPost();

      } else if (action.type === onPostChangeActionType) {
         this.__changePost(action.newText);

      } else if (action.type === newMassageActionType) {
         this.__addMessage();

      }
      else if (action.type === onMessageChangeActionType) {
         this.__changeMassage(action.newMassages);
      }
   },

   newPostActionCreator() {
      let action = { type: newPostActionType };
      return action;
   },

   onPostChangeActionCreator(text) {
      let action = { type: onPostChangeActionType, newText: text };
      return action;
   },

   newMassageActionCreator() {
      let action = { type: newMassageActionType };
      return action;
   },

   onMessageChangeActionCreator(text) {
      let action = { type: onMessageChangeActionType, newMassages: text }
      return action;
   }
}

window.store = store;
export default store;

