import { combineReducers, createStore } from 'redux'
import dialogsPageReducer from './dialogsPageReducer';
import findUsersReducer from './findUsersPageReducer';
import friendsListNavBarReducer from './friendsListNavBarReducer';
import profilePageReducer from './profilePageReducer';

let reducers = combineReducers({
   dialogsPage: dialogsPageReducer,
   friendsListNavBar: friendsListNavBarReducer,
   profilePage: profilePageReducer,
   findUsersPage: findUsersReducer
});// это как _state + dispatch в старом store, значение берем с initialState


let store = createStore(reducers);

window.store = store

export default store;