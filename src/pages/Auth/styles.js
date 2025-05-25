import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TopImage = styled.div`
  width: 100%;
  background-image: url('/images/auth-background.png');
  background-size: cover;
  height: 520px;
  background-position: center;
  position: relative;
`;

export const CenterImage = styled.img`
  width: 100%;
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translateX(50%);
`;

export const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: 0%;
  line-height: 120%;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  text-align: center;
  max-width: 240px;
  line-height: 130%;
  letter-spacing: 0px;
  color: #817c8a;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #817c8a;
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  span {
    color: #484452;
    cursor: pointer;
  }
`;
