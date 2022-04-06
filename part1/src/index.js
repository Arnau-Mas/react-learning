/* AQUEST ARXIU ÉS L'EQUIVALENT A main.js a Vue, és l'script que està enllaçat a l'html i és el punt d'entrada on va primer al executar l'aplicació (ja que està linkat a l'html que és el q primer carrega el chrome). */

import React from 'react';
import ReactDOM from 'react-dom'; /* És una llibreria que instal·la les dependències necessàries per poder renderitzar React en el navegador, TRADUINT EL LLENGUATGE REACT perq funcioni en el DOM Real. */
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Aqui li diem que renderitzi X component (el qual hem d'importar obviament) i a quin element de l'html, en aquest cas el que té id 'root'.  */
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
