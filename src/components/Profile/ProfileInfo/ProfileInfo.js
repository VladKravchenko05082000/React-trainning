import React from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from '../../common/Preloader';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div className={style.Main__content}>
         <div>
            <img src={props.profile.photos.large} />
            <div className={style.About_Me}>
               <span>Обо мне:</span>  {props.profile.aboutMe}
            </div>
            <div className={style.Contacts}>
               <h1>Контакты</h1>
               <div className={style.Contacts_item}>
                  <span>
                     {props.profile.contacts.facebook}
                  </span>

                  <span>
                     {props.profile.contacts.website}
                  </span>

                  <span>
                     {props.profile.contacts.vk}
                  </span>

                  <span>
                     {props.profile.contacts.twitter}
                  </span>

                  <span>
                     {props.profile.contacts.instagram}
                  </span>

                  <span>
                     {props.profile.contacts.youtube}
                  </span>

                  <span>
                     {props.profile.contacts.github}
                  </span>

                  <span>
                     {props.profile.contacts.mainLink}
                  </span>
               </div>
            </div>
         </div>
         <div className={style.lookingForAJob}>
            <span>Поиск работы:</span>  {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : "Не ищю, спасибо"}
         </div>
         <div className={style.fullName}>
            <span>Полное имя Самурая:</span> {props.profile.fullName}
         </div>
      </div>
   );
}

export default ProfileInfo;