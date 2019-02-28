import React, { Component } from 'react';
import Header from '../../components/Header';
import {Container} from './styles';
import Sidenav from '../../components/Sidenav';

class Main extends Component {
    render(){
        return (
            <Container>
                <Header />
            </Container>
        )
    }
}

export default Main;