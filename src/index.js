import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/redux-store"

let renderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,
      document.getElementById('root')
   );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);


