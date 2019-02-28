import React, { Component } from 'react';
import { Container } from './styles';

class Sidenav extends Component {
    render(){
        return(
            <Container>

            <input type='checkbox' id='chk'/>
            <label for='chk' className='menu-icon'>&#9776;</label> 
            
            <div className='bg'></div> 

            <nav className='menu' id='principal'>
                <ul>
                    <li>Voltar</li>
                    <li>Home</li>
                    <li>Teste</li>
                </ul>
            </nav>
            </Container>
        )
    }
}

export default Sidenav;