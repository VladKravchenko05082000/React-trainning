import React from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { publicRoutes } from "./store/routes";
import Header from "./components/Header/Header";
import SideBar from "./components/Navbar/SideBar";
import { PROFILE_ROUTE } from './utils/const';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="Main__wrapper">
        <Header />
        <SideBar />
        <div className="Main__wrapper__content">
          {
            publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} component={Component} />
            )

          }
          <Redirect to={PROFILE_ROUTE} />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
