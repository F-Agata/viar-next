import styled, { css } from 'styled-components'

import AboutUsTextPartHeader from './AboutUsTextPartHeader'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const AboutUsBigHeader = () => (
  <Box
    // border={'green 2px solid'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'space-between'}
    alignItems={'strench'}
    pb={20}
  >
    <BgxBg>
      <Box
        width={'100%'}
        maxWidth={1140}
        p={'0px 20px'}
        m={'0 auto'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'stretch'}
        // border={'pink 2px solid'}
        pt={{ _: '0', tablet: '20px' }}
      >
        <Box
          width={{ _: '50%', tabletL: '45%', laptopS: '45%' }}
          // border={'red 2px solid'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          p={{
            _: '120px 20px 20px 0px',
            tabletL: '120px 20px 20px 20px',
            laptopS: '100px 20px 20px 20px',
          }}
        >
          <AboutUsTextPartHeader />
        </Box>

        <Box
          width={{ _: '50%', tabletL: '60%', laptopS: '60%' }}
          position={'relative'}
          // border={'olive 2px solid'}
          alignSelf={'flex-end'}
          // alignSelf={{_: 'flex-start', tabletL: 'flex-end' }}
          display={'flex'}
          justifyContent={'center'}
          // alignItems={'flex-end'}
          mt={50}
          // p={{_: '60px 0px 0 0px', tabletL: '20px 0px 0px 0px', laptopS: '20px 0px 0px 0px', }}
        >
          <BoxWrappOrnament>
            <OrnamentImg src={' ornament.png'} alt={'photo'} />
            <BoxWrappTextInsideOrnament>
              <TitleAndText
                variant={'textSmall'}
                // variant={{_: 'textSmallVery', tabletL: 'textSmall', }}
                textAlign={'center'}
                // pb={{_: '0', mobileL: '10px', }}
              >
                Lorem ipsum
              </TitleAndText>
              <TitleAndText
                variant={'textSmall'}
                // variant={{_: 'textSmallVery', tabletL: 'textSmall', }}
                textAlign={'center'}
                color={'colorSecondary'}
              >
                {' '}
                cons ac mattist
              </TitleAndText>
            </BoxWrappTextInsideOrnament>
          </BoxWrappOrnament>

          <HeaderImg src={'aboutUs/womenWithPainting3.png'} alt={'photo'} />
        </Box>

        <BoxWrappArrow>
          <ArrowImg src={'arrowTwisting02.png'} alt={'arrow'} />
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
            Lorem ipsum
          </TitleAndText>
          <TitleAndText variant={'textSmall'} textAlign={'center'}>
            {' '}
            consectetur adipiscing elit
          </TitleAndText>
        </BoxWrappTxt>
      </Box>
    </BgxBg>
  </Box>
)

export default AboutUsBigHeader

const BgxBg = styled(Box)`
  width: 100%;
  //border: 2px burlywood solid;
  background-image: url('bg3-sliderBig.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 70px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderImg = styled.img`
  //border: 2px solid blueviolet;
  width: 460px;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    width: 100%;
    margin-bottom: 32px;
  }
`

const BoxWrappArrow = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 14%;
  top: 22%;
  left: 60%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 16%;
    top: 80%;
    left: 30%;
  }
  @media (min-width: 1140px) {
    width: 16%;
    top: 74%;
    left: 32%;
  }
  @media (min-width: 1366px) {
    width: 12%;
    top: 74%;
    left: 33%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 14%;
  top: 12%;
  left: 44%;
  //transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    top: 55%;
    left: 40%;
  }
  @media (min-width: 1140px) {
    width: 10%;
    top: 50%;
    left: 40%;
  }
  @media (min-width: 1366px) {
    width: 8%;
    top: 50%;
    top: 50%;
    left: 42%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 160px;
  top: 10px;
  right: 0%;
  //transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    top: 60px;
    right: 0%;
  }
  //@media (min-width: 1140px) {
  //  width: 15%;
  //  top: 16%;
  //  right: -7%;
  //}
  //@media (min-width: 1366px) {
  //  width: 15%;
  //  top: 14%;
  //  right: -2%;
  //}
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 80%;
  //border: yellow 2px solid;
  position: absolute;
  top: 23%;
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

const BoxWrappTxt = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 30%;
  top: 16%;
  left: 56%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 22%;
    top: 70%;
    left: 28%;
  }
  @media (min-width: 1140px) {
    bottom: 28%;
    left: 30%;
    top: 66%;
  }
`
