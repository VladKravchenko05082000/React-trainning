import React from 'react';
import style from './FindUsers.module.css'
import * as axios from "axios";
import defaultavatar from "../../assets/defaultusericon.png"



class FindUsers extends React.Component {

   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items);
      })
   }

   render() {
      return (
         <div>
            {this.props.findUsers.map(users => <div key={users.id} className={style.container}>
               <div className={style.img}>
                  <img src={users.photos.small != null ? users.photos.small : users.photos.small = defaultavatar} />
               </div>
               <div className={style.description__content}>
                  <div >
                     <div>{users.followed ? <button onClick={() => { this.props.unfollow(users.id) }}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(users.id) }}> Follow</button>}</div>
                  </div>
                  <div>{users.name}</div>
                  <div>{users.status}</div>
               </div>
            </div>)}
         </div>
      )
   }
}

export default FindUsers;
