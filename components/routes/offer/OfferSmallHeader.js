import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

import OfferTextPartHeader from './OfferTextPartHeader'

const OfferSmallHeader = () => (
  <Box
    // border={'green 2px solid'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'space-between'}
    alignItems={'strench'}
  >
    <BgxBg>
      <Box
        // border={'lightblue 2px solid'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
      >
        <HeaderImg src={'offer/coupleWithPainting.png'} alt={'photo'} />
      </Box>

      <BoxWrappOrnament>
        <OrnamentImg src={' ornament.png'} alt={'photo'} />
        <BoxWrappTextInsideOrnament>
          <TitleAndText
            variant={'textSmall'}
            // variant={{_: 'textSmallVery', mobileL: 'textSmall', }}
            textAlign={'center'}
            // pb={{_: '0', mobileL: '10px', }}
          >
            Aenean{' '}
          </TitleAndText>
          <TitleAndText
            variant={'textSmall'}
            // variant={{_: 'textSmallVery', mobileL: 'textSmall', }}
            textAlign={'center'}
            color={'colorSecondary'}
          >
            {' '}
            urna convallis
          </TitleAndText>
        </BoxWrappTextInsideOrnament>
      </BoxWrappOrnament>

      <BoxWrappArrow>
        <ArrowImg src={'arrowTwisting05.png'} alt={'arrow'} />
      </BoxWrappArrow>

      <BoxWrappGift>
        <GiftImg src={'gift.png'} alt={'gift'} />
      </BoxWrappGift>

      <BoxWrappTxt>
        <TitleAndText
          variant={'textSmall'}
          // variant={{_: 'textSmallVery', mobileL: 'textSmall', }}
          textAlign={'center'}
          color={'colorSecondary'}
        >
          Morbi{' '}
        </TitleAndText>
        <TitleAndText
          variant={'textSmall'}
          // variant={{_: 'textSmallVery', mobileL: 'textSmall', }}
          textAlign={'center'}
        >
          {' '}
          vitae risus
        </TitleAndText>
      </BoxWrappTxt>
    </BgxBg>

    <Box
      // border={'pink 2px solid'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={{ _: '0px 20px', mobileL: '0px 40px' }}
    >
      <OfferTextPartHeader />
    </Box>
  </Box>
)

export default OfferSmallHeader

const BgxBg = styled(Box)`
  //border: 2px burlywood solid;
  background-image: url('bg3-sliderSmall.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 60px;
  padding-bottom: 90px;
  position: relative;
  @media (min-width: 568px) {
    padding-bottom: 98px;
  }
`

const HeaderImg = styled.img`
  //border: 2px solid blueviolet;
  width: 70%;
  margin-right: -50px;
  @media (min-width: 568px) {
    margin-right: -80px;
  }
`

const BoxWrappArrow = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 18%;
  top: 46%;
  left: 8%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 16%;
    top: 42%;
    left: 10%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 20%;
  top: 18%;
  left: 18%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 20%;
    left: 16%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 36%;
  bottom: 0%;
  left: 56%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 30%;
    left: 62%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 120px;
  //border: yellow 2px solid;
  position: absolute;
  top: 15%;
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
  //border: yellow 2px solid;
  position: absolute;
  width: 60px;
  top: 32%;
  left: 5%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 32%;
    left: 5%;
  }
`
