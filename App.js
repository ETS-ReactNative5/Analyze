import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";

const initialState = {
  action: ""
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "OPEN_MENU": 
          return {action: "openMenu"};
    case "CLOSE_MENU":  
          return {action: "closeMenu"}; 
    case "OPEN_CARD":
          return {action: "openCard"};
    case "CLOSE_CARD":
      return {action: "closeCard"};    
    default:
          return state;        
  }

  // if (action.type == "CLOSE_MENU"){
  //     return {action: "closeMenu"};
  // }else if (action.type == "OPEN_MENU"){
  //   return {action: "openMenu"};
  // }
  // return state;
};

const store = createStore(reducer);

const App = () => (
    <Provider store = {store}>
      <AppNavigator></AppNavigator>
    {/* <HomeScreen/> */}
    </Provider> 
  ); 

export default App;
