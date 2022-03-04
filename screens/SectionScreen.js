import React from "react";
import styled from "styled-components";
import {Button} from "react-native";
import News from "../components/News";
import { PanResponder, Animated } from 'react-native';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return{
        action: state.action
    }
}

function getNextIndex(index){
    var nextIndex = index + 1
    if (nextIndex > news.length - 1){
        return 0
    }
    return nextIndex;
}

class SectionScreen extends React.Component {

    static navigationOptions = {
        // title: "Section"
        headerShown: false
    };

    state = {
        pan: new Animated.ValueXY(),
        scale: new Animated.Value(0.9),
        translateY: new Animated.Value(34),
        thirdScale: new Animated.Value(0.8),
        thirdTranslateY: new Animated.Value(-50),
        index: 0,
        opacity: new Animated.Value(0)
    }

   

    componentWillMount(){
        this._panResponder = PanResponder.create({

            onMoveShouldSetPanResponder: (event, gestureState) => {
                if (gestureState.dx === 0 && gestureState.dy === 0){
                    return false;
                }else{
                    if(this.props.action === "openCard"){
                        return false
                    }else{
                        return true
                    }
                }
            },

            onPanResponderGrant: () => {
            Animated.spring(this.state.scale, {toValue: 1}).start();
            Animated.spring(this.state.translateY, {toValue: 0}).start();

            Animated.spring(this.state.thirdScale, {toValue:0.9}).start();
            Animated.spring(this.state.thirdTranslateY, {toValue: 44}).start();
            Animated.timing(this.state.opacity, {toValue: 1}).start()
            },
           
           onPanResponderMove: Animated.event([
                null,
                { dx: this.state.pan.x , dy: this.state.pan.y}
           ]),


           onPanResponderRelease: () => {
                const positionY = this.state.pan.y.__getValue()
                Animated.timing(this.state.opacity, {toValue: 0}).start()


                if (positionY > 200){
                    Animated.timing(this.state.pan, {
                        toValue: {x: 0, y: 1000}
                    }).start(() => {
                        //completion
                        this.state.pan.setValue({x:0, y:0});
                        this.state.scale.setValue(0.9);
                        this.state.translateY.setValue(44);
                        this.state.thirdScale.setValue(0.8);
                        this.state.thirdTranslateY.setValue(-50);
                        this.setState({index : getNextIndex(this.state.index)})
                    });
                }else{
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0 , y: 0 }
                    }).start();
     
                    Animated.spring(this.state.scale, {toValue: 0.9}).start();
                    Animated.spring(this.state.translateY, {toValue: 44 }).start();

                    Animated.spring(this.state.thirdScale, {toValue: 0.8}).start();
                    Animated.spring(this.state.thirdTranslateY, {toValue: -50 }).start();
                }

               
           } 
        });
    }



    render(){

        // const { navigation } = this.props
        // const section = navigation.getParam("section")

        return(
            <Container>
                <AnimatedMask style ={{ opacity: this.state.opacity} }/>
                <Text>News Cards</Text>

                <Animated.View style = {{
                    transform:[
                        {translateX : this.state.pan.x},
                        {translateY : this.state.pan.y}
                    ]
                }}
                {...this._panResponder.panHandlers}
                >
                   <News 
                   title= {news[this.state.index].title} 
                   image = {news[this.state.index].image}
                   author = {news[this.state.index].author}
                   text = {news[this.state.index].text}
                   canOpen = {true}
                   ></News>
                </Animated.View>
                
                <Animated.View style = {{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    transform:[
                        {scale: this.state.scale}, {translateY: this.state.translateY}
                    ]
                }}>
                    <News 
                     title= {news[getNextIndex(this.state.index)].title} 
                     image = {news[getNextIndex(this.state.index)].image}
                     author = {news[getNextIndex(this.state.index)].author}
                     text = {news[getNextIndex(this.state.index)].text}></News>
                </Animated.View>

                <Animated.View 
                    style = {{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -2,
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        transform:[
                            {scale: this.state.thirdScale}, {translateY: this.state.thirdTranslateY}
                        ]
                    }}
                  >
                    <News
                    title= {news[getNextIndex(this.state.index + 1)].title} 
                    image = {news[getNextIndex(this.state.index + 1)].image}
                    author = {news[getNextIndex(this.state.index + 1)].author}
                    text = {news[getNextIndex(this.state.index + 1)].text}>
                    </News>
                </Animated.View>
                <Button title="CLOSE" color="#502EFF" onPress={() => {
                    this.props.navigation.goBack();
                }}></Button>
            </Container>
        )
    }
    
}

export default  connect(mapStateToProps) (SectionScreen);

const Mask = styled.View`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0, 0.25);
z-index: -3;
`

const AnimatedMask = Animated.createAnimatedComponent(Mask);

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #f0f3f5;
`

const Text = styled.Text`
font-size: 24;
font-weight: 600;
color: #b8bece;
`

const news = [
    {
        title: "Black Friday Economics",
        image: require("../assets/nyt1.jpeg"),
        author: "Dharmesh Pal",
        text:"Black Friday is important because this is the shopping day when many retailers have traditionally made enough sales to put them in the black for the year. Since many retailers consider Black Friday to be crucial to their business’s annual performance, investors look at Black Friday sales numbers as a way to gauge the overall state of the entire retail industry. Economists, based on the Keynesian assumption that spending drives economic activity, view lower Black Friday numbers as an indication of slowed growth."
    },
    {
        title: "Build your Wealth",
        image: require("../assets/nyt2.jpeg"),
        author: "Nikhil Desai",
        text:"Everyone has a different idea of what wealth is. For some, it means owning property; for others, it means having lucrative investments. From a financial standpoint, the term wealth is the number of assets you own minus debts."
    },
    {
        title: "Personal Financing",
        image: require("../assets/nyt3.jpeg"),
        author: "Chad Goodman",
        text:"Month after month, many individuals look at their bank and credit card statements and are surprised that they spent more than they thought they did. To avoid this problem, one simple method of accounting for income and expenditures is to have personal financial statements. Just like the ones used by corporations, financial statements provide you with an indication of your financial condition and can help with budget planning. There are two types of personal financial statements, The personal cash flow statement The personal balance sheet Cash inflow can also include money received from the sale of assets like houses or cars. Essentially, your cash inflow consists of anything that brings in money."
    },
    {
        title: "Retailers Black Friday",
        image: require("../assets/nyt4.jpeg"),
        author: "Ming Lee",
        text:"Since many retailers consider Black Friday to be crucial to their business’s annual performance, investors look at Black Friday sales numbers as a way to gauge the overall state of the entire retail industry."
    },
];

