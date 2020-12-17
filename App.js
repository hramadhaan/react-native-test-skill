import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initializeApp } from "firebase";
import { combineReducers, createStore, applyMiddleware } from "redux";
import eventsReducer from "./store/reducers/events";
import authReducer from "./store/reducers/auth";
import Thunk from "redux-thunk";
import { Provider } from "react-redux";
import "firebase/database";
import "firebase/app";

import AppNavigator from "./navigation/AppNavigator";

const firebaseConfig = {
  apiKey: "AIzaSyDtUUIa5SytGmnSgVHcLxJxwcKThETCp2c",
  authDomain: "ruparupa-9d944.firebaseapp.com",
  databaseURL: "https://ruparupa-9d944-default-rtdb.firebaseio.com",
  projectId: "ruparupa-9d944",
  storageBucket: "ruparupa-9d944.appspot.com",
  messagingSenderId: "442276600294",
  appId: "1:442276600294:web:123b616d820a144568de27",
  measurementId: "G-82FLN8M6K0",
};

initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  events: eventsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(Thunk));

const App = (props) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar hidden />
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
