import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator, setPosts } from "../../../store/profilePageReducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let refPosts = React.createRef();

let mapStateToProps = (state) => {
   return {
      refPost: refPosts,
      posts: state.profilePage.postListData,
      postMassage: state.profilePage.profilePostMassage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      clearPost: () => {
         refPosts.current.value = "";
      },
      onPostChange: () => {
         let text = refPosts.current.value;
         dispatch(onPostChangeActionCreator(text))
      },
      newPost: () => {
         dispatch(addPostActionCreator())
         refPosts.current.value = "";
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;