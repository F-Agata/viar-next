import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import OneSlide from './OneSlide';

import portfolioItems from './portfolioItems';

import Box from '../../../styles/Box';
import TitleAndText from '../../../styles/TitleAndText';

const PortfolioSlider = () => {
  const [whichSlide, setWhichSlide] = useState(0);

  const itemsRef = useRef(null);

  function scrollToId(index) {
    const map = getMap();
    const node = map.get(index);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setWhichSlide(index);
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
        <Box
            // border={'green 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'strench'}
            pb={20}
        >
            <BgxBg>

            <Box
                // border={'green 2px solid'}
                p={'40px 0px 100px 0px'}
                bg={'colorPrimary'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                flexWrap={'nowrap'}
                width={'100%'}

                width={typeof window !== 'undefined' ? `${window.innerWidth}px` : '100%'}
            >
                <TitleAndText variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }} textAlign={'center'} color={'colorWhite'} m={'20px 20px'}>Nunc vestibulum sodales rhoncus</TitleAndText>

                <OneSlide scrollToId={scrollToId}
                          portfolioItems={portfolioItems}
                          whichSlide={ whichSlide}
                          setWhichSlide={setWhichSlide}
                />

            </Box>

            </BgxBg>
        </Box>
  );
};
export default PortfolioSlider;

const BgxBg = styled(Box)`
  width: 100%;
    border: 2px burlywood solid;
  background-image: url('bg3-sliderBig.png');
  background-repeat: no-repeat;
   background-size: cover;
  background-position: center;
  padding-bottom: 70px;
  //position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 padding: 200px 0px 0px 0px;
  
`;
