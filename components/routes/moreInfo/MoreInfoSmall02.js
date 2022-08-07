import styled, { css } from 'styled-components';

import Box from '../../../styles/Box';
import Btn from '../../../styles/Btn';
import Link from '../../../styles/Link';
import TitleAndText from '../../../styles/TitleAndText';

import MoreInfoTextPart02 from './MoreInfoTextPart02';

const MoreInfoSmall02 = () => (
        <Box
            // border={'green 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'strench'}
            width={typeof window !== 'undefined' ? `${window.innerWidth}px` : '100%'}
        >
            <BgxBg>
                <Box
                    // border={'green 2px solid'}
                    display={'flex'}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                    width={'100%'}
                >
                    <HeaderImg src={'moreInfo/windowAndBarbie.png'} alt={'photo'} />
                </Box>

                <BoxWrappOrnament>
                    <OrnamentImg src={' ornament.png'} alt={'photo'} />
                    <BoxWrappTextInsideOrnament>

                        <TitleAndText
                            variant={'textSmall'}
                            textAlign={'center'}
                        >Cras in</TitleAndText>
                        <TitleAndText
                            variant={'textSmall'}
                            textAlign={'center'} color={'colorSecondary'}>  hendrerit enim</TitleAndText>
                    </BoxWrappTextInsideOrnament>
                </BoxWrappOrnament>

                <BoxWrappArrow1>
                    <ArrowImg1 src={'arrowTwisting01.png'} alt={'arrow'} />
                </BoxWrappArrow1>

                <BoxWrappArrow2>
                    <ArrowImg2 src={'arrowTwisting07.png'} alt={'arrow'} />
                </BoxWrappArrow2>

                <BoxWrappGift>
                    <GiftImg src={'gift.png'} alt={'gift'} />
                </BoxWrappGift>

                <BoxWrappTxt>
                    <TitleAndText
                        variant={'textSmall'}
                        // variant={{_: 'textSmallVery', mobileL: 'textSmall', }}
                        textAlign={'center'}color={'colorSecondary'}>Mauris non</TitleAndText>
                    <TitleAndText
                        variant={'textSmall'}
                        // variant={{_: 'textSmallVery', mobileL: 'textSmall', }}
                        textAlign={'center'}>  erat vehicula maximus</TitleAndText>
                </BoxWrappTxt>

                <BoxWrappPhoto>
                    <PhotoImg src={'/moreInfo/photo1.png'} alt={'photo'} />
                </BoxWrappPhoto>

            </BgxBg>

            <Box
                // border={'pink 2px solid'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                p={{ _: '0px 20px', mobileL: '0px 40px' }}
            >
                <MoreInfoTextPart02/>
            </Box>

        </Box>
);

export default MoreInfoSmall02;

const BgxBg = styled(Box)`
    //border: 2px burlywood solid;
  background-image: url('bg3-sliderSmall.png');
  background-repeat: no-repeat;
   background-size: cover;
  background-position: center;
  padding-top: 160px;
  padding-bottom: 90px;
  position: relative;
  @media (min-width: 568px) {
    padding-bottom: 100px;
  }
  
`;

const HeaderImg = styled.img`
   //border: 2px solid blueviolet;
width: 75%;
`;

const BoxWrappArrow1 = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 24%;
  top: 16%;
  left: 65%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 20%;
    top: 12%;
    left: 60%;
  }
`;

const ArrowImg1 = styled.img`
width: 100%
`;

const BoxWrappArrow2 = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 15%;
  top: 38%;
  left: 14%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 18%;
    top: 38%;
    left: 12%;
  }
`;

const ArrowImg2 = styled.img`
width: 100%
`;

const BoxWrappGift = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 20%;
  top: 8%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 15%;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const GiftImg = styled.img`
  width: 100%
`;

const BoxWrappOrnament = styled(Box)`
  // border: yellow 2px solid;
  position: absolute;
  width: 40%;
  bottom: 0%;
  left: 52%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 34%;
  }
  `;

const BoxWrappTextInsideOrnament = styled(Box)`
  width: 80%;
  //border: yellow 2px solid;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  @media (min-width: 568px) {
    top: 18%;
      }
`;

const OrnamentImg = styled.img`
  width: 100%
`;

const BoxWrappTxt = styled(Box)`
   // border: yellow 2px solid;
  position: absolute;
  width: 40%;
 top: 22%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  @media (min-width: 568px) {
    width: 42%;
    top: 18%;
  }
`;

const BoxWrappPhoto = styled(Box)`
   //border: yellow 2px solid;
  position: absolute;
  width: 18%;
  top: 42%;
  left: 5%;
  z-index: 2;
  @media (min-width: 568px) {
    width: 15%;
    top: 42%;
  }
`;

const PhotoImg = styled.img`
width: 100%
`;
