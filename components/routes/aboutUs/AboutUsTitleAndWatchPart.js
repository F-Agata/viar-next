import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const AboutUsTitleAndWatchPart = () => {
  return (
    <Box
      // border={'pink 2px solid'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={'0px 0px 40px 0'}
    >
      <TitleAndText
        variant={{ _: 'title3Uppercase', tablet: 'title2Uppercase' }}
        textAlign={'center'}
        color={'colorWhite'}
        mb={20}
      >
        {' '}
        Duis at arcu malesuada{' '}
      </TitleAndText>

      <Box
        // border={'orange 2px solid'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={20}
      >
        <TitleAndText
          variant={{ _: 'textMiddleBold', tablet: 'textLarge' }}
          textAlign={'center'}
          color={'colorWhite'}
          m={'10px 0'}
        >
          Maecenases as aliquamem -
          <TitleAndText as="span" color={'colorSecondary'}>
            {' '}
            sit amet iaculis sem
          </TitleAndText>
        </TitleAndText>
      </Box>

      <Box
        // border={'blue 2px solid'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        maxWidth={{ _: '380px', tablet: '600px' }}
        pl={{ _: '24px', tablet: '40px' }}
      >
        <Box
          width={'40%'}
          border={' 1px solid'}
          borderColor={'colorSecondary'}
          borderRadius={8}
          position={'relative'}
          height={{ _: '60px', tablet: '100px' }}
          display={'flex'}
          justifyContent={'right'}
          alignItems={'center'}
          pr={20}
        >
          <TitleAndText
            variant={{ _: 'textSmallVery', tablet: 'textMiddle' }}
            color={'colorWhite'}
            textAlign={'left'}
          >
            time: 1 hour
          </TitleAndText>

          <Box
            height={{ _: '100%' }}
            position={'absolute'}
            left={{ _: '-25px', tablet: '-41px' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            zIndex={'2'}
          >
            <StyledImg src={`aboutUs/watchFire.png`} alt={'icon'} />
          </Box>
        </Box>

        <Box
          width={'40%'}
          border={' 1px solid'}
          borderColor={'colorSecondary'}
          borderRadius={8}
          position={'relative'}
          height={{ _: '60px', tablet: '100px' }}
          display={'flex'}
          justifyContent={'right'}
          alignItems={'center'}
          pr={20}
        >
          <Box
            height={{ _: '100%' }}
            position={'absolute'}
            left={{ _: '-30px', tablet: '-50px' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <StyledImg src={`aboutUs/watchStandard.svg`} alt={'icon'} />
          </Box>
          <TitleAndText
            variant={{ _: 'textSmallVery', tablet: 'textMiddle' }}
            color={'colorWhite'}
            textAlign={'left'}
          >
            time: 3-8 hours
          </TitleAndText>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUsTitleAndWatchPart

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`
