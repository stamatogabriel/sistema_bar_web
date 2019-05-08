import React, { Component } from "react";

import { FaUserAlt } from 'react-icons/fa';

import api from '../../services/api';

import { Head } from "./styles";

class Header extends Component {
  state = {
    user: '',
    showMenu: false
  };

  async componentDidMount() {
    const user = await api.get('/get_user');
    this.setState({ user: user.data });

    console.log(this.state.user)
  }

  showMenu = (e) => {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <Head>
        <div>
          <h3>Sistema_Bar</h3>
        </div>
        <div className='buttonContainer'>
        <button onClick={this.showMenu}>
        <FaUserAlt size={15} /> 
           <span>{this.state.user.username}</span>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <a> Menu item 1 </a>
                <a> Menu item 2 </a>
                <a> Menu item 3 </a>
              </div>
            )
            : (
              null
            )
        }
      </div>
      </Head>
    );
  }
}

export default Header;
