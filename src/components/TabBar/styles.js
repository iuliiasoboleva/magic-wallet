import styled from 'styled-components';

export const Bar = styled.div`
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  border-top: 1px solid #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  vertical-align: middle;
  color: ${(props) => (props.active ? '#030035' : '#817C8A')};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
