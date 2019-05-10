import React, { Component } from "react";
import PropTypes from "prop-types";
import QRCode from 'qrcode.react';
import { withRouter } from "react-router-dom";
import { Div } from './styles';
import api from "../../../services/api";


class ShowOrders extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        ticket: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/ticket/${ id }`)
        this.setState({ ticket: response.data })
    }

    render() {
        return (
            <Div>
                <div>
                <h1>Comanda n° {this.state.ticket.numComanda}</h1>
                </div>
                <QRCode value={`https://sistema-bar-web.herokuapp.com/comanda/${this.state.ticket.id}`} />
            </Div>)

    }
}
export default withRouter(ShowOrders);
