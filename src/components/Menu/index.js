import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logout } from '../../services/auth';

import { TiClipboard } from 'react-icons/ti';
import { MdAccountCircle, MdPlaylistAddCheck, MdHome } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { FaSignOutAlt } from 'react-icons/fa';

import { Sidenav } from "./styles";

class Menu extends Component {
  handleLogout = () => {
    logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <Sidenav>
        <ul>
        <li>
            <div>
              <Link to="/app">
                <MdHome size={30} />
                <span>Início</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/register">
                <MdAccountCircle size={30} />
                <span>Cadastrar Usuário</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/products">
                <TiClipboard size={30} />
                <span>Listar Produtos</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to='/tickets'>
                <MdPlaylistAddCheck size={30} />
                <span>Listar Comandas</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/orders">
                <IoIosCreate size={30} />
                <span>Listar Ordens</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to='#' onClick={this.handleLogout}>
                <FaSignOutAlt size={30} />
                <span>Sair</span>
              </Link>
            </div>
          </li>
        </ul >
      </Sidenav >
    );
  }
}

export default Menu;
