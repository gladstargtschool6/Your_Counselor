import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCVgTBrHMK808-huXDbEsx5nDmyPwbxiLI',
  authDomain: 'www.gladstar.sch.ng',
  databaseURL: 'https://marine-infinity-244511.firebaseio.com/',
  projectId: 'marine-infinity-244511',
  storageBucket: 'marine-infinity-244511.appspot.com',
})

render(
  <App />,
  document.getElementById('root')
)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
