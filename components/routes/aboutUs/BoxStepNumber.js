import styled, { css } from 'styled-components';

import Box from '../../../styles/Box';

const BoxStepNumber = styled(Box)`
  width: 48px;
  height: 48px;
  position: absolute;
  top: -20px;
  left: -20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 0px rgb(232, 113, 69), 0px 18px 46px rgba(250, 120, 70, 0.25);
  ${({ theme }) => css`
    background: ${theme.gradients.gradientBtn};
    color: ${theme.colors.colorWhite};
    font-weight: ${theme.fontWeights.fontBold}; 
    font-size: ${theme.fontSizes.fs7} ;
  `};
  @media (min-width: 768px) {
    top: -20px;
    left: -5px;
  }
  

`;

export default BoxStepNumber;
