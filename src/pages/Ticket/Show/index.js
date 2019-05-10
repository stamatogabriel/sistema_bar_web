import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter, Link } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import Menu from "../../../components/Menu";

class ShowTickets extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        tickets: []
    }

    async componentDidMount() {

        const response = await api.get('ticket');

        this.setState({ tickets: response.data });
    };

    handleOrderCreate = async (id) => {
        const ticket = await api.get(`ticket/${id}`);
        
        if (ticket.data.inUse === true){
            alert('Comanda está sendo utilizada. Por favor, escolha outra comanda')
        }else {
            this.props.history.push(`/create_orders/${id}`)
        }
       
    }

    printTicket = (id) => this.props.history.push(`/qrcode/${id}`)

    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Container>
                    <h1>Comandas</h1>
                    <Link to={'/create_tickets'} className='confirm'>Cadastrar Comanda</Link>
                    {this.state.tickets.map(ticket => (
                        <article key={ticket.id}>
                            <strong>Comanda nº {ticket.numComanda}</strong>
                            <p>Status:</p>
                            <div className={ticket.inUse.toString()}> </div>
                            <button onClick={() => this.handleOrderCreate(ticket.id)} >Fazer Pedido</button>
                            <button onClick={() => this.printTicket(ticket.id)} className='print'>Imprimir Comanda</button>
                        </article>
                    )
                    )}
                </Container>
            </div>
        )
    }
}

export default withRouter(ShowTickets)