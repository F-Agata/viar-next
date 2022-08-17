import React from 'react'
import styled, { css } from 'styled-components'

import { BsDot } from 'react-icons/bs'

import Box from '../../../styles/Box'

const Dots = ({
  whichSlide,
  setWhichSlide,
  portfolioItems,
  setStyleTranslate,
  widthSingleSlide,
}) => {
  const moveToChoiceSlide = (index) => {
    setWhichSlide(index)
    setStyleTranslate(index * widthSingleSlide)
  }

  const singleDot = portfolioItems.map((item, index) => (
    <StyledBoxIconDot
      key={`${item} + ${item} * ${item}`}
      onClick={() => moveToChoiceSlide(index)}
      isActive={whichSlide === index}
    >
      <StyledBsDot isActive={whichSlide === index} />
    </StyledBoxIconDot>
  ))

  return <BoxWrappIconsDots>{singleDot}</BoxWrappIconsDots>
}

export default Dots

const BoxWrappIconsDots = styled(Box)`
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
     background-color: ${isActive
       ? theme.colors.colorWhite
       : theme.colors.colorSecondary};
     color: ${isActive ? theme.colors.colorSecondary : theme.colors.colorWhite};
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
      background-color: ${isActive
        ? theme.colors.colorWhite
        : theme.colors.colorSecondary};
      color: ${isActive
        ? theme.colors.colorSecondary
        : theme.colors.colorWhite};
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
