import styled, { css } from 'styled-components';

import Box from '../../../styles/Box';
import Btn from '../../../styles/Btn';
import Link from '../../../styles/Link';
import TitleAndText from '../../../styles/TitleAndText';

const AboutUsTextPartHeader = () => (

        <Box
            // border={'pink 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'left'}
            p={{ _: '00px 20px', mobileL: '0px 40px' }}

        >
            <TitleAndText variant={'title3Uppercase'} textAlign={{ _: 'center', tablet: 'left' }}color={'colorSecondary'} mb={20}> <TitleAndText as="span" color={'colorPrimary'}>Vulputate </TitleAndText> eget arcu </TitleAndText>

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
                    <TitleAndText as="span" color={'colorSecondary'}>Nullam ex purus, placerat </TitleAndText>
                    cefficitur tempor blandit justo eu scelerisque nulla id velit iaculis congue
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
                <TitleAndText variant={'textSmallBold'} textAlign={'left'} >
                    <TitleAndText as="span" color={'colorSecondary'}>Nullam placerat,  </TitleAndText>
                    Ligula felis, facilisis faucibus augue eget, luctus venenatis turpis.
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
                    <TitleAndText as="span" color={'colorPrimary'}>Quisque sodales sagittis </TitleAndText>
                    ornare posuere bibendum.
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
                    <TitleAndText as="span" color={'colorPrimary'}>  Nullam ex purus, placerat vel lacus ac, suscipit imperdiet lectus. </TitleAndText>
                    Sed imperdiet orci a luctus
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

export default AboutUsTextPartHeader;

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;

  }
 `;
