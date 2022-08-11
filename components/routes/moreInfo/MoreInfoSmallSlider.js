import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import MoreInfoSmall01 from './MoreInfoSmall01'
import MoreInfoSmall02 from './MoreInfoSmall02'
import MoreInfoSmall03 from './MoreInfoSmall03'
import Arrow from "./Arrow";
import Dots from "./Dots";

import Box from '../../../styles/Box'


const MoreInfoSmallSlider = ({getWidth, whichSlide, setWhichSlide}) => {
  const slide01Ref = useRef(null)
  const slide02Ref = useRef(null)
  const slide03Ref = useRef(null)

  return (
    <Box
      border={'red 2px solid'}
      overflow={'hidden'}
      position={'relative'}
    >
      {getWidth !== 0 &&   <Box
        // border={'red 2px solid'}
          overflow={'hidden'}
        display="flex"
        width={getWidth * 3}

      >
        <Box ref={slide01Ref}
            // border={'green 2px solid'}
            >
          <MoreInfoSmall01 getWidth={getWidth}/>
        </Box>
        <Box ref={slide02Ref}
            // border={'green 2px solid'}
        >
          <MoreInfoSmall02 getWidth={getWidth}/>
        </Box>
        <Box ref={slide03Ref}
            // border={'green 2px solid'}
        >
          <MoreInfoSmall03 getWidth={getWidth}/>
        </Box>
      </Box>
      }

      <Arrow direction={"left"}  whichSlide={whichSlide} setWhichSlide={setWhichSlide} slide01Ref={slide01Ref} slide02Ref={slide02Ref} slide03Ref={slide03Ref}/>
      <Arrow direction={"right"}  whichSlide={whichSlide} setWhichSlide={setWhichSlide} slide01Ref={slide01Ref} slide02Ref={slide02Ref} slide03Ref={slide03Ref}/>
      <Dots  whichSlide={whichSlide} setWhichSlide={setWhichSlide} slide01Ref={slide01Ref} slide02Ref={slide02Ref} slide03Ref={slide03Ref}/>
    </Box>
  )
}

export default MoreInfoSmallSlider
