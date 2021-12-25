import React from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/Navbar/SideBar";
import { PROFILE_ROUTE, MESSAGE_ROUTE, FINDUSERS_ROUTE, MUSIC_ROUTE, SETTINGS_ROUTE } from './utils/const';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { FindUsersContainer } from "./components/FindUsers/FindUsersContainer"
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className="Main__wrapper">
      <Header />
      <SideBar />
      <div className="Main__wrapper__content">
        <Route path={PROFILE_ROUTE + ':userId?'}
          render={() => <ProfileContainer />} />
        <Route path={MESSAGE_ROUTE}
          render={() => <DialogsContainer />} />
        <Route path={FINDUSERS_ROUTE}
          render={() => <FindUsersContainer />} />
        <Route path={MUSIC_ROUTE}
          render={() => <Music />} />
        <Route path={SETTINGS_ROUTE}
          render={() => <Settings />} />
        <Redirect to={PROFILE_ROUTE} />
      </div>
    </div >
  );
}

export default App;
