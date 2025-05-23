import React from 'react';

import { ArrowIcon, Button, Subtitle, Title, Wrapper } from './styles';

const referral = {
  title: 'Приглашай друзей',
  subtitle: 'в кошелек и зарабатывай\nна реферальной системе',
  buttonText: 'Получить ссылку',
  image: '/images/magic.png',
};

const ReferralBanner = () => (
  <Wrapper image={referral.image}>
    <div>
      <Title>{referral.title}</Title>
      <Subtitle>{referral.subtitle}</Subtitle>
    </div>
    <Button>
      {referral.buttonText}
      <ArrowIcon src="/icons/arrow-right.svg" alt="arrow" />
    </Button>
  </Wrapper>
);

export default ReferralBanner;
