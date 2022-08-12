import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const OfferLaughingManBig = () => {
  return (
    <Box
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
          pt={{ _: '0', tablet: '20px' }}
        >
          <Box
            width={{ _: '50%', tabletL: '60%', laptopS: '60%' }}
            position={'relative'}
            alignSelf={'flex-end'}
            display={'flex'}
            justifyContent={'center'}
            mt={50}
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
}

export default OfferLaughingManBig

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
  width: 460px;
  margin-bottom: 30px;
  @media (min-width: 1024px) {
    width: 100%;
    margin-bottom: 32px;
  }
`

const BoxWrappArrow = styled(Box)`
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
    top: 74%;
    left: 32%;
  }
  @media (min-width: 1366px) {
    width: 12%;
    left: 33%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 14%;
  top: 12%;
  left: 44%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    top: 55%;
    left: 40%;
  }
  @media (min-width: 1140px) {
    top: 50%;
  }
  @media (min-width: 1366px) {
    width: 8%;
    left: 42%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 160px;
  top: 10px;
  right: 0%;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 60px;
    right: 0%;
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
