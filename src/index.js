import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: '',
  authDomain: 'spidergram-c7cc8.firebaseapp.com',
  databaseURL: 'https://spidergram-c7cc8.firebaseio.com',
  projectId: 'spidergram-c7cc8',
  storageBucket: 'spidergram-c7cc8.appspot.com',
  messagingSenderId: '213334105146'
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
