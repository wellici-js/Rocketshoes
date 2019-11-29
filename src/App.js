import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';
// O BrowserRouter é importado aqui e não no arquivo de rotas porque eu preciso que outros componentes tenham acesso as propriedades das rotas como o Header
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
