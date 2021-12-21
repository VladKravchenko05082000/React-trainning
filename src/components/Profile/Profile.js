import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from "./Profile.module.css";
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
   return (
      <div className={style.Main__content}>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;