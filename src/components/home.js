import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/invoices')
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Erro ao buscar notas fiscais:', error));
  }, []);

  return (
    <div>
      <h1>Página Inicial</h1>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            ID: {invoice.id}, CPF: {invoice.cpf}, Valor: {invoice.value}, Data: {invoice.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;