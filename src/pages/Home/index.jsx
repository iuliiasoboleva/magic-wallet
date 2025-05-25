import React, { useState } from 'react';

import ActionsBar from '../../components/ActionsBar';
import AssetList from '../../components/AssetList';
import BottomSheet from '../../components/BottomSheet';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import ReferralBanner from '../../components/ReferralBanner';
import { assets, user } from '../../mocks/homeData';
import { Amount, ButtonBlock, Image, Label, PageWrapper, Subtitle, Title } from './styles';

const Home = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(true);

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
      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
        <Image src="/images/pin-illustration.png" alt="PIN" />
        <Title>Защитите свой кошелек с помощью PIN-кода</Title>
        <Subtitle>
          Установите PIN-код для дополнительной защиты ваших средств. Данный код будет храниться
          только на вашем устройстве
        </Subtitle>
        <ButtonBlock>
          <CustomButton>Установить сейчас</CustomButton>
          <CustomButton type={'outline'} onClick={() => setIsSheetOpen(false)}>
            Установить позже
          </CustomButton>
        </ButtonBlock>
      </BottomSheet>
    </PageWrapper>
  );
};

export default Home;
