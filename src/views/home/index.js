import React from 'react';
import Button from '@material-ui/core/Button';
import { Delete } from '@material-ui/icons';

import { Title, ButtonCustom } from './style';

import Card from '../../components/card';

export default () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Button variant="outlined"> clique aqui</Button>
      <Button variant="text" startIcon={<Delete />}>
        Delete
      </Button>
      <Title>Aqui o meu titulo</Title>
      <ButtonCustom>Aqui o meu botão</ButtonCustom>
      <Card />
    </div>
  );
};
