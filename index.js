import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvoiceForm from '../src/components/InvoiceForm';
import 'pages/login.js';

const HomePage = () => {
  const [invoices, setInvoices] = useState([]);
  const [editingInvoice, setEditingInvoice] = useState(null);

  const handleFormSubmit = (invoice) => {
    if (editingInvoice) {
      const updatedInvoices = invoices.map(i => i.id === editingInvoice.id ? invoice : i);
      setInvoices(updatedInvoices);
      setEditingInvoice(null);
    } else {
      setInvoices([...invoices, invoice]);
    }
  };

  const handleEditButtonClick = (invoice) => {
    setEditingInvoice(invoice);
  };

  const handleDeleteButtonClick = (id) => {
    const updatedInvoices = invoices.filter(i => i.id !== id);
    setInvoices(updatedInvoices);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/invoices')
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Erro ao buscar notas fiscais:', error));
  }, []);

  return (
    <div>
           <li>
            <a href="login" className='text-2xl font-bold'>login</a>
          </li>
      <h1>Página Inicial</h1>
      <InvoiceForm onSubmit={handleFormSubmit} editInvoice={editingInvoice} onDelete={handleDeleteButtonClick} />
      <h2>Notas Fiscais Adicionadas/Editadas:</h2>
      <ul>
        {invoices.map(invoice => (
          <div key={invoice.id}>
            <h3>ID: {invoice.id}</h3>
            <p>CPF: {invoice.cpf}</p>
            <p>Valor: {invoice.value}</p>
            <p>Data: {invoice.date}</p>
            <div>
              <strong>Foto da Nota Fiscal:</strong>
              <img src={invoice.file} alt="Nota Fiscal" style={{ maxWidth: '200px' }} />
            </div>
            <button onClick={() => alert('Foto enviada!')}>Enviar Foto</button>
            <button onClick={() => handleEditButtonClick(invoice)}>Editar</button>
            <button onClick={() => handleDeleteButtonClick(invoice.id)}>Excluir</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;