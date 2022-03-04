import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import {Ionicons} from "@expo/vector-icons";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
//     Section: SectionScreen
// },{
//     mode: "modal"
// });

// HomeStack.navigationOptions = ({ navigation }) => {

//     var tabBarVisible = true
//     const routeName = navigation.state.routes[navigation.state.index].routeName

//     if (routeName == "Section") {
//         tabBarVisible = false;
//     }
//     return{
//         tabBarVisible,
//         tabBarLabel : "Home",
//         tabBarIcon : ({ focused }) => (
//             <Ionicons 
//             name="ios-home" 
//             size={26} 
//             color = { focused ? activeColor : inactiveColor}></Ionicons>
//         )
//     };  
// };

// const CoursesStack = createStackNavigator({
//     course: SectionScreen
// })

// CoursesStack.navigationOptions = {
//     tabBarLabel : "Course",
//     tabBarIcon : ({ focused }) => (
//         <Ionicons 
//         name="ios-albums" 
//         size={26} 
//         color = { focused ? activeColor : inactiveColor}></Ionicons>
//     )
// }

// const ProjectStack = createStackNavigator({
//     Projects: SectionScreen
// })

// ProjectStack.navigationOptions = {
//     tabBarLabel : "Project",
//     tabBarIcon : ({ focused }) => (
//         <Ionicons 
//         name="ios-folder" 
//         size={26} 
//         color = { focused ? activeColor : inactiveColor}></Ionicons>
//     )
// }

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
})

const CoursesStack = createStackNavigator({
    Courses: SectionScreen
})

const ProjectStack = createStackNavigator({
    Courses: SectionScreen
})

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    CoursesStack, 
    ProjectStack
})

export default TabNavigator;




