const newPostActionType = "addPost";
const onPostChangeActionType = "changePost";

const profilePageReducer = (state, action) => {
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