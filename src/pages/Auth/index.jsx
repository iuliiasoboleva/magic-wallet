import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/CustomButton';
import {
  CenterImage,
  Description,
  PageWrapper,
  Subtitle,
  TextBlock,
  Title,
  TopImage,
} from './styles';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <TopImage>
        <CenterImage src={'/images/auth-image.png'} alt="Волшебная шляпа с деньгами" />
      </TopImage>
      <TextBlock>
        <div>
          <Title>Вход в кошелек</Title>
          <Subtitle>Пожалуйста, пройдите авторизацию через нашего Telegram-бота</Subtitle>
        </div>
        <div>
          <CustomButton icon="/icons/telegram.svg" onClick={() => navigate('/')}>
            Авторизоваться через Telegram
          </CustomButton>
          <Description>
            Входя в аккаунт, я соглашаюсь с{' '}
            <span onClick={() => window.open('/terms', '_blank')}>
              условиями предоставления услуг и политикой конфиденциальности
            </span>{' '}
            Magic Wallet
          </Description>
        </div>
      </TextBlock>
    </PageWrapper>
  );
};

export default Auth;
