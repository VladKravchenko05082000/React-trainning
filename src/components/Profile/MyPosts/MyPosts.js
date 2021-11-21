import React from 'react';
import style from "./MyPosts.module.css";
import Post from './Post/Post';
import state from "../../../store/state";


const MyPosts = () => {



   return (
      <div className={style.Main__content}>
         <div>
            <h3>My post</h3>
         </div>
         <div>
            <textarea></textarea>
            <button>Create Post</button>
            <button>Remove</button>
            <div className={style.posts}>
               {state.profilePage.postListData.map(postList =>
                  <Post key={postList.id} massage={postList.massage} likesCount={postList.likesCount} />
               )}
            </div>
         </div>
      </div>
   );
}

export default MyPosts;