import React, { Component } from 'react';
import Header from '../../components/header';
import Register from '../../components/register';
import { Container } from './styles';


export default class Main extends Component {
    render(){
        return (
            <Container>
                <Header />
                <Register />
            </Container>
        )
    }
}
