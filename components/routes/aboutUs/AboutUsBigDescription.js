import styled, { css } from 'styled-components'

import AboutUsTextPartDescription from './AboutUsTextPartDescription'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const AboutUsBigDescription = () => {
  return (
    <Box
      // border={'green 2px solid'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={'20px 20px'}
    >
      <TitleAndText
        variant={'title4Uppercase'}
        textAlign={'center'}
        mb={'40px '}
      >
        Pellentesque luctus pellentesque tincidunt
      </TitleAndText>

      <BgxBg>
        <Box
          width={'100%'}
          p={'0px 20px'}
          m={'0 auto'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'stretch'}
          // border={'pink 2px solid'}
          pt={{ _: '0', tablet: '20px' }}
        >
          <Box
            width={{ _: '55%', tabletL: '50%' }}
            position={'relative'}
            // border={'olive 2px solid'}
            // alignSelf={'center' }
            // alignSelf={{_: 'flex-start', tabletL: 'flex-end' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}

            // p={{_: '60px 0px 0 0px', tabletL: '20px 0px 0px 0px', laptopS: '20px 0px 0px 0px', }}
          >
            <BoxWrappOrnament>
              <OrnamentImg src={'aboutUs/ornament02.png'} alt={'photo'} />
              <BoxWrappTextInsideOrnament>
                <TitleAndText variant={'textSmall'} textAlign={'center'}>
                  Nam efficitur{' '}
                </TitleAndText>
                <TitleAndText
                  variant={'textSmall'}
                  textAlign={'center'}
                  color={'colorSecondary'}
                >
                  {' '}
                  tortor sed
                </TitleAndText>
              </BoxWrappTextInsideOrnament>
            </BoxWrappOrnament>

            <BoxWrappArrow>
              <ArrowImg src={'arrowTwisting04.png'} alt={'arrow'} />
            </BoxWrappArrow>

            <HeaderImg src={'aboutUs/womenWithPainting5.png'} alt={'photo'} />
          </Box>

          <Box
            width={{ _: '45%', tabletL: '45%', laptopS: '45%' }}
            // border={'red 2px solid'}
            display={'flex'}
            // flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            // p={{_: '0px 0px 0px 0px', tabletL: '0px 0px 0px 0px', laptopS: '0px 0px 0px 0px' }}
          >
            <AboutUsTextPartDescription />
          </Box>
        </Box>
      </BgxBg>
    </Box>
  )
}

export default AboutUsBigDescription

const BgxBg = styled(Box)`
  max-width: 1140px;
  border-radius: 8px;
  //position: relative;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorLightBg};
    outline: ${theme.colors.colorLightBg} solid 8px;
    border: ${theme.colors.colorWhite} solid 2px;
  `};
`

const HeaderImg = styled.img`
  //border: 2px solid blueviolet;
  width: 100%;
`

const BoxWrappArrow = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 50%;
  top: 5%;
  right: 0%;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 3%;
  }
  //@media (min-width: 1140px) {
  //  width: 16%;
  //  top: 74%;
  //  left: 32%;
  //}
  //  @media (min-width: 1366px) {
  //    width: 12%;
  //    top: 74%;
  //    left: 33%;
  //  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 36%;
  top: 16%;
  left: 5%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 30%;
    top: 10%;
  }
  @media (min-width: 1140px) {
    width: 26%;
    top: 12%;
    left: 8%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 80%;
  //border: yellow 2px solid;
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, 0);
  @media (min-width: 1024px) {
    width: 82%;
    top: 22%;
  }
`

const OrnamentImg = styled.img`
  width: 100%;
`
