import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {

    state = {
        photo: "https://share.getcloudapp.com/eDug7X1E"
    }

    componentDidMount(){
        fetch("https://uifaces.co/api", {
            headers: new Headers({
                //API KEY GOES HERE inside Header
                "X-API-KEY" : ""
            }) 
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.setState({
                photo: response[0].photo
            })
        });
    }

    render() {
        // return <Image source= {require('../assets/avatar-default.jpg')}/>
        return <Image source={{ uri: this.state.photo}} />;
    }
}

export default Avatar;

const Image = styled.Image`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    margin-left: 12px;
`;