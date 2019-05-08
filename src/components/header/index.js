import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { FaUserAlt, FaKey, FaAngleDown, FaSignOutAlt } from "react-icons/fa";

import api from "../../services/api";
import { logout } from '../../services/auth';

import { Head } from "./styles";

class Header extends Component {
  state = {
    user: "",
    showMenu: false
  };

  async componentDidMount() {
    const user = await api.get("/get_user");
    this.setState({ user: user.data });
  }

  
  handleLogout = () => {
    logout();
    this.props.history.push('/');
  }

  showMenu = e => {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  render() {
    return (
      <Head>
        <div>
          <h3>Sistema_Bar</h3>
        </div>
        <div className="buttonContainer">
          <button onClick={this.showMenu}>
            <FaUserAlt size={15} />
            <span> {this.state.user.username}</span>
            <div className="iconContainer">
              <FaAngleDown size={12} />
            </div>
          </button>

          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <Link to="/change_password">
                <FaKey /> Alterar senha
              </Link>
              <Link to="#" onClick={this.handleLogout}>
                <FaSignOutAlt /> Sair
              </Link>
            </div>
          ) : null}
        </div>
      </Head>
    );
  }
}

export default Header;
