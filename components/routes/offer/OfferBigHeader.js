import styled from 'styled-components'

import OfferTextPartHeader from './OfferTextPartHeader'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const OfferBigHeader = () => {
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
            <OfferTextPartHeader />
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
                <TitleAndText
                  variant={'textSmall'}
                                 textAlign={'center'}
                               >
                  Morbi
                </TitleAndText>
                <TitleAndText
                  variant={'textSmall'}
                                textAlign={'center'}
                  color={'colorSecondary'}
                >
                  {' '}
                  vitae risus
                </TitleAndText>
              </BoxWrappTextInsideOrnament>
            </BoxWrappOrnament>

            <HeaderImg src={'offer/coupleWithPainting.png'} alt={'photo'} />
          </Box>

          <BoxWrappArrow>
            <ArrowImg src={'arrowTwisting05.png'} alt={'arrow'} />
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
              Aenean
            </TitleAndText>
            <TitleAndText variant={'textSmall'} textAlign={'center'}>
              {' '}
              urna convallis
            </TitleAndText>
          </BoxWrappTxt>
        </Box>
      </BgxBg>
    </Box>
  )
}

export default OfferBigHeader

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
  margin-bottom: 32px;
  margin-left: -20%;
  @media (min-width: 1024px) {
    width: 100%;
    margin-bottom: 36px;
  }
  @media (min-width: 1140px) {
    margin-bottom: 40px;
  }
`

const BoxWrappArrow = styled(Box)`
   position: absolute;
  width: 10%;
  top: 28%;
  left: 50%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 8%;
    top: 23%;
    left: 42%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
    position: absolute;
  width: 14%;
  top: 10%;
  left: 56%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 10%;
    left: 40%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
   position: absolute;
  width: 160px;
  top: -15%;
  right: 0%;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 30px;
    right: 3%;
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
  top: 22%;
  left: 38%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 22%;
  }
`
