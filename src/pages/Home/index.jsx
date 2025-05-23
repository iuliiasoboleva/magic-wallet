import React from 'react';

import ActionsBar from '../../components/ActionsBar';
import AssetList from '../../components/AssetList';
import Header from '../../components/Header';
import ReferralBanner from '../../components/ReferralBanner';
import { assets, user } from '../../mocks/homeData';
import { Amount, Label, PageWrapper } from './styles';

const Home = () => {
  return (
    <PageWrapper>
      <Header user={user} />
      <div>
        <Label>Общий баланс</Label>
        <Amount>{user.balance} ₽</Amount>
      </div>
      <ActionsBar />
      <ReferralBanner />
      <AssetList assets={assets} />
    </PageWrapper>
  );
};

export default Home;
