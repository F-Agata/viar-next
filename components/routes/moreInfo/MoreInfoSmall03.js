import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import MoreInfoTextPart03 from './MoreInfoTextPart03'

const MoreInfoSmall03 = ({getWidth}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
      width={getWidth }
    >
      <BgxBg>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <HeaderImg src={'moreInfo/womenWithSelfPortrait.png'} alt={'photo'} />
        </Box>

        <BoxWrappOrnament>
          <OrnamentImg src={' ornament.png'} alt={'photo'} />
          <BoxWrappTextInsideOrnament>
            <TitleAndText
              variant={'textSmall'}
              textAlign={'center'}
                       >
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
          <TitleAndText
            variant={'textSmall'}
            textAlign={'center'}
          >
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
        <MoreInfoTextPart03 />
      </Box>
    </Box>
  )
}

export default MoreInfoSmall03

const BgxBg = styled(Box)`
  background-image: url('bg3-sliderSmall.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 60px;
  position: relative;
  @media (min-width: 568px) {
    padding-bottom: 70px;
  }
`

const HeaderImg = styled.img`
  width: 90%;
`

const BoxWrappArrow = styled(Box)`
  position: absolute;
  width: 22%;
  top: 15%;
  left: 29%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 24%;
    top: 10%;
    left: 25%;
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
    width: 20%;
    top: 10%;
    left: 5%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 40%;
  bottom: 0%;
  left: 52%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 36%;
    bottom: 2%;
    left: 54%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 70%;
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
  position: absolute;
  width: 20%;
  top: 28%;
  left: 8%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 25%;
    left: 5%;
  }
`
