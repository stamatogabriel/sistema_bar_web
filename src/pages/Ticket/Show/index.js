import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

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

    handleTicketDelete = async (id) => {
        try{
          await api.delete(`ticket/${id}`);
          alert('Comanda deletada com sucesso');
          this.componentDidMount();
          this.props.history.push("/tickets");
        }catch{
          alert('Algo deu errado. Tente de novo mais tarde');
        }
      }

    handleOrderCreate = async (id) => {
        const ticket = await api.get(`ticket/${id}`);
        
        if (ticket.data.inUse === true){
            alert('Comanda está sendo utilizada. Por favor, escolha outra comanda')
        }else {
            this.props.history.push(`/create_orders/${id}`)
        }
       
    }


    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1>Comandas</h1>
                    {this.state.tickets.map(ticket => (
                        <article key={ticket.id}>
                            <strong>Comanda nº {ticket.numComanda}</strong>
                            <p>Status:</p>
                            <div className={ticket.inUse.toString()}> </div>
                            <button onClick={() => this.handleTicketDelete(ticket.id)} className='excluir'>Excluir Comanda</button>
                            <button onClick={() => this.handleOrderCreate(ticket.id)} >Fazer Pedido</button>
                        </article>
                    )
                    )}
                </Container>
            </div>
        )
    }
}

export default withRouter(ShowTickets)