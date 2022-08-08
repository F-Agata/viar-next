import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import MoreInfoSmall01 from './MoreInfoSmall01'
import MoreInfoSmall02 from './MoreInfoSmall02'
import MoreInfoSmall03 from './MoreInfoSmall03'
import SlidersArrowsAndDots from './SlidersArrowsAndDots'

import Box from '../../../styles/Box'

const MoreInfoSmallSlider = () => {
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
      <Box
        // border={'crimson 2px solid'}
        overflow={'hidden'}
        display="flex"
        flexWrap="nowrap"
        // width={
        //   typeof window !== 'undefined' ? `${window.innerWidth}px` : '100%'
        // }
        width={'100%'}
      >
        {/*<MoreInfoSmall01 />*/}
        <Box ref={slide01Ref}
            border={'green 2px solid'}
             width={'100%'}
             overflow={'hidden'}
            >
          <MoreInfoSmall01 />
        </Box>
        <Box ref={slide02Ref}
             border={'green 2px solid'}
             width={'100%'}
             overflow={'hidden'}
        >
          <MoreInfoSmall02 />
        </Box>
        <Box ref={slide03Ref}
             border={'green 2px solid'}
             width={'100%'}
             overflow={'hidden'}
        >
          <MoreInfoSmall03 />
        </Box>
      </Box>
      <Box
        // border={'orange 2px solid'}
        // width={`${window.innerWidth}px`}
        width={'100%'}
        height={'100%'}
        position={'absolute'}
        zIndex={'10'}
        top={0}
        left={0}
      >
        <SlidersArrowsAndDots
          handleScrollToSlide01={handleScrollToSlide01}
          handleScrollToSlide02={handleScrollToSlide02}
          handleScrollToSlide03={handleScrollToSlide03}
          // whichSlide
          // setWhichSlide
        />
      </Box>
    </Box>
  )
}

export default MoreInfoSmallSlider
