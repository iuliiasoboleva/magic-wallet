import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 12px;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  margin-bottom: 6px;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #ffffff;
`;
