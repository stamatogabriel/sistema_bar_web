import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter, Link } from "react-router-dom";
import { Container } from "./styles";
import PropTypes from "prop-types";
import Header from "../../../components/header";

class showProducts extends Component {
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

        console.log(response)
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    {this.state.products.map(product => (
                        <article key={product.id}>
                            <strong>{product.description}</strong>
                            <p>Preço: R$ {product.price}</p>
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

export default withRouter(showProducts)