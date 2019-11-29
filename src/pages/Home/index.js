import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/bota-coturno-sapatofran-ziper-masculino/06/HAP-0022-006/HAP-0022-006_detalhe2.jpg?ims=326x"
          alt="Bota masculina" />
        <strong>Bota masculina</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/bota-coturno-sapatofran-ziper-masculino/06/HAP-0022-006/HAP-0022-006_detalhe2.jpg?ims=326x"
          alt="Bota masculina" />
        <strong>Bota masculina</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/bota-coturno-sapatofran-ziper-masculino/06/HAP-0022-006/HAP-0022-006_detalhe2.jpg?ims=326x"
          alt="Bota masculina" />
        <strong>Bota masculina</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/bota-coturno-sapatofran-ziper-masculino/06/HAP-0022-006/HAP-0022-006_detalhe2.jpg?ims=326x"
          alt="Bota masculina" />
        <strong>Bota masculina</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/bota-coturno-sapatofran-ziper-masculino/06/HAP-0022-006/HAP-0022-006_detalhe2.jpg?ims=326x"
          alt="Bota masculina" />
        <strong>Bota masculina</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
