import styled from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const HomeSmall = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'strench'}
    >
      <BgxBg>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <HeaderImg src={'home/womenWithPaintingBig01.png'} alt={'photo'} />
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
              consectetur ac mattist
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
            Lorem ipsum
          </TitleAndText>
          <TitleAndText variant={'textSmall'} textAlign={'center'}>
            {' '}
            consectetur adipiscing elit
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
        <TitleAndText
          variant={'title3Uppercase'}
          textAlign={'center'}
          m={'100px 0 20px 0'}
        >
          {' '}
          <TitleAndText as="span" color={'colorSecondary'}>
            Lorem ipsum
          </TitleAndText>{' '}
          dolor sit amet
        </TitleAndText>
        <TitleAndText variant={'textSmallBold'} textAlign={'center'} mb={20}>
          <TitleAndText as="span" color={'colorSecondary'}>
            Donec luctus tortor
          </TitleAndText>{' '}
          consectetur adipiscing elit. Suspendisse massa.
        </TitleAndText>
        <TitleAndText variant={'textSmallBold'} textAlign={'center'} mb={20}>
          <TitleAndText as="span" color={'colorSecondary'}>
            Mauris vel{' '}
          </TitleAndText>{' '}
          nulla vitae odio
        </TitleAndText>
        <TitleAndText variant={'textSmallBold'} textAlign={'center'} mb={20}>
          <TitleAndText as="span" color={'colorSecondary'}>
            Nunc ac mattis
          </TitleAndText>{' '}
          libero, non rhoncus erat. Sed
        </TitleAndText>
        <Box width={'100%'} p={'0 20px'}>
          <Link href={`/moreInfo`}>
            <Btn variant="orangeDark" m={'40px 0'} width={'100%'}>
              {' '}
              More...
            </Btn>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSmall

const BgxBg = styled(Box)`
  background-image: url('bg2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 200px;
  padding-bottom: 30px;
  position: relative;
`

const HeaderImg = styled.img`
  width: 80%;
`

const BoxWrappArrow = styled(Box)`
  //border: yellow 2px solid;
  position: absolute;
  width: 20%;
  top: 30%;
  left: 28%;
  z-index: 2;
  @media (min-width: 568px) {
    top: 24%;
    left: 30%;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 20%;
  top: 18%;
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
  width: 40%;
  bottom: -15%;
  left: 52%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 34%;
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
  width: 40%;
  top: 35%;
  left: 24%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 42%;
    top: 30%;
  }
`
