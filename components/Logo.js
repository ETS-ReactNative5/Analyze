import { requireNativeViewManager } from 'expo-modules-core';
import React from 'react';
import styled from 'styled-components';

const Logo = props => (
    <Container>
        <Image source={props.image} resizeMode="contain"></Image>
        <Text>{props.text}</Text> 
    </Container>
)


export default Logo;

const Container = styled.View`
    flex-direction: row;
    background: white;
    height: 60px;
    padding: 12px 16px 12px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.10);
    align-items: center;
    margin: 0 8px ;

`

const Image = styled.Image`
    width: 36;
    height: 36;
`

const Text = styled.Text`
font-weight: 600;
font-size: 17px;
margin-left: 8px;
`