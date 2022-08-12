import styled, { css } from 'styled-components'

import AboutUsTextPartDescription from './AboutUsTextPartDescription'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const AboutUsBigDescription = () => {
  return (
    <Box
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
          pt={{ _: '0', tablet: '20px' }}
        >
          <Box
            width={{ _: '55%', tabletL: '50%' }}
            position={'relative'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
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
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
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
  ${({ theme }) => css`
    background-color: ${theme.colors.colorLightBg};
    outline: ${theme.colors.colorLightBg} solid 8px;
    border: ${theme.colors.colorWhite} solid 2px;
  `};
`

const HeaderImg = styled.img`
  width: 100%;
`

const BoxWrappArrow = styled(Box)`
  position: absolute;
  width: 50%;
  top: 5%;
  right: 0%;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 3%;
  }
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
