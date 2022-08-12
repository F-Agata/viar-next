import styled, { css } from 'styled-components'

import itemsTextPartWithImg from './itemsTextPartWithImg'

import { BsFillCheckCircleFill } from 'react-icons/bs'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const ContactTextPartWithImg = () => {
  const itemTextPartWithImg = itemsTextPartWithImg.map((item, index) => {
    const isEven = index % 2 !== 0

    return (
      <StyledBoxOneIdea key={item.title} isEven={isEven}>
        <BoxWrappIcon isEven={isEven}>
          <StyledBsFillCheckCircleFill />
        </BoxWrappIcon>
        <Box p={'5px 0'}>
          <TitleAndText variant={'textMiddle'} color={'colorSecondary'}>
            {item.secondaryText}
            <TitleAndText
              as="span"
              variant={'textMiddle'}
              color={'colorPrimary'}
            >
              {item.primaryText}
            </TitleAndText>
          </TitleAndText>
        </Box>
      </StyledBoxOneIdea>
    )
  })

  return (
    <Box
      maxWidth={1140}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
      p={{ _: '0px 20px', mobileL: '0px 40px' }}
    >
      <TitleAndText
        variant={{ _: 'title3Uppercase', tablet: 'title2Uppercase' }}
        textAlign={'center'}
        color={'colorPrimary'}
        mb={20}
      >
        Etiam commodo ac arcu nec porta
      </TitleAndText>
      <TitleAndText
        variant={{ _: 'textSmall', tablet: 'textMiddleBold' }}
        textAlign={'center'}
        color={'colorPrimary'}
        mb={20}
      >
        eleifend justo at, consectetur libero
      </TitleAndText>
      <Box
        m={'0 auto'}
        width={'100%'}
        textAlign={'center'}
        display={'flex'}
        flexDirection={{ _: 'column', tablet: 'row' }}
        flexWrap={'wrap'}
        justifyContent={{ _: 'center', tablet: 'space-between' }}
        alignItems={{ _: 'center', tablet: 'stretch' }}
      >
        {itemTextPartWithImg}
      </Box>
    </Box>
  )
}

export default ContactTextPartWithImg

const StyledBoxOneIdea = styled(Box)`
  width: 100%;
  margin: 10px 0;
  padding: 10px 0px;
  display: flex;
  justify-content: flex-start;
  text-align: left;

  @media (min-width: 768px) {
    width: 34%;
    ${({ isEven }) => css`
      flex-direction: ${isEven ? 'row-reverse' : 'row'};
      justify-content: ${isEven ? 'flex-start' : 'flex-end'};
      text-align: ${isEven ? 'right' : 'left'};
      padding-left: ${isEven ? '20px' : '0'};
    `};
  }
  @media (min-width: 1024px) {
    ${({ isEven }) => css`
      padding-left: ${isEven ? '40px' : '0'};
    `};
  }
  @media (min-width: 1140px) {
    ${({ isEven }) => css`
      padding-left: ${isEven ? '60px' : '0'};
    `};
  }
`

const BoxWrappIcon = styled(Box)`
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 10px 0 0;

  @media (min-width: 768px) {
    ${({ isEven }) => css`
      margin: ${isEven ? '0 0px 0 10px ' : '0 10px 0 0px'};
    `};
  }
`

const StyledBsFillCheckCircleFill = styled(BsFillCheckCircleFill)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorSecondary};
  `};
`
