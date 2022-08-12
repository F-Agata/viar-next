import styled from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const HomeBig = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'strench'}
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
            width={{ _: '40%', tabletL: '40%', laptopS: '40%' }}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            p={{
              _: '100px 20px 20px 20px',
              tabletL: '100px 20px 20px 20px',
              laptopS: '100px 20px 20px 20px',
            }}
          >
            <TitleAndText
              variant={'title3Uppercase'}
              textAlign={'left'}
              m={'10px 0 20px 0'}
            >
              {' '}
              <TitleAndText as="span" color={'colorSecondary'}>
                Lorem ipsum
              </TitleAndText>{' '}
              dolor sit amet
            </TitleAndText>
            <TitleAndText variant={'textSmallBold'} textAlign={'left'} mb={20}>
              <TitleAndText as="span" color={'colorSecondary'}>
                Donec luctus tortor
              </TitleAndText>{' '}
              consectetur adipiscing elit. Suspendisse massa.{' '}
            </TitleAndText>
            <TitleAndText variant={'textSmallBold'} textAlign={'left'} mb={20}>
              <TitleAndText as="span" color={'colorSecondary'}>
                Mauris vel{' '}
              </TitleAndText>{' '}
              nulla vitae odio
            </TitleAndText>
            <TitleAndText variant={'textSmallBold'} textAlign={'left'} mb={20}>
              <TitleAndText as="span" color={'colorSecondary'}>
                Nunc ac mattis
              </TitleAndText>{' '}
              libero, non rhoncus erat. Sed
            </TitleAndText>
            <Box width={'60%'} p={'0 0px'}>
              <Link href={`/moreInfo`}>
                <Btn variant="orangeDark" m={'20px 0px 40px 0'} width={'100%'}>
                  {' '}
                  More...
                </Btn>
              </Link>
            </Box>
          </Box>

          <Box
            width={{ _: '60%', tabletL: '50%', laptopS: '50%' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'flex-end'}
            p={{
              _: '200px 0px 48px 0px',
              tabletL: '120px 0px 43px 0px',
              laptopS: '120px 0px 45px 0px',
            }}
          >
            <HeaderImg src={'home/womenWithPaintingBig01.png'} alt={'photo'} />
          </Box>

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
                consectetur ac mattist
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

export default HomeBig

const BgxBg = styled(Box)`
  width: 100%;
  background-image: url('bg1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 0px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderImg = styled.img`
  width: 100%;
`

const BoxWrappArrow = styled(Box)`
  position: absolute;
  width: 20%;
  top: 25%;
  left: 40%;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 14%;
    top: 80%;
    left: 25%;
  }
  @media (min-width: 1140px) {
    top: 82%;
    left: 28%;
`

const ArrowImg = styled.img`
  width: 100%;
`

const BoxWrappGift = styled(Box)`
  position: absolute;
  width: 10%;
  top: 13%;
  left: 30%;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 50%;
    left: 40%;
  }
@media (min-width: 1140px) {
   width: 8%;
  `

const GiftImg = styled.img`
  width: 100%;
`

const BoxWrappOrnament = styled(Box)`
  position: absolute;
  width: 20%;
  top: 13%;
  right: -7%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    width: 16%;
    right: 38%;
  }
  @media (min-width: 1140px) {
    width: 15%;
    top: 16%;
    right: -7%;
  }
  @media (min-width: 1366px) {
    top: 14%;
    right: -2%;
  }
`

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 80%;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, 0);
  @media (min-width: 1024px) {
    width: 82%;
    top: 15%;
  }
  @media (min-width: 1140px) {
    width: 70%;
    top: 18%;
  }
`

const OrnamentImg = styled.img`
  width: 100%;
`

const BoxWrappTxt = styled(Box)`
  position: absolute;
  width: 20%;
  top: 15%;
  left: 60%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 1024px) {
    top: 70%;
    left: 40%;
  }
`
