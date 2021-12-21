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
            <div>Обо мне: {props.profile.aboutMe}</div>
            <div>
               <h1>Контакты</h1>
               <div>
                  <div>
                     <span>
                        {props.profile.contacts.facebook}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.website}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.vk}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.twitter}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.instagram}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.youtube}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.github}
                     </span>
                  </div>
                  <div>
                     <span>
                        {props.profile.contacts.mainLink}
                     </span>
                  </div>
               </div>
               <div>
                  Поиск работы: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : "Не ищю, спасибо"}
               </div>
               <div>
                  Полное имя Самурая: {props.profile.fullName}
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProfileInfo;