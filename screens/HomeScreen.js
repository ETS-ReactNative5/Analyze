// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Animated, 
  Easing,
  StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Course from '../components/Course';
import {Ionicons} from "@expo/vector-icons";
import {connect} from "react-redux";
import Avatar from '../components/Avatar';
import ModalLogin from '../components/ModalLogin';

function mapStateToProps(state){
    return {action: state.action}
}

function mapDispatchToProps(dispatch){
    return{
        openMenu: ()=> dispatch({
            type: "OPEN_MENU"
        })
    }
}


 class HomeScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
  };

    state = {
        scale: new Animated.Value(1),
        opacity: new Animated.Value(1)
    };

    componentDidMount(){
      StatusBar.setBarStyle('dark-content', true);
    }

    componentDidUpdate(){
        this.toggleMenu()
    }

    toggleMenu = () => {
        if (this.props.action == "openMenu"){
            Animated.timing(this.state.scale, {
                toValue: 0.9,
                duration: 300,
                easing: Easing.in()
            }).start();
            Animated.spring(this.state.opacity, {
              toValue: 0.5
          }).start();

          StatusBar.setBarStyle('light-content', true);

        }

        if (this.props.action == "closeMenu"){
          Animated.timing(this.state.scale, {
              toValue: 1,
              duration: 300,
              easing: Easing.in()
          }).start();
          Animated.spring(this.state.opacity, {
            toValue: 1
        }).start();
        StatusBar.setBarStyle('dark-content', true);
      }
    }

  render(){   
  return (
    <RootView> 
    <Menu />  
    <AnimatedContainer style = {{transform: [{scale: this.state.scale}], opacity: this.state.opacity}}>
      
      <SafeAreaView>
      <ScrollView>
        <TitleBar>
        <TouchableOpacity onPress={this.props.openMenu} style={{ position: "absolute", top: 4, left: 10 }}>
          <Avatar />
            {/* <Avatar source={require('../assets/avatar.jpeg')}></Avatar>   */}
        </TouchableOpacity>    
        <Title>Welcome Back</Title>
        <Name>Yash</Name>
        <Ionicons 
        name = "ios-refresh-circle" 
        size ={36} 
        color="#4775f2"
        style={{
          position: 'absolute',
          right: 20,
          top: 5,
          shadowColor: 'black',
          shadowRadius: 4,
          shadowOpacity: 0.25,
          shadowOffset: { width: 1, height: 3 },
        }}/>
        </TitleBar>

        <ScrollView showsHorizontalScrollIndicator = {false} horizontal={true} style={{ flexDirection:'row', padding: 20, paddingLeft: 12, paddingTop: 30}}>
        
        {logos.map((logo, index) => (
          <Logo key = {index} image = {logo.image} text = {logo.text} />
        ))}
        
        </ScrollView>

        <Subtitle>Bank Accounts</Subtitle>
        <ScrollView horizontal={true} style={{paddingBottom: 30}} showsHorizontalScrollIndicator = {false}>

          {cards.map((card, index) => (
           
            <Card 
          title = {card.title}
          balance = {card.balance}
          image = {card.image}
          caption = {card.caption}
          logo = {card.logo}
          subtitle = {card.subtitle}
          /> 
           
          ))}

        </ScrollView>

        <Subtitle> Finance News Categories </Subtitle>
        {courses.map((course,index) => (

          <TouchableOpacity key = {index} onPress={() => {    
            this.props.navigation.push("Section", {
              section: course
            })
            }}>
          <Course
            image={course.image}
            title = {course.title}
            subtitle = {course.subtitle}
            // logo = {course.logo}
            author = {course.author}
            avatar = {course.avatar}
            caption = {course.caption}
          />
           </TouchableOpacity>
        ))}
      </ScrollView>
      </SafeAreaView>
      {/* <StatusBar style="auto" /> */}
    </AnimatedContainer>
    {/* <ModalLogin></ModalLogin> */}
    </RootView>
  );
 }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(HomeScreen);
 

const Container = styled.View`
 flex: 1;
 background-color: #f0f3f5;
 border-radius: 10px;

 /* justify-content: center;
 align-items: center; */
`
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const RootView = styled.View`
background: black;
flex: 1;
`

const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight: 500;
`

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`

// const Avatar = styled.Image`
//   width: 40px;
//   height: 40px;
//   background: black;
//   margin-left: 20px;
//   border-radius: 22px;
//   /* position: absolute;
//   top: 0;
//   left: 0; */
// `

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`


const logos = [
  {
    image: require("../assets/Chaselogo.jpeg"),
    text: "Chase"
  },
  {
    image: require("../assets/BankofAmerica.png"),
    text: "Bank of America"
  },
  {
    image: require("../assets/Citi.png"),
    text: "Citi Bank"
  },
  {
    image: require("../assets/hsbc.png"),
    text: "HSBC"
  },
]

const cards = [
  {
    title: "Last Month Balance",
    balance: "2500",
    image: require("../assets/background14.jpg"),
    caption : "Your saving goal",
    logo : require("../assets/Chaselogo.jpeg"),
    subtitle: "200$"
  },
  {
    title : "Last Month Balance", 
    balance : "200",
    image : require("../assets/background15.jpg"),
    caption : "Your saving goal",
    logo : require("../assets/BankofAmerica.png"),
    subtitle : "50$"
  }
]

const courses = [
  {
    title: "The New York Times",
    subtitle: "30 Seconds Read",
    image: require("../assets/NYTog.png"),
    logo: require("../assets/logo-studio.png"),
    author: "Total Tech Economics",
    avatar: require("../assets/random1.jpeg"),
    caption: "Finance and Current Affairs"
  },
  {
    title: "Wall Street Journal",
    subtitle: "20 - 45 Seconds Read",
    image: require("../assets/wsjog.jpeg"),
    logo: require("../assets/logo-studio.png"),
    author: "Free Press Media",
    avatar: require("../assets/random2.jpeg"),
    caption: "Economics and Stocks"
  },
  {
    title: "Design and Economics",
    subtitle: "10 Seconds",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Coup de Gaur",
    avatar: require("../assets/random3.jpeg"),
    caption: "Design and Interactive Prototype"
  }
]