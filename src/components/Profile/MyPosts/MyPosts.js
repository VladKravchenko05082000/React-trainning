import React from 'react';
import style from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

   let postListData = [
      { id: 1, massage: "Hi, it`s my first post", likesCount: 15 },
      { id: 2, massage: "Hi, it`s my second post", likesCount: 20 },
      { id: 3, massage: "Hi, it`s my third post", likesCount: 25 }
   ]

   return (
      <div>
         <div>
            <h3>My post</h3>
         </div>
         <div>
            <textarea></textarea>
            <button>Create Post</button>
            <button>Remove</button>
            <div className={style.posts}>
               {postListData.map(postList =>
                  <Post key={postList.id} massage={postList.massage} likesCount={postList.likesCount} />
               )}
            </div>
         </div>
      </div>
   );
}

export default MyPosts;