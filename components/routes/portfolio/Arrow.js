import React from 'react'
import styled, { css } from 'styled-components'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Box from '../../../styles/Box'

const Arrow = ({
  direction,
  whichSlide,
  setWhichSlide,
  portfolioItems,
  setStyleTranslate,
  widthSingleSlide,
}) => {
  const nextSlide = () => {
    if (whichSlide === portfolioItems.length - 1) {
      setStyleTranslate(0)
      setWhichSlide(0)
    } else {
      setWhichSlide(whichSlide + 1)
      setStyleTranslate((whichSlide + 1) * widthSingleSlide)
    }
  }

  const prevSlide = () => {
    if (whichSlide === 0) {
      setStyleTranslate((portfolioItems.length - 1) * widthSingleSlide)
      setWhichSlide(portfolioItems.length - 1)
    } else {
      setWhichSlide(whichSlide - 1)
      setStyleTranslate((whichSlide - 1) * widthSingleSlide)
    }
  }

  return (
    <StyledBoxIconArrowLeftOrRight
      onClick={direction === 'right' ? nextSlide : prevSlide}
      direction={direction}
    >
      {direction === 'right' ? (
        <StyledAiOutlineArrowRight />
      ) : (
        <StyledAiOutlineArrowLeft />
      )}
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
  top: 40%;
  cursor: pointer;
  ${({ theme, direction }) => css`
    right: ${direction === 'right' ? `1%` : 'none'};
    left: ${direction === 'left' ? `1%` : 'none'};
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
