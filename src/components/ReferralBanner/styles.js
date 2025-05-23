import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  gap: 18px;
  background: linear-gradient(135deg, #8c4fff, #6e37ff);
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0px;
  color: #ffffff;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0px;
  color: #ddcaff;
  white-space: pre;
`;

export const Button = styled.button`
  background: white;
  color: #6e37ff;
  background-color: #ffffff;
  padding: 6px 8px;
  font-weight: 500;
  font-size: 10px;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 28px;
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  margin-top: auto;
`;

export const ArrowIcon = styled.img`
  width: 5px;
  height: 8px;
`;
