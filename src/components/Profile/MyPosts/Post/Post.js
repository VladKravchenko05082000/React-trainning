import React from 'react';
import style from "./Post.module.css";
import Preloader from '../../../common/Preloader';

const Post = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   debugger
   return (
      <div>
         {props.massage}
         <div className={style.avatar}>
            <img src={props.profile.photos.small} alt="ava" />
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