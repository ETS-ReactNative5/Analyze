import React from "react";
import styled from "styled-components";
import {TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { BlurView } from 'expo-blur';
import Success from "./Success";
import Loading from "./Loading";
import Animated from "react-native-reanimated";

class ModalLogin extends React.Component{

    state = {
        email: "",
        password: "",
        iconEmail: require("../assets/icon-email.png"),
        iconPassword: require("../assets/icon-password.png"),
        isSuccessful: false,
        isLoading: false,
        top: new Animated.Value()
    }

    handleLogin = () => {
        console.log(this.state.email, this.state.password)
        this.setState({isLoading: true})
        this.setState({isSuccessful: true})
        setTimeout(() => {
            this.setState({isLoading: false});
            this.setState({isSuccessful:true});
        }, 2000)
    }


    focusEmail = () => {
        this.setState({
            iconEmail: require("../assets/icon-email-animated.gif"),
            iconPassword: require("../assets/icon-password.png")
        })
    }

    focusPassword = () => {
        this.setState({
            iconEmail: require("../assets/icon-email.png"),
            iconPassword: require("../assets/icon-password-animated.gif")
        })
    }

    tapBackground = () => {
        Keyboard.dismiss();
    }

    render(){
        return(
            <Container>
                <TouchableWithoutFeedback onPress={this.tapBackground}>
                <BlurView
                tint = "default"
                intensity = {100}
                style = {{
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }}
                />
                </TouchableWithoutFeedback>
                <Modal>
                    <Logo source={require("../assets/LogoAnalyze.png")}></Logo>
                    <Text>Enhance your Financial Learnings</Text>
                    <TextInput 
                      onChangeText = {email => this.setState({email})} 
                      placeholder = "Email" 
                      keyboardType = "email-address"
                      onFocus={this.focusEmail} />
                      
                    <TextInput 
                      onChangeText = {password => this.setState({password})} 
                      placeholder = "Password" 
                      secureTextEntry = {true}
                      onFocus={this.focusPassword}/>
                    <IconEmail source = {this.state.iconEmail}/>
                    <IconPassword source = {this.state.iconPassword}/>
                    <TouchableOpacity onPress = {this.handleLogin}>
                    <Button>
                        <ButtonText>Log In</ButtonText>
                    </Button>
                    </TouchableOpacity>
                </Modal>
                <Success isActive = {true}/>
                {/* <Loading isActive = {true}/> */}
                {/* <Success isActive = {this.state.isSuccessful}/> */}
                {/* <Loading isActive = {this.state.isLoading}/>  */}
                
            </Container>
        )
    }
}


export default ModalLogin;

const Container = styled.View`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.75);
justify-content: center;
align-items: center;
`

const Modal = styled.View`
width: 335px;
height: 370px;
background: white;
border-radius: 20px;
box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
align-items: center;
`

const Logo = styled.Image`
height: 48px;
width: 48px;
margin-top: 50px;
`

const Text = styled.Text`
margin-top: 20px;
font-size: 13px;
font-weight: 600;
text-transform: uppercase;
width: 160px;
text-align: center;
color: #b8bece;
`

const TextInput = styled.TextInput`
border: 1px solid #dbdfea;
width: 295px;
height: 44px;
border-radius: 10px;
font-size: 17px;
color: #3c4560;
margin-top: 20px;
padding-left: 44px;
`

const Button = styled.View`
background: #5263ff;
width: 295px;
height: 50px;
justify-content: center;
align-items: center;
border-radius: 10px;
box-shadow: 0 10px 20px #c2cbff;
margin-top: 20px;
`

const ButtonText = styled.Text`
color: white;
font-weight: 600;
font-size: 20px;
text-transform: uppercase;
`

const IconEmail = styled.Image`
height: 16px;
width: 24px;
position: absolute;
top: 185px;
left: 31px;
`

const IconPassword = styled.Image`
height: 24px;
width: 18px;
position: absolute;
top: 242px;
left: 31px;
`