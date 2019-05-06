import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import Menu from "../../../components/Menu";

class CreateTicket extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        numComanda: "",
    };

    handleCreate = async e => {
        e.preventDefault();
        const { numComanda } = this.state;
        if (!numComanda) {
            this.setState({
                error: "Preencha com o número da nova comanda"
            });
        } else {
            try {
                await api.post("/ticket", { numComanda });
                this.setState({
                    sucess: "Comanda cadastrada com sucesso!",
                });
                alert(this.state.sucess);
            } catch {
                this.setState({
                    error: "Algo deu errado. Por favor, verifique o número escolhido e tente novamente."
                });
            }
        }
    };

    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Container>
                    <Form onSubmit={this.handleCreate}>
                        <h1>Cadastro de Comandas</h1>
                        <hr />
                        {this.state.error && <p>{this.state.error}</p>}
                        <input
                            type="number"
                            placeholder="Número da comanda"
                            onChange={e => this.setState({ numComanda: e.target.value })}
                        />
                        <button type="submit">Cadastrar</button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default withRouter(CreateTicket);
