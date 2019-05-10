import React, { Component } from "react";
import api from "../../services/api";
import { withRouter, Link } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../components/header";
import Menu from "../../components/Menu";

class ShowUsers extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        users: [],
        user: {}
    }

    async UNSAFE_componentWillMount(){
        const user = await api.get("/get_user");
        this.setState({ user: user.data });

        if (this.state.user.manager !== true){
            alert("Você não tem autorização para utilizar esta funcionalidade.")
            this.props.history.push('/app')
        }
    };

    async componentDidMount(){
        await this.loadUsers();
    }

    loadUsers = async () => {
        const response = await api.get('/show');

        this.setState({ users: response.data });
        console.log(this.state.users);

    }

    handleDelete = async (id) => {
        try{
          await api.delete(`delete/${id}`);
          alert('Usuário deletado com sucesso');
          this.props.history.push("/show_users");
          this.componentDidMount();
        }catch{
          alert('Algo deu errado. Tente de novo mais tarde');
        }
    }

        render() {
        return (
            <div>
                <Header />
                <Menu />
                <Container>
                <h1>Usuários</h1>
                <Link to={'/register'} className='confirm'>Cadastrar Usuário</Link>
                    {this.state.users.map(user => (
                        <article key={user.id}>
                            <strong>{user.username}</strong>
                            <button onClick={() => this.handleDelete(user.id)}>Deletar Usuário</button>
                        </article>
                    )
                    )}
                </Container>
            </div>
        )
    }
}

export default withRouter(ShowUsers)