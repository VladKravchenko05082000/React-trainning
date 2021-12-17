import { connect } from 'react-redux';
import { followActionCreator, setUsers, unfollowActionCreator } from '../../store/findUsersPageReducer';
import FindUsers from './FindUsers';


let mapStateToProps = (state) => {
   return {
      findUsers: state.findUsersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId));
      },
      setUsers: (users) => {
         dispatch(setUsers(users));
      }
   }
}


export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);