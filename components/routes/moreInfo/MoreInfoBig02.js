import styled from 'styled-components'

import MoreInfoTextPart02 from './MoreInfoTextPart02'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const MoreInfoBig02 = ({getWidth}) => {
  return (
    <Box
        width={getWidth }
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
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
          pt={{ _: '0', tablet: '20px' }}
        >
          <Box
            width={{ _: '47%', tabletL: '45%', laptopS: '45%' }}
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
            <MoreInfoTextPart02 />
          </Box>

          <Box
            width={{ _: '50%', tabletL: '43%', laptopS: '43%' }}
            position={'relative'}
                       alignSelf={'flex-end'}
            display={'flex'}
            justifyContent={'center'}
            mt={120}
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

            <HeaderImg src={'moreInfo/windowAndBarbie.png'} alt={'photo'} />
          </Box>

          <BoxWrappArrow1>
            <ArrowImg1 src={'arrowTwisting02.png'} alt={'arrow'} />
          </BoxWrappArrow1>

          <BoxWrappArrow2>
            <ArrowImg2 src={'arrowTwisting05.png'} alt={'arrow'} />
          </BoxWrappArrow2>

          <BoxWrappArrow3>
            <ArrowImg3 src={'arrowTwisting03.png'} alt={'arrow'} />
          </BoxWrappArrow3>

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

          <BoxWrappPhoto>
            <PhotoImg src={'/moreInfo/photo1.png'} alt={'photo'} />
          </BoxWrappPhoto>
        </Box>
      </BgxBg>
    </Box>
  )
}

export default MoreInfoBig02

const BgxBg = styled(Box)`
  width: 100%;
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
   width: 440px;
  margin-left: -30px;

  @media (min-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
`

const BoxWrappArrow1 = styled(Box)`
  position: absolute;
  width: 14%;
  bottom: 14%;
  left: 28%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 16%;
    bottom: 18%;
    left: 30%;
  }
  @media (min-width: 1140px) {
    width: 13%;
    bottom: 22%;
    left: 32%;
  }
  @media (min-width: 1366px) {
    width: 12%;
    left: 33%;
  }
`

const ArrowImg1 = styled.img`
  width: 100%;
`

const BoxWrappArrow2 = styled(Box)`
  position: absolute;
  width: 9%;
  top: 30%;
  left: 39%;
  z-index: 2;
  @media (min-width: 1024px) {
    display: none;
  }
`

const ArrowImg2 = styled.img`
  width: 100%;
`

const BoxWrappArrow3 = styled(Box)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    width: 10%;
    top: 46%;
    left: 48%;
    z-index: 2;
  }
  @media (min-width: 1140px) {
    width: 8%;
    left: 49%;
  }
`

const ArrowImg3 = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 14%;
  bottom: 26%;
  left: 40%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    bottom: 32%;
    left: 42%;
  }
@media (min-width: 1140px) {
  width: 8%;
  bottom: 34%;
  `

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 160px;
  top: -70px;
  left: 30%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 160px;
    top: -50px;
    left: 0%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 80%;
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
  position: absolute;
  width: 16%;
  bottom: 22%;
  left: 28%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 22%;
    bottom: 26%;
    left: 34%;
  }
  @media (min-width: 1140px) {
    bottom: 28%;
  }
`

const BoxWrappPhoto = styled(Box)`
  position: absolute;
  width: 120px;
  top: 12%;
  left: 40%;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 24%;
    left: 42%;
  }
`

const PhotoImg = styled.img`
  width: 100%;
`
