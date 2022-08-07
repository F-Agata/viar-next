import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import MoreInfoBig01 from '../moreInfo/MoreInfoBig01'
import MoreInfoBig02 from '../moreInfo/MoreInfoBig02'
import MoreInfoBig03 from '../moreInfo/MoreInfoBig03'
import SlidersArrowsAndDots from './SlidersArrowsAndDots'

import Box from '../../../styles/Box'

const MoreInfoBigSlider = () => {
  const slide01Ref = useRef(null)
  const slide02Ref = useRef(null)
  const slide03Ref = useRef(null)

  function handleScrollToSlide01() {
    slide01Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  function handleScrollToSlide02() {
    slide02Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  function handleScrollToSlide03() {
    slide03Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  return (
    <Box
      // border={'red 2px solid'}
      position={'relative'}
    >
      <Box
        // border={'green 2px solid'}
        overflow={'hidden'}
        display="flex"
        flexWrap="nowrap"
        width={
          typeof window !== 'undefined' ? `${window.innerWidth}px` : '100%'
        }
      >
        <Box ref={slide01Ref}>
          <MoreInfoBig01 />
        </Box>
        <Box ref={slide02Ref}>
          <MoreInfoBig02 />
        </Box>
        <Box ref={slide03Ref}>
          <MoreInfoBig03 />
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
export default MoreInfoBigSlider
