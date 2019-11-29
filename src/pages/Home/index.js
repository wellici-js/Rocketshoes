import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }
  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image}
              alt={product.title} />
            <strong>Bota masculina</strong>
            <span>R$129,90</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
