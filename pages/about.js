import React from 'react';
import 'src/styles/about.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">SPRINT 03 Advanced Programming & Mobile Dev</h1>
      <p className="about-info">Prof. João Carlos Lima e Silva Turma 3ECA</p>
      <p className="about-info">Integrantes do Grupo:</p>
      <ul className="about-list">
        <li>Filipe Giovannetti RM86925</li>
        <li>Paris Salazar RM86698</li>
        <li>Pedro Hernandes RM88154</li>
        <li>Vinicius Rodrigues RM89192</li>
      </ul>
      <p className="about-description">
        Uma solução para automatizar o processo de prestação de contas de despesas seria desenvolver um aplicativo móvel que permita aos usuários tirar uma foto do recibo ou fatura e enviá-la para um servidor em nuvem. Esse servidor usaria a tecnologia de IoT (Internet das Coisas) e visão computacional para interpretar as informações presentes no recibo, classificando automaticamente o tipo de despesa, conforme as regras de negócio e requisitos funcionais. Além disso, o sistema usaria informações do Cartão Concur para relacionar a despesa com um gasto existente, se houver, e vinculá-la à conta correta. Se a despesa não estiver no Cartão Concur, o sistema a classificará como uma despesa a ser reembolsada ao funcionário. Com essa solução, o processo de prestação de contas seria mais rápido e fácil, pois os usuários só precisariam tirar uma foto do recibo e enviá-lo pelo aplicativo, economizando tempo e minimizando erros manuais. A classificação automática das despesas também traria mais precisão ao processo e poderia ajudar as empresas a controlar melhor seus gastos.
      </p>
    </div>
  );
};

export default AboutPage; 