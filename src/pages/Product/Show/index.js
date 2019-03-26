import React, { Component } from "react";
import api from "../../../services/api";
import { withRouter } from "react-router-dom";
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
    
    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async() =>{
        const response = await api.get('/products');

        this.setState({ products: response.data });

        console.log(response)
    }

    render(){
        return(
            <div>
                <Header />
                {this.state.products.map(product => {
                    return(
                        <Container key={product.id}>
                            <h2>{product.description}</h2>
                            <strong>{product.price}</strong>
                            <strong>{product.stock}</strong>
                            <strong>{product.minStock}</strong>
                        </Container>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(showProducts)