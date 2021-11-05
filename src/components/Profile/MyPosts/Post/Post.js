import React from 'react';
import style from "./Post.module.css";
import ava from "../../../../assets/13.png"

const Post = (props) => {
   return (
      <div>
         {props.massage}
         <div className={style.avatar}>
            <img src={ava} alt="ava" />
         </div>
         <div className={style.like}>
            <span>
               Like: {props.likesCount}
            </span>
         </div>
      </div>
   );
}

export default Post;