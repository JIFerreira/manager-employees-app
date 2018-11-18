import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import firebase from '@firebase/app'
import ReduxThunk from "redux-thunk";
import reducers from './reducers';

import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount(){

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBKWr8nNRMxija-UInaS-TUYbaeTUK8ZtM",
      authDomain: "manager-8edd9.firebaseapp.com",
      databaseURL: "https://manager-8edd9.firebaseio.com",
      projectId: "manager-8edd9",
      storageBucket: "manager-8edd9.appspot.com",
      messagingSenderId: "578130176665"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
