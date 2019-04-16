import React, { Component } from 'react';

import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import Drawer from 'react-drag-drawer';

import { Container } from './styles';

class Payment extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        order: {},
        ticket: {},
        products: [],
        product_orders: [],
        toggle: true,
        open: false
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const order = await api.get(`order/${id}`);
        this.setState({ order: order.data[0] })

        const ticket = await api.get(`ticket/${this.state.order.ticket_id}`)
        this.setState({ ticket: ticket.data })

        const products = await api.get("products");
        this.setState({ products: products.data });

        this.setState({ product_orders: order.data[0].product_orders });
    }


    toggle = () => {
        let { toggle } = this.state
        this.setState({ toggle: !toggle })
    }

    logState = () => {
        console.log(`Drawer now ${this.state.open ? 'open' : 'closed'}`)
    }

    openModal = () =>{
        let {open} = this.state;
        this.setState({ open: !open });
        console.log(this.state.open)
    }





    showProduct = id => {
        const { products } = this.state;
        const description = products.map(product =>
            product.id === id ? product.description : null
        );
        return description;
    };

    render() {

        return (
            <div>
                <Header />
                <Container>
                    <div>
                        <h1>Pedido nº {this.state.order.id}</h1>
                        <strong>Comanda nº {this.state.ticket.numComanda}</strong>
                        <strong>Mesa {this.state.order.desk}</strong>
                        <hr />
                        <div>
                            <ul>
                                {this.state.product_orders.map(product_order => (
                                    <div key={product_order.id}>
                                        <li>
                                            <strong className='products'>
                                                {this.showProduct(product_order.product_id)}
                                            </strong>
                                        </li>
                                        <li>Quantidade: {product_order.qnt}</li>
                                        <li>R$ {product_order.total}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button onClick={this.openModal}>Abrir</button>
                </Container>
                <Drawer
                    open={this.state.open}
                    onOpen={() => this.openModal}
                    onRequestClose={this.toggle}
                >
                    <div>Hey Im inside the drawer!</div>
                </Drawer>
            </div>
        );
    }
}

export default withRouter(Payment);