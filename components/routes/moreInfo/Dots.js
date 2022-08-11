import React from 'react'
import styled, { css } from 'styled-components'

import { BsDot } from 'react-icons/bs'

import Box from '../../../styles/Box'

import {
    handleScrollToSlide01,
    handleScrollToSlide02,
    handleScrollToSlide03
} from "../../../helpers/helpersMoveSlideInMoreInfo";


const Dots = ({ whichSlide, setWhichSlide, slide01Ref, slide02Ref, slide03Ref}) => {

    const howManyDots = [slide01Ref, slide02Ref, slide03Ref]

    const moveToChoiceSlide = (myChoice, item) => {
        setWhichSlide(myChoice)

        if (whichSlide === 1) {
            handleScrollToSlide01(item)
        } else if (whichSlide === 2) {
            handleScrollToSlide02(item)
        } else if (whichSlide === 3) {
            handleScrollToSlide03(item)
        }
    }

    const singleDot = howManyDots.map((item, index ) => (
        <StyledBoxIconDot key={`${item} + ${item} * ${item}`}
            onClick={() => moveToChoiceSlide(index+1, item)}
            isActive={whichSlide === index+1}
        >
            <StyledBsDot
                isActive={whichSlide === index+1}
            />
        </StyledBoxIconDot>
    ))

    return (
           <BoxWrappIconsDots>
               {singleDot}
           </BoxWrappIconsDots>
    )
}

export default Dots

const BoxWrappIconsDots = styled(Box)`
  //border: 2px solid red;
  position: absolute;
  z-index: 10;
  bottom: 0;
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
  
  ${({ theme, isActive }) => css`
    border: ${theme.colors.colorSecondary} 1px solid;
    background-color: ${ isActive ? theme.colors.colorWhite : theme.colors.colorSecondary};
    color: ${ isActive ? theme.colors.colorSecondary : theme.colors.colorWhite };
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
    ${({ theme, isActive }) => css`
    background-color: ${ isActive ? theme.colors.colorWhite : theme.colors.colorSecondary};
    color: ${ isActive ? theme.colors.colorSecondary : theme.colors.colorWhite };
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
