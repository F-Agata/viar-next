import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const AboutUsTextPartDescription = () => (
  <Box
    // border={'red 2px solid'}
    bg={'colorLightBg'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'left'}
    p={{ _: '20px 5% 0px 40px', tablet: '0px 0px 0px 40px' }}
  >
    <BoxSingleItem>
      <Box
        // border={'red 2px solid'}
        height={{ _: '100%' }}
        mr={10}
        position={'absolute'}
        left={'-40px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <StyledImg src={'aboutUs/tablet.png'} alt={'icon'} />
      </Box>
      <TitleAndText variant={'textMiddle'} textAlign={'left'}>
        <TitleAndText
          as="span"
          variant={'textMiddleBold'}
          color={'colorSecondary'}
        >
          Curabitur leo elit{' '}
        </TitleAndText>
        cefficitur per conubia nostra nulla id velit iaculis congue
      </TitleAndText>
    </BoxSingleItem>

    <BoxSingleItem>
      <Box
        // border={'red 2px solid'}
        height={{ _: '100%' }}
        mr={10}
        position={'absolute'}
        left={'-40px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <StyledImg src={'aboutUs/bottle.png'} alt={'icon'} />
      </Box>
      <TitleAndText variant={'textMiddle'} textAlign={'left'}>
        <TitleAndText
          as="span"
          variant={'textMiddleBold'}
          color={'colorSecondary'}
        >
          Nullam placerat,{' '}
        </TitleAndText>
        Aenean elementum sodales metus venenatis egestas
      </TitleAndText>
    </BoxSingleItem>

    <BoxSingleItem>
      <Box
        // border={'red 2px solid'}
        height={{ _: '100%' }}
        mr={10}
        position={'absolute'}
        left={'-40px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <StyledImg src={'aboutUs/familyPicture.png'} alt={'icon'} />
      </Box>

      <TitleAndText
        variant={'textMiddleBold'}
        textAlign={'left'}
        color={'colorSecondary'}
      >
        <TitleAndText as="span" variant={'textMiddle'} color={'colorPrimary'}>
          Quisque sodales sagittis ornare{' '}
        </TitleAndText>
        placerat posuere bibendum.{' '}
        <TitleAndText as="span" variant={'textMiddle'} color={'colorPrimary'}>
          maximus mi, at cursus erat{' '}
        </TitleAndText>
      </TitleAndText>
    </BoxSingleItem>

    <BoxSingleItem>
      <Box
        // border={'red 2px solid'}
        height={{ _: '100%' }}
        mr={10}
        position={'absolute'}
        left={'-40px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <StyledImg src={'aboutUs/giftFlat.png'} alt={'icon'} />
      </Box>
      <TitleAndText
        variant={'textMiddleBold'}
        textAlign={'left'}
        color={'colorSecondary'}
      >
        <TitleAndText as="span" variant={'textMiddle'} color={'colorPrimary'}>
          {' '}
          Nullam ex purus, placerat vel lacus ac, suscipit imperdiet lectus.{' '}
        </TitleAndText>
        Sed imperdiet orci a luctus
      </TitleAndText>
    </BoxSingleItem>
  </Box>
)

export default AboutUsTextPartDescription

const BoxSingleItem = styled(Box)`
  border-radius: 8px;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  padding: 20px 5px 20px 65px;
  box-shadow: 4px 4px 10px rgba(250, 120, 70, 0.25);

  ${({ theme }) => css`
    border: ${theme.colors.colorWhite} solid 2px;
  `};
`

const StyledImg = styled.img`
  //border: 2px solid darkslategrey;
  width: 100px;
  max-height: 100%;
`
