import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Navbar/SideBar';
import Profile from './components/Profile/Profile'


const App = () => {
  return (
    <div className="Main__wrapper">
      <Header />
      <SideBar />
      <Profile />
    </div>
  );
}

export default App;
