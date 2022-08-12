import styled from 'styled-components'

import MoreInfoTextPart01 from './MoreInfoTextPart01'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const MoreInfoSmall01 = ({ getWidth }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
      width={getWidth}
    >
      <BgxBg>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'90%'}
          ml={'-8%'}
        >
          <HeaderImg src={'moreInfo/womanWithHero.png'} alt={'photo'} />
        </Box>

        <BoxWrappOrnament>
          <OrnamentImg src={' ornament.png'} alt={'photo'} />
          <BoxWrappTextInsideOrnament>
            <TitleAndText
              variant={{ _: 'textSmallVery', mobileL: 'textSmall' }}
              textAlign={'center'}
            >
              Lorem ipsum
            </TitleAndText>
            <TitleAndText
              variant={{ _: 'textSmallVery', mobileL: 'textSmall' }}
              textAlign={'center'}
              color={'colorSecondary'}
            >
              {' '}
              cons ac mattist
            </TitleAndText>
          </BoxWrappTextInsideOrnament>
        </BoxWrappOrnament>

        <BoxWrappArrow>
          <ArrowImg src={'arrowTwisting06.png'} alt={'arrow'} />
        </BoxWrappArrow>

        <BoxWrappGift>
          <GiftImg src={'gift.png'} alt={'gift'} />
        </BoxWrappGift>

        <BoxWrappTxt>
          <TitleAndText
            variant={{ _: 'textSmallVery', mobileL: 'textSmall' }}
            textAlign={'center'}
            color={'colorSecondary'}
          >
            Consectetur
          </TitleAndText>
          <TitleAndText
            variant={{ _: 'textSmallVery', mobileL: 'textSmall' }}
            textAlign={'center'}
          >
            {' '}
            consectetur adipiscing{' '}
          </TitleAndText>
        </BoxWrappTxt>
      </BgxBg>
      <MoreInfoTextPart01 />
    </Box>
  )
}

export default MoreInfoSmall01

const BgxBg = styled(Box)`
  background-image: url('bg3-sliderSmall.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 80px;
  padding-bottom: 90px;
  position: relative;
  @media (min-width: 568px) {
    padding-bottom: 110px;
  }
`

const HeaderImg = styled.img`
  width: 100%;
`

const BoxWrappArrow = styled(Box)`
  position: absolute;
  width: 18%;
  top: 40%;
  right: 8%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 15%;
    top: 40%;
    right: 10%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 20%;
  top: 15%;
  right: 5%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 18%;
    top: 15%;
    right: 3%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 40%;
  bottom: -0%;
  left: 40%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 34%;
    left: 43%;
    bottom: 3%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 70%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  @media (min-width: 568px) {
    top: 18%;
  }
`

const OrnamentImg = styled.img`
  width: 100%;
`

const BoxWrappTxt = styled(Box)`
  position: absolute;
  width: 20%;
  top: 32%;
  right: 4%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 20%;
    top: 30%;
  }
`
