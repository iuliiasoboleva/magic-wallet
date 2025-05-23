import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Container, Name, NameBlock, Settings, UserInfo, Username } from './styles';

const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <UserInfo>
        <Avatar src={user.avatar} alt="avatar" />
        <NameBlock>
          <Name>{user.name}</Name>
          <Username>{user.username}</Username>
        </NameBlock>
      </UserInfo>
      <Settings onClick={() => navigate('/onboarding')}>
        <img src="/icons/settings.svg" alt="settings" />
      </Settings>
    </Container>
  );
};

export default Header;
