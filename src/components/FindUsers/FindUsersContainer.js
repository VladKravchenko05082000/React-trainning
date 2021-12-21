import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollowActionCreator } from '../../store/findUsersPageReducer';
import FindUsers from './FindUsers';
import * as axios from "axios";
import Preloader from '../common/Preloader';


class FindUsersAPI extends React.Component {

   componentDidMount() {
      this.props.setIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageCount}`)
         .then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onChangedPage = (pages) => {
      this.props.setIsFetching(true);
      this.props.setCurrentPage(pages);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.pageCount}`)
         .then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
         })
   }

   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageCount);

      let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }
      return (<>
         {this.props.isFetching ? <Preloader /> : null}
         <FindUsers pages={pages}
            onChangedPage={this.onChangedPage}
            findUsers={this.props.findUsers}
            unfollow={this.props.unfollow}
            follow={this.props.follow} /></>)
   }
}

let mapStateToProps = (state) => {
   return {
      findUsers: state.findUsersPage.users,
      pageCount: state.findUsersPage.pageCount,
      totalUsersCount: state.findUsersPage.totalUsersCount,
      activePage: state.findUsersPage.activePage,
      isFetching: state.findUsersPage.isFetching
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
      },
      setCurrentPage: (activePage) => {
         dispatch(setCurrentPage(activePage));
      },
      setTotalUsersCount: (totalUsersCount) => {
         dispatch(setTotalUsersCount(totalUsersCount));
      },
      setIsFetching: (isFetching) => {
         dispatch(setIsFetching(isFetching));
      }
   }
}


export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPI);