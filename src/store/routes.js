import { PROFILE_ROUTE, MESSAGE_ROUTE, NEWS_ROUTE, MUSIC_ROUTE, SETTINGS_ROUTE } from "../utils/const";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import Music from "../components/Music/Music";
import Profile from "../components/Profile/Profile";
import Settings from "../components/Settings/Settings";
import News from "../components/News/News";

export const publicRoutes = [
   {
      path: PROFILE_ROUTE,
      Component: Profile
   },

   {
      path: MESSAGE_ROUTE,
      Component: DialogsContainer
   },

   {
      path: NEWS_ROUTE,
      Component: News
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