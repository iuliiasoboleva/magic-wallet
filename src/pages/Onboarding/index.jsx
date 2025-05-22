import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Background,
  Button,
  Card,
  Container,
  Description,
  Dot,
  Dots,
  Progress,
  Slide,
  Title,
} from './styles';

const slides = [
  {
    image: '/images/slide1.png',
    title: 'Забудь про P2P\nиспользуй крипто-СПБ',
    description:
      'Вы можете оплачивать покупки с помощью QR-\nкода на терминалах, работающих с рублями,\nпрямо со своего криптокошелька Magic Wallet.',
    backgroundProps: {
      size: 'contain',
      topOffset: '-85px',
      horizontalPadding: '24px',
      height: '65%',
    },
  },
  {
    image: '/images/slide2.png',
    title: 'Делись балансом,\nбез комиссии',
    description: 'Переводите цифровые активы\nв Magic Wallet без каких-либо комиссий\nи задержек.',
    backgroundProps: {
      size: 'contain',
      topOffset: '-155px',
      horizontalPadding: '0px',
      height: '100%',
    },
  },
  {
    image: '/images/slide3.png',
    title: 'Мгновенно\nпополняй кошелек',
    description: 'Пополняйте кошелек удобными\nдля вас криптовалютами.',
    backgroundProps: {
      size: 'contain',
      topOffset: '35px',
      horizontalPadding: '16px',
      height: '65%',
    },
  },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (step < slides.length - 1) {
        setStep((s) => s + 1);
      }
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [step]);

  const handleNext = () => {
    clearTimeout(timeoutRef.current);
    if (step < slides.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      navigate('/');
    }
  };

  const current = slides[step];

  return (
    <Container>
      <Slide>
        <Background
          key={step}
          image={current.image}
          $size={current.backgroundProps.size}
          $top={current.backgroundProps.topOffset}
          $padding={current.backgroundProps.horizontalPadding}
          $height={current.backgroundProps.height}
        />
        <Card>
          <Dots>
            {slides.map((_, i) => (
              <Dot key={i}>
                <Progress
                  key={`progress-${step}-${i}`}
                  $active={i === step}
                  $completed={i < step}
                />
              </Dot>
            ))}
          </Dots>
          <Title>{current.title}</Title>
          <Description>{current.description}</Description>
          <Button onClick={handleNext}>Продолжить</Button>
        </Card>
      </Slide>
    </Container>
  );
};

export default Onboarding;
