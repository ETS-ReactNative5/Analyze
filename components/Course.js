import React from 'react'
import styled from 'styled-components'

const Course = props => (
    <Container>
        <Cover>
            <Image source = {props.image}/>
            <Logo source= {props.logo}/>
            <Subtitle>{props.subtitle}</Subtitle> 
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Avatar source = {props.avatar}></Avatar>
            <Caption>{props.caption}</Caption>
            <Author>Curated By {props.author}</Author>
        </Content>
    </Container>
)

export default Course;

const Container = styled.View`
    width: 315px;
    height:310px;
    background: white;
    margin: 20px 20px;
    border-radius: 14px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
`

const Cover = styled.View`
    height: 260px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px; 
    /* border-radius: 14px; */
    overflow: hidden;
    justify-content: flex-end;
`

const Image = styled.Image`
width: 100%;
height: 100%;
`

const Logo = styled.Image`
width: 48px;
height: 48px;
position: absolute;
top: 90px;
left: 50%;
margin-left: -24px;
`

const Title = styled.Text`
font-size: 24px;
width: 160px;
color: black;
font-weight: 600;
margin-top: 8px;
margin-bottom: 10px;
margin-left: 20px;
`

const Subtitle = styled.Text`
font-size: 15px;
font-weight: 500;
color: black;
text-transform: uppercase;
margin-left: 20px;
margin-top: 4px;
`

const Content = styled.View`
    padding-left: 62px;
    justify-content: center;
    height: 45px;
`

const Avatar = styled.Image`
width: 32px;
height: 32px;
position: absolute;
/* top: 2px; */
left: 20px;
border-radius: 14px;
`

const Caption = styled.Text`
    font-size: 14px;
    color: #3c4560;
    font-weight: 500;
`

const Author = styled.Text`
    font-size: 13px;
    color: #b8bece;
    font-weight: 500;
    `