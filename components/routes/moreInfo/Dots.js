import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'


import { BsDot } from 'react-icons/bs'

import Box from '../../../styles/Box'

import {
    handleScrollToSlide01,
    handleScrollToSlide02,
    handleScrollToSlide03
} from "../../../helpers/helpersMoveSlideInMoreInfo";


const Dots = ({ whichSlide, slide01Ref, slide02Ref, slide03Ref}) => {

    const moveToChoiceSlide = () => {
        if (active)
        if (whichSlide === 1) {
            setWhichSlide(3)
        } else if (whichSlide === 2) {
            setWhichSlide(1)
        } else if (whichSlide === 3) {
            setWhichSlide(2)
        }

        if (whichSlide === 1) {
            handleScrollToSlide01(slide03Ref)
        } else if (whichSlide === 2) {
            handleScrollToSlide02(slide01Ref)
        } else if (whichSlide === 3) {
            handleScrollToSlide03(slide02Ref)
        }
    }


    return (
           <BoxWrappIconsDots>
                <StyledBoxIconDot
                    onClick={moveToChoiceSlide}
                    active={whichSlide === 1}
                >
                    <StyledBsDot />
                </StyledBoxIconDot>

               <StyledBoxIconDot
                   onClick={moveToChoiceSlide}
                   active={whichSlide === 2}
               >
                    <StyledBsDot />
                </StyledBoxIconDot>

               <StyledBoxIconDot
                   onClick={moveToChoiceSlide}
                   active={whichSlide === 3}
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
