import styled from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const OfferLaughingManSmall = () => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={{ _: 'column', tablet: 'row' }}
      flexWrap={'wrap'}
      justifyContent={{ _: 'center', tablet: 'space-between' }}
      alignItems={{ _: 'center', tablet: 'center' }}
    >
      <Box
        width={{ _: '100%', mobileL: '70%', tablet: '40%', tabletL: '40%' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={{ _: 'center', tablet: 'flex-start' }}
        alignItems={{ _: 'center', tablet: 'flex-start' }}
        p={{
          _: '40px 20px 80px 20px',
          tablet: '40px 0px 40px 40px',
          tabletL: '40px 0px 40px 100px',
        }}
        position={'relative'}
      >
        <TitleAndText
          variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }}
          textAlign={{ _: 'center', tablet: 'left' }}
          color={'colorPrimary'}
        >
          Ut molestie nisi -{' '}
        </TitleAndText>
        <TitleAndText
          mb={40}
          variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }}
          textAlign={{ _: 'center', tablet: 'left' }}
          color={'colorSecondary'}
        >
          per inceptos!{' '}
        </TitleAndText>

        <TitleAndText
          mb={40}
          variant={{ _: 'textMiddle', tablet: 'textLarge' }}
          textAlign={{ _: 'center', tablet: 'left' }}
          color={'colorPrimary'}
        >
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
          <TitleAndText as="span" color={'colorSecondary'}>
            {' '}
            Nam eu facilisis eros, at eleifend nisi.{' '}
          </TitleAndText>
        </TitleAndText>

        <Box width={{ _: '80%', tablet: '60%' }}>
          <Link href={`/contact`}>
            <Btn variant="orangeDark" m={'20px 0px 40px 0'} width={'100%'}>
              {' '}
              Contact / FAQ
            </Btn>
          </Link>
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
            Etiam ac{' '}
          </TitleAndText>
          <TitleAndText variant={'textSmall'} textAlign={'center'}>
            {' '}
            convallis massa
          </TitleAndText>
        </BoxWrappTxt>
      </Box>

      <Box
        width={{ _: '100%', mobileL: '70%', tablet: '60%' }}
        alignSelf={'flex-end'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'flex-end'}
        position={'relative'}
      >
        <BoxGradient />
        <StyledImg src={'offer/laughingMan.png'} alt={'photo'} />
      </Box>
    </Box>
  )
}

export default OfferLaughingManSmall

const BoxGradient = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 240px;
  height: 240px;
  border-radius: 200px;
  background: rgba(250, 120, 70, 0.8);
  filter: blur(100px);
  z-index: 2;
  @media (min-width: 768px) {
    width: 338px;
    height: 365px;
  }
`

const StyledImg = styled.img`
  z-index: 3;
  width: 150%;
  margin-right: -70px;
  @media (min-width: 568px) {
    margin-right: 0px;
  }
`

const BoxWrappArrow = styled(Box)`
  position: absolute;
  width: 22%;
  bottom: 5%;
  left: 14%;
  z-index: 2;
  @media (min-width: 568px) {
    left: 10%;
  }
  @media (min-width: 768px) {
    bottom: 76%;
    left: 100%;
  }
  @media (min-width: 1024px) {
    width: 26%;
    bottom: 3%;
    left: 46%;
  }
  @media (min-width: 1140px) {
    bottom: 2%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 18%;
  bottom: 3%;
  left: 38%;
  z-index: 2;
  @media (min-width: 568px) {
    left: 34%;
  }
  @media (min-width: 768px) {
    bottom: 82%;
    left: 100%;
  }
  @media (min-width: 1024px) {
    bottom: 6%;
    left: 76%;
  }
`

const GiftImg = styled.img`
  width: 100%;
`
const BoxWrappTxt = styled(Box)`
    position: absolute;
  width: 40%;
  bottom: 4%;
  left: 50%;
  z-index: 2;
  @media (min-width: 768px) {
    width: 30%;
    bottom: 64%;
    left: 96%;
  }
  @media (min-width: 1024px) {
    width: 40%;
    bottom: -4%;
    left: 60%;
  }
 
  }
`
