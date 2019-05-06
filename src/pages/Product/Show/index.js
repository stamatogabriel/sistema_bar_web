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
        products: []
    }

    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data });

    }

    parserMoney = (priceProduct) => {

        const price = priceProduct.toString().replace('.', ',');

        return price;
      };

    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Container>
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