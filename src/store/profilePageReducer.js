const newPostActionType = "addPost";
const onPostChangeActionType = "changePost";

export let initialState = {
   postListData: [
      { id: 1, massage: "Hi, it`s my first post", likesCount: 15 },
      { id: 2, massage: "Hi, it`s my second post", likesCount: 20 },
      { id: 3, massage: "Hi, it`s my third post", likesCount: 25 }
   ],
   profilePostMassage: "1"
}

const profilePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case newPostActionType:
         let creatNewPost = {
            id: 4, massage: state.profilePostMassage, likesCount: 0
         };
         state.postListData.push(creatNewPost);
         state.profilePostMassage = ""
         return state;
      case onPostChangeActionType:
         state.profilePostMassage = action.newText;
         return state;
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: newPostActionType });
export const onPostChangeActionCreator = (text) =>
   ({ type: onPostChangeActionType, newText: text })

export default profilePageReducer;