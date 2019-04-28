import React, { Component } from 'react';

import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Container } from './styles';

class ShowCustomer extends Component {
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
        open: false,
        formPay: "",
        money: "",
        trocoMessage: '',
        sucess: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const order = await api.get(`online/${id}`);
        this.setState({ order: order.data[0] })

        const ticket = await api.get(`ticket/${id}`)
        this.setState({ ticket: ticket.data })

        const products = await api.get("products");
        this.setState({ products: products.data });

        this.setState({ product_orders: order.data[0].product_orders });
    }


    showProduct = id => {
        const { products } = this.state;
        const description = products.map(product =>
            product.id === id ? product.description : null
        );
        return description;
    }

    render() {
        return (
            <div>
                <Container>
                    <div>
                        <h1>Pedido nº {this.state.order.id}</h1>
                        <strong>Comanda nº {this.state.ticket.numComanda}</strong>
                        <strong>Mesa {this.state.order.desk}</strong>
                        <hr />
                        <ul>
                            {this.state.product_orders.map(product_order => (
                                <div className='products' key={product_order.id}>
                                    <li>
                                        <strong>
                                            {this.showProduct(product_order.product_id)}
                                        </strong>
                                    </li>
                                    <li>Quantidade: {product_order.qnt}</li>
                                    <li>R$ {product_order.total}</li>
                                </div>
                            ))}
                            <li><strong>Valor total da comanda: R$ {this.state.order.total_comanda}</strong></li>
                        </ul>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withRouter(ShowCustomer);