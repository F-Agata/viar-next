import { useRef, useState } from 'react'

import MoreInfoBig01 from '../moreInfo/MoreInfoBig01'
import MoreInfoBig02 from '../moreInfo/MoreInfoBig02'
import MoreInfoBig03 from '../moreInfo/MoreInfoBig03'

import Box from '../../../styles/Box'
import Arrow from "./Arrow";
import Dots from "./Dots";

const MoreInfoBigSlider = ({getWidth, whichSlide, setWhichSlide}) => {
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
        <Box ref={slide01Ref}>
          <MoreInfoBig01 getWidth={getWidth} />
        </Box>
        <Box ref={slide02Ref}>
          <MoreInfoBig02 getWidth={getWidth} />
        </Box>
        <Box ref={slide03Ref}>
          <MoreInfoBig03 getWidth={getWidth} />
        </Box>
        </Box>
        }

        <Arrow direction={"left"}  whichSlide={whichSlide} setWhichSlide={setWhichSlide} slide01Ref={slide01Ref} slide02Ref={slide02Ref} slide03Ref={slide03Ref}/>
        <Arrow direction={"right"}  whichSlide={whichSlide} setWhichSlide={setWhichSlide} slide01Ref={slide01Ref} slide02Ref={slide02Ref} slide03Ref={slide03Ref}/>
        <Dots  whichSlide={whichSlide} setWhichSlide={setWhichSlide} slide01Ref={slide01Ref} slide02Ref={slide02Ref} slide03Ref={slide03Ref}/>
      </Box>
  )
}
export default MoreInfoBigSlider
