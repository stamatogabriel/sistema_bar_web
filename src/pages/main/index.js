import React, { Component } from "react";
import Header from "../../components/header";
import { Container } from "./styles";
import { withRouter, Link } from "react-router-dom";
import Menu from "../../components/Menu";
import { FaUserAlt, FaClipboardList, FaCocktail, FaShoppingBasket } from 'react-icons/fa'

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Container>
          <div className='button-containner'>
          <Link to='/register'>
          <FaUserAlt size={24} color='#fff' />
          <span>Cadastrar Usuário</span> 
          </Link>
          <Link to='/products'>
          <FaCocktail size={24} color='#fff' />
          <span>Listar Produtos</span>
          </Link>
          </div>
          <div className='button-containner'>
          <Link to='/tickets'>
          <FaClipboardList size={24} color='#fff' />
          <span>Listar Comandas</span>
          </Link>
          <Link to='/orders'>
          <FaShoppingBasket size={24} color='#fff' />          
          <span>Ordens</span>
          </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Main);
