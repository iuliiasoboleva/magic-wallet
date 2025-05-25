import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: auto;

  ${({ $type }) =>
    $type === 'primary' &&
    css`
      background: #635aff;
      color: #fff;
      border: none;

      &:hover {
        background: #574fe0;
      }
    `}

  ${({ $type }) =>
    $type === 'outline' &&
    css`
      background: #fff;
      color: #635aff;
      border: 1px solid #635aff;

      &:hover {
        background: #f9f9f9;
      }
    `}
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
`;
