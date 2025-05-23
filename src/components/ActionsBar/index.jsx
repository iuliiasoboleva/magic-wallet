import React from 'react';

import { Action, Container, IconWrapper, Image, Label } from './styles';

const actions = [
  { label: 'Отправить', icon: 'up-arrow' },
  { label: 'Пополнить', icon: 'plus' },
  { label: 'Продать', icon: 'coins' },
  { label: 'Оплатить', icon: 'qr-scan' },
];

const ActionsBar = () => (
  <Container>
    {actions.map((a, i) => (
      <Action key={i}>
        <IconWrapper>
          <Image src={`/icons/${a.icon}.svg`} alt={a.label} />
        </IconWrapper>
        <Label>{a.label}</Label>
      </Action>
    ))}
  </Container>
);

export default ActionsBar;
