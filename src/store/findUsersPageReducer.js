
const FOLLOW = "followUser";
const UNFOLLOW = "unfollowUser";
const SET_USERS = "setUsers"

export let initialState = {
   users: []
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
         copyState.users = [...state.users, ...action.users];
         return copyState;
      }
      default:
         return state;
   }

}

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users })

export default findUsersReducer