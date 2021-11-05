import React from 'react';
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
         <div>
            My post
         </div>
         <div>
            <textarea></textarea>
            <button>Create Post</button>
            <button>Remove</button>
            <div className={style.posts}>
               <Post massage = "Hi, it`s my first post" likesCount="15"/>
               <Post massage = "Hi, it`s my second post" likesCount="20"/>
            </div>
         </div>
      </div>
   );
}

export default MyPosts;