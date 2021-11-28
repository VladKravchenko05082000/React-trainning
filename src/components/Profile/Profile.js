import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from "./Profile.module.css";

const Profile = (props) => {
   return (
      <div className={style.Main__content}>
         <ProfileInfo />
         <MyPosts  />
      </div>
   );
}

export default Profile;