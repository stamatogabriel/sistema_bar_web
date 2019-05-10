import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter, Link } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";
import Menu from "../../../components/Menu";

class ShowProducts extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    };

    state = {
        products: [],
        user: {}
    }

    async UNSAFE_componentWillMount(){
        const user = await api.get("/get_user");
        this.setState({ user: user.data });

        if (this.state.user.manager !== true){
            alert("Você não tem autorização para utilizar esta funcionalidade.")
            this.props.history.push('/app')
        }

        this.loadProducts();
    };

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data });

    }

    parserMoney = (priceProduct) => {
        let price = priceProduct.toFixed(2)
        price = price.toString().replace('.', ',');

        return price;
      };

    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Container>
                <h1>Produtos</h1>
                <Link to={'/create_products'} className='confirm'>Cadastrar Produto</Link>
                    {this.state.products.map(product => (
                        <article key={product.id}>
                            <strong>{product.description}</strong>
                            <p>Preço: R$ {this.parserMoney(product.price)}</p>
                            <p>Estoque atual: {product.stock}</p>
                            <p>Estoque mínimo: {product.minStock}</p>
                            <Link to={`/products/${product.id}`}>Opções</Link>
                        </article>
                    )
                    )}
                </Container>
            </div>
        )
    }
}

export default withRouter(ShowProducts)