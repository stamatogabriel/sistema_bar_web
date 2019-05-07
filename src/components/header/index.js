import React, { Component } from "react";
import { Head } from "./styles";

class Header extends Component {
    state = {
        user: ''
    };

    componentDidMount(){

    }


  render() {
    return (
      <Head>
        <div>
          <h3>Sistema_Bar</h3>
        </div>
        <div>
            <div></div>
            <span></span>
        </div>
      </Head>
    );
  }
}

export default Header;
