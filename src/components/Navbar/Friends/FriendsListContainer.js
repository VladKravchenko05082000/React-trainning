import { connect } from 'react-redux';
import FriendsList from './FriendsList';

let mapStateToProps = (state) => {
   return {
      friendsList: state.friendsListNavBar.friendsListData
   }
}

let mapDispatchToProps = (dispatch) => {
   return{
      
   }
   
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;