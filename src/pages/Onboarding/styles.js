import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #222222 4.67%, #000000 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: ${(props) => props.$top || '0'};
  left: 0;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: ${(props) => props.$size || 'contain'};
  padding: 0 ${(props) => props.$padding || '0'};
  height: 65%;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

export const Card = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 290px;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.12);
  z-index: 1;
`;

export const Dots = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
`;

export const Dot = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 12px;
  background: #f7f6f9;
  overflow: hidden;
  position: relative;
`;

const fill = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #030035;
  transition: width 0.3s ease;
  animation: none; /* 👈 отключаем по умолчанию */

  ${({ $completed }) =>
    $completed &&
    css`
      width: 100%;
      animation: none; /* 👈 гарантированно нет дёргания */
    `}

  ${({ $active }) =>
    $active &&
    css`
      animation: ${fill} 3s linear forwards;
    `}
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  color: #030035;
  white-space: pre;
  margin: 0 0 20px;
`;

export const Description = styled.p`
  color: #817c8a;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 20px;
  white-space: pre;
`;
