import React, { Component } from "react";
import { Head } from "./styles";
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Head>
                <Link to='/app'>Sistema_Bar</Link>
            </Head>
        )
    }
}

export default Header;