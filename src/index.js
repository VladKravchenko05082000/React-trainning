import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/state"

let renderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,
      document.getElementById('root')
   );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);


