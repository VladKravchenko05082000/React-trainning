import React from 'react';
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

   let createnewPost = () => {
      props.newPost();
   }

   let changePost = () => {
      props.onPostChange();
   }

   let clearPost = () => {
      props.clearPost();
   }
   return (
      <div className={style.Main__content}>
         <div>
            <h3 className={style.Main__content__title}>My post</h3>
         </div>
         <div>
            <div className={style.message__form}>
               <input className={style.message__input} value={props.postMassage} ref={props.refPost} onChange={changePost} placeholder="Enter you`re massage" />
               <button className={style.message__button} onClick={createnewPost}>Create</button>
               <button className={style.message__button} onClick={clearPost}>Clear</button>
            </div>
            <div className={style.posts}>
               {props.posts.map(postList =>
                  <Post key={postList.id} massage={postList.massage} likesCount={postList.likesCount} />
               )}
            </div>
         </div>
      </div>
   );
}

export default MyPosts;