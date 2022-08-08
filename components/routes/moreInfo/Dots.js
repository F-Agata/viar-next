import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'


import { BsDot } from 'react-icons/bs'

import Box from '../../../styles/Box'


const Dots = ({ activeIndex}) => {


    return (
           <BoxWrappIconsDots>
                <StyledBoxIconDot
                    // onClick={handleScrollToSlide01}
                    active={activeIndex === 0}
                >
                    <StyledBsDot />
                </StyledBoxIconDot>

               <StyledBoxIconDot
                   // onClick={handleScrollToSlide01}
                   active={activeIndex === 1}
               >
                    <StyledBsDot />
                </StyledBoxIconDot>

               <StyledBoxIconDot
                   // onClick={handleScrollToSlide01}
                   active={activeIndex === 2}
               >
                </StyledBoxIconDot>
            </BoxWrappIconsDots>

    )
}

export default Dots



const BoxWrappIconsDots = styled(Box)`
  //border: 2px solid red;
  position: absolute;
  z-index: 10;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledBoxIconDot = styled(Box)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
  
  width: 20px;
  height: 20px;
  margin: 0px 20px;
  
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
  `};
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.colorWhite};
    `};
    :hover * {
      ${({ theme }) => css`
        background-color: ${theme.colors.colorWhite};
        color: ${theme.colors.colorSecondary};
      `};
      :active {
        ${({ theme }) => css`
          background-color: ${theme.colors.colorWhite};
        `};
        :active * {
          ${({ theme }) => css`
            background-color: ${theme.colors.colorWhite};
            color: ${theme.colors.colorSecondary};
          `};
  }
`

const StyledBsDot = styled(BsDot)`
  transition: 0.3s;
  cursor: pointer;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
  `};
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.colorWhite};
      color: ${theme.colors.colorSecondary};
    `};
    :active {
      ${({ theme }) => css`
        background-color: ${theme.colors.colorWhite};
        color: ${theme.colors.colorSecondary};
      `};
`
