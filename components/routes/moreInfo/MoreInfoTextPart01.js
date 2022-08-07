import styled, { css } from 'styled-components';

import Box from '../../../styles/Box';
import Btn from '../../../styles/Btn';
import Link from '../../../styles/Link';
import TitleAndText from '../../../styles/TitleAndText';

const MoreInfoTextPart01 = () => (

            <Box
                // border={'pink 2px solid'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'left'}
                p={{ _: '20px 20px', mobileL: '0px 20px' }}

            >
                <TitleAndText variant={'title3Uppercase'} textAlign={{ _: 'center', tablet: 'left' }}color={'colorSecondary'} mb={20}> <TitleAndText as="span" color={'colorPrimary'}>Slide01 Aenean vehicula  </TitleAndText> nibh porttitor</TitleAndText>

                <Box
                    // border={'orange 2px solid'}
                    display={'flex'}
                     justifyContent={'left'}
                     alignItems={'center'}
                    mb={20}
                >
                    <Box
                        // border={'red 2px solid'}
                        width={{ _: '25px', tablet: '30px' }}
                        height={{ _: '25px', tablet: '30px' }}
                        mr={10}
                    >
                        <StyledImg src={'painter.png'} alt={'icon'} />
                    </Box>
                    <TitleAndText variant={'textSmallBold'} textAlign={'left'} >
                        <TitleAndText as="span" color={'colorSecondary'}>Quisque sodales </TitleAndText>
                        eget interdum lorem tempus quis.
                    </TitleAndText>
                </Box>

                <Box
                    // border={'orange 2px solid'}
                    display={'flex'}
                    justifyContent={'left'}
                    alignItems={'center'}
                    mb={20}
                >
                    <Box
                        // border={'red 2px solid'}
                        width={{ _: '25px', tablet: '30px' }}
                           height={{ _: '25px', tablet: '30px' }}
                           mr={10}
                    >
                        <StyledImg src={'painter.png'} alt={'icon'} />
                    </Box>

                    <TitleAndText variant={'textSmallBold'} textAlign={'left'} color={'colorSecondary'}>
                            <TitleAndText as="span" color={'colorPrimary'}>Pellentesque aliquam tempor ipsum, ac varius ante ultrices et justo </TitleAndText>
                           accumsan rhoncus justo.
                    </TitleAndText>
                </Box>

                <Box
                    // border={'orange 2px solid'}
                    display={'flex'}
                    justifyContent={'left'}
                    alignItems={'center'}
                    mb={20}
                >
                    <Box
                        // border={'red 2px solid'}
                        width={{ _: '25px', tablet: '30px' }}
                           height={{ _: '25px', tablet: '30px' }}
                           mr={10}
                    >
                        <StyledImg src={'painter.png'} alt={'icon'} />
                    </Box>
                    <TitleAndText variant={'textSmallBold'} textAlign={'left'} color={'colorSecondary'}>
                        <TitleAndText as="span" color={'colorPrimary'}> Cras in hendrerit convallis tellus lectus a orci enim pulvinar rutrum vulputate sagittis felis convallis quis </TitleAndText>
                        eget ante egestas
                    </TitleAndText>
                </Box>
                <Box
                    // border={'yellow 2px solid'}
                    width={{ _: '100%', tablet: '70%' }}
                    p={'0 20px'}>
                    <Link href={'/portfolio'}>
                        <Btn variant="orangeDark" m={'40px 0'} width={'100%'}> Portfolio</Btn>
                    </Link>
                </Box>
            </Box>

);

export default MoreInfoTextPart01;

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
 `;
