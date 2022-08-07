import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import AboutUsTextPartDescription from './AboutUsTextPartDescription'

const AboutUsSmallDescription = () => (
  <Box
    // border={'green 2px solid'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'space-between'}
    alignItems={'strench'}
    p={{ _: '0px 20px 40px 20px', mobileL: '0px 40px 40px 40px' }}
  >
    <TitleAndText variant={'title4Uppercase'} textAlign={'center'} mb={'40px '}>
      Pellentesque luctus pellentesque tincidunt
    </TitleAndText>

    <BgxBg>
      <Box
        // border={'pink 2px solid'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        // p={{_: '0px 20px', mobileL: '0px 40px', }}
      >
        <AboutUsTextPartDescription />
      </Box>

      <Box
        // border={'lightblue 2px solid'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        mt={0}
        position={'relative'}
      >
        <HeaderImg src={'aboutUs/womenWithPainting5.png'} alt={'photo'} />

        <BoxWrappOrnament>
          <OrnamentImg src={'aboutUs/ornament02.png'} alt={'photo'} />
          <BoxWrappTextInsideOrnament>
            <TitleAndText
              variant={{ _: 'textSmallVery', mobileL: 'textSmall' }}
              textAlign={'center'}
            >
              Nam efficitur{' '}
            </TitleAndText>
            <TitleAndText
              variant={{ _: 'textSmallVery', mobileL: 'textSmall' }}
              textAlign={'center'}
              color={'colorSecondary'}
            >
              {' '}
              tortor sed
            </TitleAndText>
          </BoxWrappTextInsideOrnament>
        </BoxWrappOrnament>

        <BoxWrappArrow>
          <ArrowImg src={'arrowTwisting08.png'} alt={'arrow'} />
        </BoxWrappArrow>
      </Box>
    </BgxBg>
  </Box>
)

export default AboutUsSmallDescription

const BgxBg = styled(Box)`
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
  width: 95%;
`

const BoxWrappArrow = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 28%;
  top: 5%;
  left: 30%;
  z-index: 2;
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 30%;
  top: 10%;
  left: 5%;
  z-index: 2;
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 80%;
  //border: yellow 2px solid;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  @media (min-width: 568px) {
    width: 80%;
    top: 22%;
  }
`

const OrnamentImg = styled.img`
  width: 100%;
`

const BoxWrappTxt = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 20%;
  top: 38%;
  left: 2%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 32%;
    left: 3%;
  }
`
