import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f7f6f9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(${(props) => (props.isOpen ? '0%' : '100%')});
  transition: transform 0.3s ease;
  z-index: 11;
`;

export const Handle = styled.div`
  width: 64px;
  height: 4px;
  background: #b1adba;
  border-radius: 45px;
  margin: 20px auto 0;
`;

export const Content = styled.div`
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
