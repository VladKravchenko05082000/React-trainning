import React from 'react';
import style from "./MyPosts.module.css";
import Post from './Post/Post';
import store from "../../../store/state";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../store/profilePageReducer";


const MyPosts = (props) => {
   let refPost = React.createRef();

   let newPost = () => {
      store.dispatch(addPostActionCreator())
   }

   let clearPost = () => {
      let text = refPost.current.value = "";
   }

   let onPostChange = () => {
      let text = refPost.current.value;
      store.dispatch(onPostChangeActionCreator(text))
   }



   return (
      <div className={style.Main__content}>
         <div>
            <h3 className={style.Main__content__title}>My post</h3>
         </div>
         <div>
            <div className={style.message__form}>
               <input className={style.message__input} value={store._state.profilePage.profilePostMassage} ref={refPost} onChange={onPostChange} placeholder="Enter you`re massage" />
               <button className={style.message__button} onClick={newPost}>Create</button>
               <button className={style.message__button} onClick={clearPost}>Clear</button>
            </div>
            <div className={style.posts}>
               {store._state.profilePage.postListData.map(postList =>
                  <Post key={postList.id} massage={postList.massage} likesCount={postList.likesCount} />
               )}
            </div>
         </div>
      </div>
   );
}

export default MyPosts;