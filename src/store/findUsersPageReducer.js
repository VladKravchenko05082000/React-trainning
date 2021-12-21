
const FOLLOW = "followUser";
const UNFOLLOW = "unfollowUser";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "setCurrentPage";
const SET_TOTALS_USERS_COUNT = "setTotalsUsersCount";
const SET_IS_FETCHING = "setisFetching";

export let initialState = {
   users: [],
   pageCount: 75,
   totalUsersCount: 0,
   activePage: 1,
   isFetching: false
}

const findUsersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW: {
         let copyState = { ...state };
         copyState.users = state.users.map(users => {
            if (users.id === action.userID) {
               return { ...users, followed: true }
            }
            return users
         })
         return copyState;
      }
      case UNFOLLOW: {
         let copyState = { ...state };
         copyState.users = state.users.map(users => {
            if (users.id === action.userID) {
               return { ...users, followed: false }
            }
            return users
         })
         return copyState;
      }
      case SET_USERS: {
         let copyState = { ...state };
         copyState.users = [...action.users];
         return copyState;
      }
      case SET_CURRENT_PAGE: {
         let copyState = { ...state };
         copyState.activePage = action.activePage;
         return copyState;
      }
      case SET_TOTALS_USERS_COUNT: {
         let copyState = { ...state };
         copyState.totalUsersCount = action.totalUsersCount;
         return copyState;
      }
      case SET_IS_FETCHING: {
         let copyState = { ...state };
         copyState.isFetching = action.isFetching;
         return copyState;
      }
      default:
         return state;
   }

}

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (activePage) => ({ type: SET_CURRENT_PAGE, activePage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTALS_USERS_COUNT, totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export default findUsersReducer