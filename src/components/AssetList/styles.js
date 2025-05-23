import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color || '#B1ADBA'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Symbol = styled.p`
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? '#B1ADBA' : '#030035')};
`;

export const Value = styled.p`
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0px;
  color: #817c8a;
  font-weight: 500;
`;

export const Right = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Left = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.div`
  background: #f4f2f7;
  padding: 4px 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  color: #817c8a;
  border-radius: 50px;
`;
