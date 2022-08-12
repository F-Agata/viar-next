import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import ContactTextPartHeader from './ContactTextPartHeader'

const ContactSmallHeader = () => {
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
          <HeaderImg src={'contact/womentWithPainting4.png'} alt={'photo'} />
        </Box>

        <BoxWrappOrnament>
          <OrnamentImg src={' ornament.png'} alt={'photo'} />
          <BoxWrappTextInsideOrnament>
            <TitleAndText variant={'textSmall'} textAlign={'center'}>
              Nam efficit{' '}
            </TitleAndText>
            <TitleAndText
              variant={'textSmall'}
              textAlign={'center'}
              color={'colorSecondary'}
            >
              {' '}
              faucibus{' '}
            </TitleAndText>
          </BoxWrappTextInsideOrnament>
        </BoxWrappOrnament>
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
        <ContactTextPartHeader />
      </Box>
    </Box>
  )
}

export default ContactSmallHeader

const BgxBg = styled(Box)`
  background-image: url('bg3-sliderSmall.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 70px;
  padding-bottom: 130px;
  position: relative;
  @media (min-width: 568px) {
    padding-bottom: 150px;
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
  position: absolute;
  width: 18%;
  top: 26%;
  left: 18%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 20%;
    top: 22%;
    left: 20%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 20%;
  top: 13%;
  left: 5%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 10%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 36%;
  bottom: 5%;
  left: 50%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 30%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 82%;
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, 0);
`

const OrnamentImg = styled.img`
  width: 100%;
`

const BoxWrappTxt = styled(Box)`
  position: absolute;
  width: 40%;
  top: 18%;
  left: 24%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 15%;
  }
`
