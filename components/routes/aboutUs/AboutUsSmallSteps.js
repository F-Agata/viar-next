import styled, { css } from 'styled-components';

import AboutUsTitleAndWatchPart from './AboutUsTitleAndWatchPart';
import BoxStepNumber from './BoxStepNumber';
import ButtonLargeAndLuminous from './ButtonLargeAndLuminous';

import Box from '../../../styles/Box';
import TitleAndText from '../../../styles/TitleAndText';

const AboutUsSmallSteps = () => (

        <Box
            // border={'pink 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={{ _: '60px 20px', mobileL: '60px 40px' }}
            bg={'colorPrimary'}

        >
            <AboutUsTitleAndWatchPart/>

            <Box
                // border={'blue 2px solid'}
                width={'330px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                p={'20px 20px 20px 20px'}
                mb={40}
            >

                <Box
                    width={199}
                    height={252}
                    border={' 1px solid'}
                    borderColor={'colorSecondary'}
                    borderRadius={8}
                    position={'absolute'}
                    top={0}
                    right={0}
                />

                    <Box
                        // border={'green 2px solid'}
                        position={'relative'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={8}
                        owerflow={'hidden'}
                    >
                        <StyledImg src={'aboutUs/step1.png'} alt={'icon'} />
                       <BoxStepNumber>1</BoxStepNumber>
                    </Box>

                    <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                        Morbi
                    </TitleAndText>

                    <TitleAndText variant={'textSmall'} color={'colorWhite'} textAlign={'Center'}>
                         Praesent nec diam posuere
                        <TitleAndText as="span" color={'colorSecondary'}>  molestie pulvinar leo.  </TitleAndText>
                        Justo eu scelerisque  iaculis congue
                    </TitleAndText>
            </Box>

            <Box
                // border={'blue 2px solid'}
                width={'330px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                p={'20px 20px 20px 20px'}
                mb={40}
            >

                <Box
                    width={199}
                    height={252}
                    border={' 1px solid'}
                    borderColor={'colorSecondary'}
                    borderRadius={8}
                    position={'absolute'}
                    top={0}
                    left={0}
                />

                <Box
                    // border={'green 2px solid'}
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={8}
                    owerflow={'hidden'}
                >
                    <StyledImg src={'aboutUs/step2.png'} alt={'icon'} />
                    <BoxStepNumber>2</BoxStepNumber>
                </Box>

                <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                    Cras non
                </TitleAndText>

                <TitleAndText variant={'textSmall'} color={'colorWhite'} textAlign={'Center'}>
                    Suspendisse sit
                    <TitleAndText as="span" color={'colorSecondary'}>  amet consectetur  aliquet odio a cursus </TitleAndText>
                    vitae erat ut elit congue congue
                </TitleAndText>
            </Box>

            <Box
                // border={'blue 2px solid'}
                width={'330px'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                p={'20px 20px 20px 20px'}
                mb={40}
            >

                <Box
                    width={199}
                    height={252}
                    border={' 1px solid'}
                    borderColor={'colorSecondary'}
                    borderRadius={8}
                    position={'absolute'}
                    top={0}
                    right={0}
                />

                <Box
                    // border={'green 2px solid'}
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={8}
                    owerflow={'hidden'}
                >
                    <StyledImg src={'aboutUs/step3.png'} alt={'icon'} />
                    <BoxStepNumber>3</BoxStepNumber>
                </Box>

                <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                    Curabitur
                </TitleAndText>

                <TitleAndText variant={'textSmall'} color={'colorWhite'} textAlign={'Center'}>
                    Nullam maximus facilisis nulla
                    <TitleAndText as="span" color={'colorSecondary'}>  elementum vel magna nec,   </TitleAndText>
                    bibendum iaculis tellus
                </TitleAndText>
            </Box>

            <Box
                // border={'blue 2px solid'}
                width={330}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                p={'20px 20px 20px 20px'}
                mb={40}
            >

                <Box
                    width={199}
                    height={252}
                    border={' 1px solid'}
                    borderColor={'colorSecondary'}
                    borderRadius={8}
                    position={'absolute'}
                    top={0}
                    left={0}
                />

                <Box
                    // border={'green 2px solid'}
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={8}
                    owerflow={'hidden'}
                >
                    <StyledImg src={'aboutUs/step4.png'} alt={'icon'} />
                    <BoxStepNumber>4</BoxStepNumber>
                </Box>

                <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                    Integer lobortis
                </TitleAndText>

                <TitleAndText variant={'textSmall'} color={'colorWhite'} textAlign={'Center'}>
                    Quisque mollis lectus ut sapien accumsan,
                    <TitleAndText as="span" color={'colorSecondary'}>  Quisque mollis lectus ut sapien accumsan,   </TitleAndText>
                    vitae neque turpis
                </TitleAndText>
            </Box>

            <Box
                // border={'blue 2px solid'}
                width={330}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                p={'20px 20px 20px 20px'}
                mb={40}
            >

                <Box
                    width={199}
                    height={252}
                    border={' 1px solid'}
                    borderColor={'colorSecondary'}
                    borderRadius={8}
                    position={'absolute'}
                    top={0}
                    right={0}
                />

                <Box
                    // border={'green 2px solid'}
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={8}
                    owerflow={'hidden'}
                >
                    <StyledImg src={'aboutUs/step5.png'} alt={'icon'} />
                    <BoxStepNumber>5</BoxStepNumber>
                </Box>

                <TitleAndText variant={{ _: 'textSmallBold' }} color={'colorSecondary'} textAlign={'Center'} m={'10px 0'}>
                    Orci varius
                </TitleAndText>

                <TitleAndText variant={'textSmall'} color={'colorWhite'} textAlign={'Center'}>
                    Sed vel magna sit amet risus porta congue nec ac augue
                    <TitleAndText as="span" color={'colorSecondary'}>  ultricies pulvinar  </TitleAndText>
                    eget tempor est sapien a massa
                </TitleAndText>
            </Box>

                <ButtonLargeAndLuminous/>

        </Box>
);

export default AboutUsSmallSteps;

const StyledImg = styled.img`
  border-radius: 8px;
  width: 184px;
  height: 130px;
 `;
