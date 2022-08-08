import { useState } from 'react'
import styled from 'styled-components'

import MoreInfoSmall01 from './MoreInfoSmall01'
import MoreInfoSmall02 from './MoreInfoSmall02'
import MoreInfoSmall03 from './MoreInfoSmall03'
import Arrow from './Arrow'

import Box from '../../../styles/Box'

const MoreInfoSmallSlider = () => {

   const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition,  activeIndex } = state


  const nextSlide = () => {
    if (activeIndex === 3 - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (3 - 1) * getWidth(),
        activeIndex: 3 - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  return (
    <Box
      // border={'red 2px solid'}
      position={'relative'}
      overflow={'hidden'}
      width={'100%'}
    >
      <BoxSliderContent  translate={translate}
                         transition={transition}
                         width={getWidth() * 3}
                         >

          <MoreInfoSmall01 />
          <MoreInfoSmall02 />
          <MoreInfoSmall03 />

      </BoxSliderContent>
      <Arrow direction={"left"} moveSlide={prevSlide} />
      <Arrow direction={"right"} moveSlide={nextSlide} />
    </Box>
  )
}

export default MoreInfoSmallSlider

const BoxSliderContent = styled(Box)`
  //border: 2px solid aquamarine;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: ${props => props.width}px;
  display: flex;
}
`
