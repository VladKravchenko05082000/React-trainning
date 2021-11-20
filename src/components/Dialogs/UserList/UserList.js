import React from 'react';
import { NavLink } from 'react-router-dom';
import { MESSAGE_ROUTE } from "../../../utils/const";

const UserList = (props) => {
   let path = MESSAGE_ROUTE + props.id;

   return (
      <div >
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   );
}

export default UserList;