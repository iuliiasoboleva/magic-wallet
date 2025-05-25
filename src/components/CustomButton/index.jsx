import React from 'react';

import { Icon, StyledButton } from './styles';

const CustomButton = ({ children, icon, onClick, type = 'primary' }) => (
  <StyledButton $type={type} onClick={onClick}>
    {icon && <Icon src={icon} alt="icon" />}
    {children}
  </StyledButton>
);

export default CustomButton;
