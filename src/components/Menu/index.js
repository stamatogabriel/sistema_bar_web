import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { TiClipboard } from "react-icons/ti";
import { MdAccountCircle, MdPlaylistAddCheck, MdHome } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";

import { Sidenav } from "./styles";

class Menu extends Component {
  state = {
    user: ""
  };

  async UNSAFE_componentWillMount(){
    const user = await api.get("/get_user");
    this.setState({ user: user.data });
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
              <Link to="/orders">
                <IoIosCreate size={30} />
                <span>Listar Ordens</span>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/tickets">
                <MdPlaylistAddCheck size={30} />
                <span>Listar Comandas</span>
              </Link>
            </div>
          </li>
        </ul>
        {this.state.user.manager === true && (
          <ul>
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
                <Link to="/show_users">
                  <MdAccountCircle size={30} />
                  <span>Gerenciar Usuários</span>
                </Link>
              </div>
            </li>
          </ul>
        )}
      </Sidenav>
    );
  }
}

export default Menu;
