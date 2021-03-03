import React ,{ Component } from "react";
import {View,Text } from "react-native";
import Routes from "./src/Navigation/Routes";
import 'react-native-gesture-handler'

class App extends Component{

  render(){

    return(
      <Routes />
    )
  }
}


export default App;
