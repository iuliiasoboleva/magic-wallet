import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
`;

export const Username = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #6a6083;
`;

export const Settings = styled.button`
  width: 24px;
  height: 24px;
`;
