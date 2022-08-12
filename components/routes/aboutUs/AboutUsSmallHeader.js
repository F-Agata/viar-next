import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import AboutUsTextPartHeader from './AboutUsTextPartHeader'

const AboutUsSmallHeader = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
    >
      <BgxBg>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <HeaderImg src={'aboutUs/womenWithPainting3.png'} alt={'photo'} />
        </Box>

        <BoxWrappOrnament>
          <OrnamentImg src={' ornament.png'} alt={'photo'} />
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
          <ArrowImg src={'arrowTwisting01.png'} alt={'arrow'} />
        </BoxWrappArrow>

        <BoxWrappGift>
          <GiftImg src={'gift.png'} alt={'gift'} />
        </BoxWrappGift>

        <BoxWrappTxt>
          <TitleAndText
            variant={'textSmall'}
            textAlign={'center'}
            color={'colorSecondary'}
          >
            Etiam ac{' '}
          </TitleAndText>
          <TitleAndText variant={'textSmall'} textAlign={'center'}>
            {' '}
            convallis massa
          </TitleAndText>
        </BoxWrappTxt>
      </BgxBg>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        p={{ _: '0px 20px', mobileL: '0px 40px' }}
      >
        <AboutUsTextPartHeader />
      </Box>
    </Box>
  )
}

export default AboutUsSmallHeader

const BgxBg = styled(Box)`
  background-image: url('bg3-sliderSmall.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 60px;
  padding-bottom: 90px;
  position: relative;
  @media (min-width: 568px) {
    padding-bottom: 110px;
  }
`

const HeaderImg = styled.img`
  width: 80%;
  margin-right: -80px;
  @media (min-width: 568px) {
    margin-right: -110px;
  }
`

const BoxWrappArrow = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 22%;
  top: 30%;
  left: 10%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 18%;
    top: 26%;
    left: 15%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 20%;
  top: 13%;
  left: 8%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 10%;
    left: 5%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 36%;
  bottom: 0%;
  left: 30%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 30%;
    bottom: 2%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 100px;
  position: absolute;
  top: 10px;
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
