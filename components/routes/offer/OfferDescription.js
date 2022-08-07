import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const OfferDescription = () => {
  return (
    <Box
      // border={'green 2px solid'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={{ _: '0 20px 40px 20px', tablet: '0 40px 40px 40px' }}
    >
      <TitleAndText
        variant={{ _: 'title2Uppercase', tablet: 'title1Uppercase' }}
        maxWidth={768}
        textAlign={'center'}
      >
        Quisque egestas lorem sit amet
      </TitleAndText>

      <Box
        // border={'purple 2px solid'}
        width={'100%'}
        display={'flex'}
        flexDirection={{ _: 'column', tablet: 'row' }}
        flexWrap={'wrap'}
        justifyContent={{
          _: 'center',
          tablet: 'space-evenly',
          tabletL: 'space-evenly',
        }}
        alignItems={{ _: 'center', tablet: 'stretch' }}
        // p={{_: '0',  tabletL: '0px 40px',}}
        mt={40}
      >
        <Box
          // border={'green 2px solid'}
          width={{ _: '350px', tablet: '335px', tabletL: '420px' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'20px 0'}
        >
          <TitleAndText
            variant={{ _: 'title3Uppercase', tablet: 'title4Uppercase' }}
            textAlign={'center'}
          >
            Quisque egestas lorem sit amet
          </TitleAndText>
          <Box
            // border={'crimson 2px solid'}
            position={'relative'}
            width={{ _: '350px', tablet: '335px', tabletL: '420px' }}
            height={{ _: '460px', tablet: '440px', tabletL: '550px' }}
          >
            <BoxGradient />
            <BoxWrappFrame>
              <FrameImg src={'offer/frame.png'} alt={'frame'} />
            </BoxWrappFrame>
            <BoxWrappPicture>
              <PictureImg src={'offer/img01.png'} alt={'picture'} />
            </BoxWrappPicture>
          </Box>
          <Box
            // border={'crimson 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'stretch'}
            flexGrow={1}
            p={'0 20px'}
          >
            <TitleAndText variant={' textSmall'} textAlign={'center'} mb={20}>
              Etiam blandit massa sit amet erat ullamcorper fringilla. Sed
              luctus ornare justo non feugiat. Morbi scelerisque fermentum
              ipsum, eu tincidunt ante venenatis eget. Morbi ut ullamcorper
              felis, sed hendrerit tortor.{' '}
            </TitleAndText>
            <TitleAndText
              variant={'textMiddle'}
              textAlign={'center'}
              color={'colorPrimary'}
              mb={20}
            >
              od
              <TitleAndText
                as="span"
                color={'colorSecondary'}
                variant={'textLarge'}
              >
                {' '}
                30 ${' '}
              </TitleAndText>{' '}
            </TitleAndText>
          </Box>
        </Box>

        <Box
          // border={'green 2px solid'}
          width={{ _: '350px', tablet: '335px', tabletL: '420px' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'20px 0'}
        >
          <TitleAndText
            variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }}
            textAlign={'center'}
          >
            Nunc vestibulum sodales rhoncus
          </TitleAndText>
          <Box
            // border={'crimson 2px solid'}
            position={'relative'}
            width={{ _: '350px', tablet: '335px', tabletL: '420px' }}
            height={{ _: '460px', tablet: '440px', tabletL: '550px' }}
          >
            <BoxGradient />
            <BoxWrappFrame>
              <FrameImg src={'offer/frame.png'} alt={'frame'} />
            </BoxWrappFrame>
            <BoxWrappPicture>
              <PictureImg src={'offer/img02.png'} alt={'picture'} />
            </BoxWrappPicture>
          </Box>
          <Box
            // border={'crimson 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'stretch'}
            flexGrow={1}
            p={'0 20px'}
          >
            <TitleAndText variant={' textSmall'} textAlign={'center'} mb={20}>
              Ut molestie nisi vel convallis varius. Curabitur ipsum leo, luctus
              ut metus eu, varius mattis ex. Nunc id varius lacus, quis congue
              sapien.{' '}
            </TitleAndText>
            <TitleAndText
              variant={'textMiddle'}
              textAlign={'center'}
              color={'colorPrimary'}
              mb={20}
            >
              od
              <TitleAndText
                as="span"
                color={'colorSecondary'}
                variant={'textLarge'}
              >
                {' '}
                30 ${' '}
              </TitleAndText>{' '}
            </TitleAndText>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default OfferDescription

const BoxGradient = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  left: -100px;
  width: 338px;
  height: 365px;
  border-radius: 200px;
  background: rgba(250, 120, 70, 0.29);
  filter: blur(100px);
`

const BoxWrappFrame = styled(Box)`
  //border: lightcoral 2px solid;
  position: absolute;
 width: 280px;
  top: 40px;
  left: 0;
  @media (min-width: 768px) {
    width: 270px;
  }
  @media (min-width: 1024px) {
    width: 340px;
    top: 50px;
`

const FrameImg = styled.img`
  width: 100%;
`

const BoxWrappPicture = styled(Box)`
  //border: lightseagreen 2px solid;
  position: absolute;
  width: 350px;
  left: 10px;
  @media (min-width: 768px) {
    width: 335px;
    
  }
  @media (min-width: 1024px) {
    width: 420px;
    left: 20px;
   
`

const PictureImg = styled.img`
  width: 100%;
`
