import React, { Component } from 'react';

import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import Drawer from 'react-drag-drawer';

import { Container, Form } from './styles';

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
        open: false,
        formPay: "",
        money: "",
        trocoMessage: '',
        sucess: ''
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


    closeModal = () => {
        let { open } = this.state
        this.setState({ open: !open, formPay: '', trocoMessage: '', sucess: '', money: '' })
    }

    openModal = () => {
        let { open } = this.state;
        this.setState({ open: !open });
    }

    showProduct = id => {
        const { products } = this.state;
        const description = products.map(product =>
            product.id === id ? product.description : null
        );
        return description;
    }


    payment = async (e) => {
        e.preventDefault()
        const { formPay, order, money } = this.state;

        if (formPay === 'cash') {
            const troco = money - order.total_comanda

            if (troco < 0) {
                alert(`Ainda falta R$ ${troco * (-1)}`)
            }
            if (troco >= 0) {
                this.setState({
                    trocoMessage: `Troco: R$ ${troco}`,
                    sucess: 'Pagamento realizado com sucesso'
                });
            }
        }
    }


    handleSelect = e => {
        e.preventDefault();
        this.setState({ formPay: e.target.value });
    };

    closeAndConfirmOrder = async (e) => {
        e.preventDefault();

        const { order } = this.state;

        this.setState({
            sucess: 'Pagamento realizado com sucesso'
        });

        await api.put(`/pay/${order.id}`)

        alert(this.state.sucess);
        this.props.history.push('/orders')
    }

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
                        </ul>
                    </div>
                    <div className='button-containner'>
                        <button className='confirm' onClick={this.openModal}>Receber</button>
                    </div>
                </Container>
                <Drawer
                    open={this.state.open}
                    onOpen={() => this.openModal}
                >
                    <Container>
                        <select value={this.state.value} onChange={this.handleSelect}>
                            <option value="" disabled selected hidden>Escolha a opção de pagamento</option>
                            <option value="card">Cartão Débito / Crédito</option>
                            <option value="cash">Dinheiro</option>
                        </select>
                        {(this.state.formPay === 'cash') && (
                            <Form onSubmit={this.payment}>
                                <input
                                    type="number"
                                    placeholder="Valor recebido"
                                    onChange={e => this.setState({ money: e.target.value })}
                                />
                                <button type='submit'>
                                    Receber
                                </button>
                                {this.state.trocoMessage &&
                                    <div>
                                        <p>{this.state.trocoMessage}</p>
                                        <button className='confirm' onClick={this.closeAndConfirmOrder}>
                                            Confirmar e encerrar comanda
                                    </button>
                                    </div>
                                }
                            </Form>
                        )}
                        {(this.state.formPay === 'card') && (
                            <button className='confirm' onClick={this.closeAndConfirmOrder}>
                                Confirmar e encerrar comanda
                            </button>
                        )}
                        <button className='delete' onClick={this.closeModal}>Cancelar</button>
                    </Container>
                </Drawer>
            </div>
        )
    }
}

export default withRouter(Payment);