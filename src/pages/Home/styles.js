import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  width: 100%;
  padding: 20px;

  background:
    url('/images/bg-gradient.png') top center / 100% auto no-repeat,
    linear-gradient(to bottom, #000 0px, #000 250px, transparent 270px),
    #f7f6f9;

  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  color: #b1adba;
  margin-bottom: 8px;
`;

export const Amount = styled.p`
  font-weight: 600;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
`;
