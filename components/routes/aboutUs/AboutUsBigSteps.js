import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import AboutUsTitleAndWatchPart from './AboutUsTitleAndWatchPart';
import BoxStepNumber from './BoxStepNumber';
import ButtonLargeAndLuminous from './ButtonLargeAndLuminous';

import Box from '../../../styles/Box';
import TitleAndText from '../../../styles/TitleAndText';

const AboutUsBigSteps = () => {
  const addOrnamentAndArrows = useMediaQuery({ query: '(min-width: 1024px)' });

  return (

        <Box
            // border={'pink 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={ '60px 20px'}
            bg={'colorPrimary'}
            position={'relative'}

        >
            <AboutUsTitleAndWatchPart/>

            <Box
                // border={'yellow 2px solid'}
                display={'flex'}
                flexWrap={'wrap'}
                justifyContent={'space-evenly'}
                alignItems={'strench'}
                >

            <Box
                // border={'blue 2px solid'}
                width={'247px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                p={'20px 0px '}
                mb={40}
            >

                <Box
                    width={199}
                    height={'100%'}
                    border={' 1px solid'}
                    borderColor={'colorSecondary'}
                    borderRadius={8}
                    position={'absolute'}
                    top={0}
                   left={'24px'}
                />

                <Box
                    // border={'green 2px solid'}
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={8}
                    alignSelf={'flex-start'}
                >
                    <StyledImg src={'aboutUs/step1.png'} alt={'icon'} />
                    <BoxStepNumber>1</BoxStepNumber>
                </Box>

                <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                    Morbi
                </TitleAndText>

                <TitleAndText variant={'textSmall'} textAlign={'left'} color={'colorWhite'} textAlign={'Center'}>
                    Praesent nec diam posuere
                    <TitleAndText as="span" color={'colorSecondary'}>  molestie pulvinar leo.  </TitleAndText>
                    Justo eu scelerisque  iaculis congue
                </TitleAndText>
            </Box>

                <Box
                    // border={'blue 2px solid'}
                    width={'247px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    p={'20px 0px '}
                    mb={40}
                >

                    <Box
                        width={199}
                        height={'100%'}
                        border={' 1px solid'}
                        borderColor={'colorSecondary'}
                        borderRadius={8}
                        position={'absolute'}
                        top={0}
                        left={'24px'}
                    />

                    <Box
                        // border={'green 2px solid'}
                        position={'relative'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={8}
                        alignSelf={'flex-start'}
                    >
                        <StyledImg src={'aboutUs/step2.png'} alt={'icon'} />
                        <BoxStepNumber>2</BoxStepNumber>
                    </Box>

                    <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                        Cras non
                    </TitleAndText>

                    <TitleAndText variant={'textSmall'} textAlign={'left'} color={'colorWhite'} textAlign={'Center'}>
                        Suspendisse sit
                        <TitleAndText as="span" color={'colorSecondary'}>  amet consectetur  aliquet odio a cursus </TitleAndText>
                        vitae erat ut elit congue congue
                    </TitleAndText>
                </Box>

                <Box
                    // border={'blue 2px solid'}
                    width={'247px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    p={'20px 0px '}
                    mb={40}
                >

                    <Box
                        width={199}
                        height={'100%'}
                        border={' 1px solid'}
                        borderColor={'colorSecondary'}
                        borderRadius={8}
                        position={'absolute'}
                        top={0}
                        left={'24px'}
                    />

                    <Box
                        // border={'green 2px solid'}
                        position={'relative'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={8}
                        alignSelf={'flex-start'}
                    >
                        <StyledImg src={'aboutUs/step3.png'} alt={'icon'} />
                        <BoxStepNumber>3</BoxStepNumber>
                    </Box>

                    <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                        Curabitur
                    </TitleAndText>

                    <TitleAndText variant={'textSmall'} textAlign={'left'} color={'colorWhite'} textAlign={'Center'}>
                        Nullam maximus facilisis nulla
                        <TitleAndText as="span" color={'colorSecondary'}>  elementum vel magna nec,   </TitleAndText>
                        bibendum iaculis tellus
                    </TitleAndText>
                </Box>

                <Box
                    // border={'blue 2px solid'}
                    width={'247px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    p={'20px 0px '}
                    mb={40}
                >

                    <Box
                        width={199}
                        height={'100%'}
                        border={' 1px solid'}
                        borderColor={'colorSecondary'}
                        borderRadius={8}
                        position={'absolute'}
                        top={0}
                        left={'24px'}
                    />

                    <Box
                        // border={'green 2px solid'}
                        position={'relative'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={8}
                        alignSelf={'flex-start'}
                    >
                        <StyledImg src={'aboutUs/step4.png'} alt={'icon'} />
                        <BoxStepNumber>4</BoxStepNumber>
                    </Box>

                    <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                        Integer lobortis
                    </TitleAndText>

                    <TitleAndText variant={'textSmall'} textAlign={'left'} color={'colorWhite'} textAlign={'Center'}>
                        Quisque mollis lectus ut sapien accumsan,
                        <TitleAndText as="span" color={'colorSecondary'}>  Quisque mollis lectus ut sapien accumsan,   </TitleAndText>
                        vitae neque turpis
                    </TitleAndText>
                </Box>

                <Box
                    // border={'blue 2px solid'}
                    width={'247px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    p={'20px 0px '}
                    mb={40}
                >

                    <Box
                        width={199}
                        height={'100%'}
                        border={' 1px solid'}
                        borderColor={'colorSecondary'}
                        borderRadius={8}
                        position={'absolute'}
                        top={0}
                        left={'24px'}
                    />

                    <Box
                        // border={'green 2px solid'}
                        position={'relative'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={8}
                        alignSelf={'flex-start'}
                    >
                        <StyledImg src={'aboutUs/step5.png'} alt={'icon'} />
                        <BoxStepNumber>5</BoxStepNumber>
                    </Box>

                    <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                        Orci varius
                    </TitleAndText>

                    <TitleAndText variant={'textSmall'} textAlign={'left'} color={'colorWhite'} textAlign={'Center'}>
                        Sed vel magna sit amet risus porta congue nec ac augue
                        <TitleAndText as="span" color={'colorSecondary'}>  ultricies pulvinar  </TitleAndText>
                        eget tempor est sapien a massa
                    </TitleAndText>
                </Box>

            </Box>

            <ButtonLargeAndLuminous/>

            {addOrnamentAndArrows
            && <BoxWrappArrow1>
                <ArrowImg1 src={'arrowTwisting05.png'} alt={'arrow'} />
            </BoxWrappArrow1>
            }

            {addOrnamentAndArrows
            && <BoxWrappArrow2>
                <ArrowImg2 src={'arrowTwisting09.png'} alt={'arrow'} />
            </BoxWrappArrow2>
            }

            {addOrnamentAndArrows
            && <BoxWrappOrnament>
                <OrnamentImg src={' ornament.png'} alt={'photo'} />
                <BoxWrappTextInsideOrnament>

                    <TitleAndText
                        variant={'textSmall'}
                        // variant={{_: 'textSmallVery', tabletL: 'textSmall', }}
                        textAlign={'center'}
                        // pb={{_: '0', mobileL: '10px', }}
                    >Lorem ipsum</TitleAndText>
                    <TitleAndText
                        variant={'textSmall'}
                        // variant={{_: 'textSmallVery', tabletL: 'textSmall', }}
                        textAlign={'center'} color={'colorSecondary'}> cons ac mattist</TitleAndText>
                </BoxWrappTextInsideOrnament>
            </BoxWrappOrnament>
            }
        </Box>

  );
};

export default AboutUsBigSteps;

const StyledImg = styled.img`
  border-radius: 8px;
  width: 180px;
  height: 145px;
`;

const BoxWrappArrow1 = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 14%;
  top: 80%;
  left: 10%;
  z-index: 2;
  @media (min-width: 1140px) {  
    top: 72%;
    left: 14%;
  }
    @media (min-width: 1366px) {
      width: 10%;
      top: 70%;
      left: 21%;
    }
`;

const ArrowImg1 = styled.img`
width: 100%
`;

const BoxWrappArrow2 = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 10%;
  top: 11%;
  left: 75%;
  z-index: 2;
  @media (min-width: 1140px) {
    width: 8%;
    top: 12%;
    left: 75%;
  }
    @media (min-width: 1366px) {
      width: 6%;
      top: 14%;
      left: 70%;
    }
`;

const ArrowImg2 = styled.img`
width: 100%
`;

const BoxWrappOrnament = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 160px;
  top: 4%;
  right: 2%;
  z-index: 2;
  
  @media (min-width: 1140px) {
    width: 14%;
    top: 4%;
    right: 4%;
  }
  @media (min-width: 1366px) {
    width: 12%;
    top: 6%;
    right: 12%;
  }
    `;

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 82%;
  //border: yellow 2px solid;
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const OrnamentImg = styled.img`
  width: 100%
`;
