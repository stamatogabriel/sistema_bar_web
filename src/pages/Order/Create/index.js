import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

class CreateOrder extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        desk: "",
        ticket_id: '',
        numComanda: ''
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const ticket = await api.get(`ticket/${id}`)
        await this.setState({ ticket_id: ticket.data.id, numComanda: ticket.data.numComanda })
        console.log(ticket)
    }

    handleCreate = async e => {
        e.preventDefault();
        const { desk, ticket_id } = this.state;
        if (!desk) {
            this.setState({
                error: "Preencha com o número da mesa para continuar"
            });
        } else {
            try {
                await api.post("/order", { desk, ticket_id });
                this.setState({
                    sucess: "Pedido cadastrado com sucesso!",
                });
                alert(this.state.sucess);
            } catch {
                this.setState({
                    error: "Algo deu errado. Por favor, verifique os dados e tente novamente."
                });
            }
        }
    };

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Form onSubmit={this.handleCreate}>
                        <h1>Pedidos</h1>
                        <hr />
                        {this.state.error && <p>{this.state.error}</p>}
                        <strong>Comanda nº: {this.state.numComanda}</strong>
                        <input
                            type="number"
                            placeholder="Número da mesa"
                            onChange={e => this.setState({ desk: e.target.value })}
                        />
                        <button type="submit">Fazer Pedido</button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default withRouter(CreateOrder);
