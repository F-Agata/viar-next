import styled from 'styled-components'

import MoreInfoTextPart03 from './MoreInfoTextPart03'

import Box from '../../../styles/Box'

import TitleAndText from '../../../styles/TitleAndText'

const MoreInfoBig03 = ({ getWidth }) => {
  return (
    <Box
      width={getWidth}
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
            width={{ _: '50%', tabletL: '45%', laptopS: '45%' }}
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
            <MoreInfoTextPart03 />
          </Box>

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

            <HeaderImg
              src={'moreInfo/womenWithSelfPortrait.png'}
              alt={'photo'}
            />
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

export default MoreInfoBig03

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
  margin-left: -30px;
  margin-bottom: -48px;

  @media (min-width: 1024px) {
    width: 100%;
    margin-left: 50px;
    margin-bottom: -64px;
  }
  @media (min-width: 1140px) {
    margin-left: 50px;
    margin-bottom: -72px;
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
