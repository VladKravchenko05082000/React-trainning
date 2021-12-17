const newPostActionType = "addPost";
const onPostChangeActionType = "changePost";

export let initialState = {
   postListData: [
      { id: 1, massage: "Hi, it`s my first post", likesCount: 15 },
      { id: 2, massage: "Hi, it`s my second post", likesCount: 20 },
      { id: 3, massage: "Hi, it`s my third post", likesCount: 25 }
   ],
   profilePostMassage: ""
}

const profilePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case newPostActionType: {
         let creatNewPost = {
            id: 4, massage: state.profilePostMassage, likesCount: 0
         };
         let copyState = { ...state }
         copyState.postListData = [...state.postListData];
         copyState.postListData.push(creatNewPost);
         copyState.profilePostMassage = ""
         return copyState;
      }
      //для того чтобы не ебаться с именнами переменных можно использовать блочную область видимости {}в case
      case onPostChangeActionType: {
         let copyState = { ...state }
         copyState.profilePostMassage = action.newText;
         return copyState;
      }
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: newPostActionType });
export const onPostChangeActionCreator = (text) =>
   ({ type: onPostChangeActionType, newText: text });


export default profilePageReducer;