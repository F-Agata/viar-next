import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import Box from '../../../../styles/Box'
import BoxIcon from '../../../../styles/BoxIcon'
import TitleAndText from '../../../../styles/TitleAndText'

const BoxSingleQuestion = ({ question, smallDescription, opened = false }) => {
  const [isOpen, setIsOpen] = useState(opened)

  return (
    <StyledBoxSingleQuestion>
      <Box
        width={'100%'}
        // border={'green 2px solid'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Box pr={10}>
          {!isOpen && (
            <Box
              onClick={() => setIsOpen(!isOpen)}
              width={36}
              height={36}
              bg={'colorWhite'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <StyledAiOutlinePlus />
            </Box>
          )}
          {isOpen && (
            <BoxIcon
              onClick={() => setIsOpen(!isOpen)}
              width={36}
              height={36}
              bg={'colorSecondary'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <StyledAiOutlineMinus />
            </BoxIcon>
          )}
        </Box>
        <TitleAndText variant={'textMiddleBold'} textAlign={'left'}>
          {question}
        </TitleAndText>
      </Box>
      {isOpen && (
        <TitleAndText variant={'textSmall'} textAlign={'left'} p={'20px 0px'}>
          {smallDescription}
        </TitleAndText>
      )}
    </StyledBoxSingleQuestion>
  )
}

export default BoxSingleQuestion

const StyledBoxSingleQuestion = styled(Box)`
  border-top: 1px solid;
  border-bottom: ;
  border-color: ${(props) => props.theme.colors.colorLight};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

const StyledAiOutlinePlus = styled(AiOutlinePlus)`
  width: 14px;
  height: 14px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorSecondary};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover {
    transform: scale(1.3, 1.3);
  }
`

const StyledAiOutlineMinus = styled(AiOutlineMinus)`
  width: 14px;
  height: 14px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover {
    transform: scale(1.3, 1.3);
  }
`
