import React from "react";
import {Text, View} from "react-native";
import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from '../screens/Home'
import ShowDetails from '../screens/ShowDeatails'



const AppNavigator = createStackNavigator({
    Home: Home,
    ShowDetails: ShowDetails

},
    {
        initialRouteName: "Home",
    });

export default createAppContainer(AppNavigator);