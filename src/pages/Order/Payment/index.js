import React, { Component } from 'react';

import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../../components/header";

import { Container } from './styles';

class Payment extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state={
        order: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const order = await api.get(`order/${id}`);
        this.setState({order: order.data[0]})
        console.log(this.state.order)
        
    }

    render() {

        return (
            <Container>
                <Header />

            </Container>
        );
    }
}

export default withRouter(Payment);