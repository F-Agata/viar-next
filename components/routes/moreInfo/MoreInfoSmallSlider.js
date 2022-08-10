import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import MoreInfoSmall01 from './MoreInfoSmall01'
import MoreInfoSmall02 from './MoreInfoSmall02'
import MoreInfoSmall03 from './MoreInfoSmall03'
import SlidersArrowsAndDots from './SlidersArrowsAndDots'

import Box from '../../../styles/Box'

const MoreInfoSmallSlider = ({getWidth}) => {
  const slide01Ref = useRef(null)
  const slide02Ref = useRef(null)
  const slide03Ref = useRef(null)

  function handleScrollToSlide01() {
    slide01Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  function handleScrollToSlide02() {
    slide02Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  function handleScrollToSlide03() {
    slide03Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  return (
    <Box
      // border={'red 2px solid'}
      position={'relative'}
    >
      {getWidth !== 0 &&   <Box
        // border={'green 2px solid'}
        display="flex"
        width={getWidth * 3}

      >
        <Box ref={slide01Ref}>
          <MoreInfoSmall01 />
        </Box>
        <Box ref={slide02Ref}>
          <MoreInfoSmall02 />
        </Box>
        <Box ref={slide03Ref}>
          <MoreInfoSmall03 />
        </Box>
      </Box> }

      {/*<Box*/}
      {/*  // border={'orange 2px solid'}*/}
      {/*  // width={`${window.innerWidth}px`}*/}
      {/*  width={'100%'}*/}
      {/*  height={'100%'}*/}
      {/*  position={'absolute'}*/}
      {/*  zIndex={'10'}*/}
      {/*  top={0}*/}
      {/*  left={0}*/}
      {/*>*/}
      {/*  <SlidersArrowsAndDots*/}
      {/*    handleScrollToSlide01={handleScrollToSlide01}*/}
      {/*    handleScrollToSlide02={handleScrollToSlide02}*/}
      {/*    handleScrollToSlide03={handleScrollToSlide03}*/}
      {/*    // whichSlide*/}
      {/*    // setWhichSlide*/}
      {/*  />*/}
      {/*</Box>*/}
    </Box>
  )
}

export default MoreInfoSmallSlider
