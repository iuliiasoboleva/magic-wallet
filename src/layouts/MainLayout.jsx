import React from 'react';
import TabBar from '../components/TabBar';
import { Content, Wrapper } from './styles';

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <TabBar />
    </Wrapper>
  );
};

export default MainLayout;
