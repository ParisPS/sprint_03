import React, { useState, useEffect } from 'react';

const InvoiceForm = ({ onSubmit, editInvoice }) => {
  const [values, setValues] = useState({
    id: '',
    cpf: '',
    value: '',
    date: '',
    file: ''
  });

  useEffect(() => {
    if (editInvoice) {
      setValues({
        id: editInvoice.id,
        cpf: editInvoice.cpf,
        value: editInvoice.value,
        date: editInvoice.date,
        file: editInvoice.file,
      });
    }
  }, [editInvoice]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setValues({ ...values, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setValues({ id: '', cpf: '', value: '', date: '', file: '' });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(values.id);
    setValues({ id: '', cpf: '', value: '', date: '', file: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID da Compra:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={values.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF do Comprador:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={values.cpf}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="value">Valor da Compra:</label>
        <input
          type="text"
          id="value"
          name="value"
          value={values.value}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Data da Compra:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="file">Enviar Nota Fiscal (PDF ou Imagem):</label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf, image/*"
          onChange={handleChange}
        />
      </div>
      <button type="submit">{editInvoice ? 'Editar Nota Fiscal' : 'Adicionar Nota Fiscal'}</button>
    </form>
  );
};

export default InvoiceForm;