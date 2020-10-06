import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Title, Button } from './style';

import * as loginActions from '../../store/login/actions';

export default () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const dispatch = useDispatch();

  function handleLogin() {
    if (email !== '' && senha !== '') {
      dispatch(
        loginActions.login({
          email,
          senha,
        })
      );
    } else {
      alert('Favor, digitar, os dados');
    }
  }

  function handleClean() {
    setEmail('');
    setSenha('');
  }

  return (
    <div>
      <Title>
        Faça o login
        <p>Aqui está um uso do Styled-Components</p>
      </Title>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="text"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <Button type="button" onClick={() => handleLogin()}>
        {' '}
        Login{' '}
      </Button>
      <Button color="red" type="button" onClick={() => handleClean()}>
        {' '}
        Limpar Informações{' '}
      </Button>
    </div>
  );
};
