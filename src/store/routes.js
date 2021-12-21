import { PROFILE_ROUTE, MESSAGE_ROUTE, FINDUSERS_ROUTE, MUSIC_ROUTE, SETTINGS_ROUTE } from "../utils/const";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import Music from "../components/Music/Music";
import {ProfileContainer} from "../components/Profile/ProfileContainer";
import Settings from "../components/Settings/Settings";
import { FindUsersContainer } from "../components/FindUsers/FindUsersContainer";


export const publicRoutes = [
   {
      path: PROFILE_ROUTE,
      Component: ProfileContainer
   },

   {
      path: MESSAGE_ROUTE,
      Component: DialogsContainer
   },

   {
      path: FINDUSERS_ROUTE,
      Component: FindUsersContainer
   },

   {
      path: MUSIC_ROUTE,
      Component: Music
   },

   {
      path: SETTINGS_ROUTE,
      Component: Settings
   },
]