import styled, { css } from 'styled-components'

import MoreInfoTextPart01 from './MoreInfoTextPart01'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const MoreInfoBig01 = ({getWidth}) => {
  return (
    <Box
      // border={'green 2px solid'}
        width={getWidth }
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
          alignItems={'center'}
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
              _: '100px 20px 20px 0px',
              tabletL: '100px 20px 20px 20px',
              laptopS: '100px 20px 20px 20px',
            }}
          >
            <MoreInfoTextPart01 />
          </Box>

          <Box
            width={{ _: '50%', tabletL: '50%', laptopS: '50%' }}
            position={'relative'}
            // border={'olive 2px solid'}
            alignSelf={{ _: 'flex-start', tabletL: 'flex-end' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            p={{
              _: '50px 0px 0 0px',
              tabletL: '20px 0px 0px 0px',
              laptopS: '20px 0px 0px 0px',
            }}
          >
            <BoxWrappOrnament>
              <OrnamentImg src={' ornament.png'} alt={'photo'} />
              <BoxWrappTextInsideOrnament>
                <TitleAndText variant={'textSmall'} textAlign={'center'}>
                  Lorem ipsum
                </TitleAndText>
                <TitleAndText
                  variant={'textSmall'}
                  textAlign={'center'}
                  color={'colorSecondary'}
                >
                  {' '}
                  cons ac mattist
                </TitleAndText>
              </BoxWrappTextInsideOrnament>
            </BoxWrappOrnament>

            <HeaderImg src={'moreInfo/womanWithHero.png'} alt={'photo'} />
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
}

export default MoreInfoBig01

const BgxBg = styled(Box)`
  width: 100%;
  //border: 2px burlywood solid;
  background-image: url('bg3-sliderBig.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 56px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderImg = styled.img`
  //border: 2px solid blueviolet;
  width: 440px;
  margin-left: -50px;
  @media (min-width: 1024px) {
    width: 110%;
    margin-bottom: -4%;
  }
`

const BoxWrappArrow = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 20%;
  bottom: 13%;
  left: 34%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 18%;
    bottom: 15%;
    left: 30%;
  }
  @media (min-width: 1140px) {
    width: 16%;
    bottom: 15%;
    left: 34%;
    @media (min-width: 1366px) {
      width: 16%;
      bottom: 15%;
      left: 34%;
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 14%;
  bottom: 26%;
  left: 45%;
  //transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    bottom: 30%;
    left: 42%;
  }
@media (min-width: 1140px) {
  width: 10%;
  bottom: 30%;
  left: 42%;
  `

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 160px;
  bottom: -68px;
  left: 70%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    width: 32%;
    top: 12%;
    left: 32%;
  }
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
    top: 5%;
  }
`

const OrnamentImg = styled.img`
  width: 100%;
`

const BoxWrappTxt = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 40%;
  bottom: 22%;
  left: 40%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 40%;
    bottom: 24%;
    left: 25%;
  }
  @media (min-width: 1140px) {
    wwidth: 20%;
    top: 70%;
    left: 25%;
  }
`
