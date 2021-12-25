import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from "react-router-dom"
import * as axios from "axios";
import { setUsersProfile } from '../../store/profilePageReducer';


class ProfileAPI extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (userId == undefined) {
         userId = 8;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(response => {
            this.props.setUsersProfile(response.data);
         })
   }
   render() {
      return (
         <div >
            <Profile profile={this.props.profile} />
         </div>
      );
   }

}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setUsersProfile: (profile) => {
         dispatch(setUsersProfile(profile));
      }
   }
}

const UrlDataContainer = withRouter(ProfileAPI)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UrlDataContainer);