import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const OfferDescription = () => {

  const [container1Height, setContainer1Height] = useState(0);
  const [container2Height, setContainer2Height] = useState(0);
  const [heightOfTheTallerContainer, setHeightOfTheTallerContainer] = useState(0)

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  useEffect(()=>{
    setContainer1Height(container1Ref?.current?.offsetHeight);
    setContainer2Height(container2Ref?.current?.offsetHeight);

  }, [container1Ref, container1Height, container2Ref, container2Height])

  useEffect( () => {
      if (container1Height > container2Height) {
        setHeightOfTheTallerContainer(container1Height)
      } else {
        setHeightOfTheTallerContainer(container2Height)
      }

  }, [container1Ref, container1Height, container2Ref, container2Height])

  return (
    <Box
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
        mt={40}
      >
        <Box
          width={{ _: '350px', tablet: '335px', tabletL: '420px' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'20px 0'}
        >
                 <Box
              ref={container1Ref}
              height={heightOfTheTallerContainer > 0 ? heightOfTheTallerContainer : 'auto'}
          >
            <TitleAndText
                variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }}
                textAlign={'center'}
            >
              Quisque egestas lofem amef
            </TitleAndText>
          </Box>
          <Box
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
                  width={{ _: '350px', tablet: '335px', tabletL: '420px' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'20px 0'}
        >
          <Box
              ref={container2Ref}
              height={heightOfTheTallerContainer > 0 ? heightOfTheTallerContainer : 'auto'}
              >
            <TitleAndText
                variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }}
                textAlign={'center'}
            >
              Nunc vestibulum sodales rhoncus
            </TitleAndText>

          </Box>
          <Box
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
