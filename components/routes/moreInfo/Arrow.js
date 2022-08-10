import React from 'react'
import styled, { css } from 'styled-components'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Box from '../../../styles/Box'

import {
  handleScrollToSlide01,
  handleScrollToSlide02,
  handleScrollToSlide03
} from "../../../helpers/helpersMoveSlideInMoreInfo";

const Arrow = ({ direction, whichSlide, setWhichSlide, slide01Ref, slide02Ref, slide03Ref}) => {

  const moveLeft = () => {
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

  const moveRight = () => {
    if (whichSlide === 3) {
      setWhichSlide(1)
    } else {
      setWhichSlide((prevWhichSlide) => prevWhichSlide + 1)
    }

    if (whichSlide === 1) {
      handleScrollToSlide01(slide02Ref)
    } else if (whichSlide === 2) {
      handleScrollToSlide02(slide03Ref)
    } else if (whichSlide === 3) {
      handleScrollToSlide03(slide01Ref)
    }
  }

    return (
            <StyledBoxIconArrowLeftOrRight onClick={direction === 'right' ? moveRight :  moveLeft} direction={direction}>
                {direction === 'right' ? <StyledAiOutlineArrowRight /> :  <StyledAiOutlineArrowLeft />}
            </StyledBoxIconArrowLeftOrRight>
    )
}

export default Arrow

const StyledBoxIconArrowLeftOrRight = styled(Box)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;

  width: 48px;
  height: 48px;
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translate(0%, -50%);

  cursor: pointer;
  
  ${({ theme, direction }) => css`
    right: ${direction === "right" ? `1%` : 'none'};
    left: ${direction === "left" ? `1%` : 'none'};
    background-color: ${theme.colors.colorSecondary};
  `};
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.colorWhite};
    `}
  }
  :hover * {
    ${({ theme }) => css`
      background-color: ${theme.colors.colorWhite};
      color: ${theme.colors.colorSecondary};
    `};
  }
`

const StyledAiOutlineArrowLeft = styled(AiOutlineArrowLeft)`
  transition: 0.3s;
  
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
  `};
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.colorWhite};
      color: ${theme.colors.colorSecondary};
    `};
  }
`

const StyledAiOutlineArrowRight = styled(AiOutlineArrowRight)`
  transition: 0.3s;
  cursor: pointer;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs7};
  `};
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.colorWhite};
      color: ${theme.colors.colorSecondary};
    `};
`

