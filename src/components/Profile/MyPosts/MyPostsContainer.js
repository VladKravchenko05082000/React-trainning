import React from 'react';
import store from '../../../store/redux-store';
import { addPostActionCreator, onPostChangeActionCreator, initialState } from "../../../store/profilePageReducer";
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
   let refPost = React.createRef();
   let posts = store.getState().profilePage.postListData;
   let postMassages = store.getState().profilePage.profilePostMassage;

   let newPost = () => {
      store.dispatch(addPostActionCreator())
      refPost.current.value = "";
   }

   let clearPost = () => {
      refPost.current.value = "";
   }

   let onPostChange = () => {
      let text = refPost.current.value;
      store.dispatch(onPostChangeActionCreator(text))
   }

   return (
      <MyPosts clearPost={clearPost} onPostChange={onPostChange} newPost={newPost} refPost={refPost}
         posts={posts} postMassage={postMassages}
      />
   );
}

export default MyPostsContainer;