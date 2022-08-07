import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

import Box from '../../../styles/Box'

const SlidersArrowsAndDots = ({
  // whichSlide, setWhichSlide,
  handleScrollToSlide01,
  handleScrollToSlide02,
  handleScrollToSlide03,
}) => {
  const [whichSlide, setWhichSlide] = useState(1)

  const moveLeft = () => {
    if (whichSlide === 1) {
      setWhichSlide(3)
    } else if (whichSlide === 2) {
      setWhichSlide(1)
    } else if (whichSlide === 3) {
      setWhichSlide(2)
    }

    console.log(whichSlide, 'whichSlide')

    if (whichSlide === 1) {
      handleScrollToSlide01()
    } else if (whichSlide === 2) {
      handleScrollToSlide02()
    } else if (whichSlide === 3) {
      handleScrollToSlide03()
    }
  }

  const moveRight = () => {
    if (whichSlide === 3) {
      setWhichSlide(1)
    } else {
      setWhichSlide((prevWhichSlide) => prevWhichSlide + 1)
    }

    console.log(whichSlide, 'whichSlide')

    if (whichSlide === 1) {
      handleScrollToSlide01()
    } else if (whichSlide === 2) {
      handleScrollToSlide02()
    } else if (whichSlide === 3) {
      handleScrollToSlide03()
    }
  }

  return (
    <Box
      // border={'blue 2px solid'}
      position={'relative'}
      zIndex={'10'}
      bg={'transparent'}
      // width={`${window.innerWidth}px`}
      width={'100%'}
      height={'100%'}
    >
      <StyledBoxIconArrowLeft onClick={moveLeft}>
        <StyledAiOutlineArrowLeft />
      </StyledBoxIconArrowLeft>
      <StyledBoxIconArrowRight onClick={moveRight}>
        <StyledAiOutlineArrowRight />
      </StyledBoxIconArrowRight>

      <BoxWrappIconsDots>
        <StyledBoxIconDot onClick={handleScrollToSlide01}>
          <StyledBsDot />
        </StyledBoxIconDot>
        <StyledBoxIconDot onClick={handleScrollToSlide02}>
          <StyledBsDot />
        </StyledBoxIconDot>
        <StyledBoxIconDot onClick={handleScrollToSlide03}>
          <StyledBsDot />
        </StyledBoxIconDot>
      </BoxWrappIconsDots>
    </Box>
  )
}

export default SlidersArrowsAndDots

const StyledBoxIconArrowLeft = styled(Box)`
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
  left: 1%;
  transform: translate(0%, -50%);
  z-index: 4;
  ${({ theme }) => css`
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

const StyledBoxIconArrowRight = styled(Box)`
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
  right: 1%;
  transform: translate(0%, -50%);
  z-index: 4;
  ${({ theme }) => css`
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

const BoxWrappIconsDots = styled(Box)`
  //border: 2px solid red;
  position: absolute;
  z-index: 10;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 4;
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
  //position: absolute;
  //bottom: 1%;
  //left: 50%;
  //transform: translate(-50%, 0%);
  //z-index: 4;
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
