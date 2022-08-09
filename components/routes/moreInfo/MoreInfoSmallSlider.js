import { useState, useEffect } from 'react'
import styled from 'styled-components'

import MoreInfoSmall01 from './MoreInfoSmall01'
import MoreInfoSmall02 from './MoreInfoSmall02'
import MoreInfoSmall03 from './MoreInfoSmall03'
import Arrow from './Arrow'
import Dots from './Dots'

import Box from '../../../styles/Box'




// const getWidth = () => window.innerWidth


const MoreInfoSmallSlider = () => {



  // `${window.innerWidth}px`

    const [getWidth, setGetWidth] = useState(undefined)
    // const [getWidth, setGetWidth] = useState(null)
    // const [getWidth, setGetWidth] = useState(`${window.innerWidth}px`)

    //
    // useEffect(() => {
    //     window.innerWidth ? console.log(`${window.innerWidth}px`, "`${window.innerWidth}px`") : console.log("nie mam windowa")
    //     // window.innerWidth ? console.log(typeof window.innerWidth, "typeof window.innerWidth") : console.log("nie mam windowa"),
    //     console.log(getWidth3,`${getWidth3}px`, "getWidth3")
    //
    // },[])
    //

  const startGetWidth = () => {
    setGetWidth(window.innerWidth)
  }

  useEffect(() => {
    if(typeof window !== undefined)
             {startGetWidth()}
     }, []);

  useEffect(() => {
    if(typeof window !== undefined) {
      window.addEventListener('resize', startGetWidth())
    }
  }, []);



    useEffect(() => {
            window.innerWidth ? console.log(getWidth, "getWidth") : console.log("nie mam windowa");},
        []);


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
      translate: (activeIndex + 1) * getWidth
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (3 - 1) * getWidth,
        activeIndex: 3 - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth
    })
  }

  return (
    <Box
      // border={'red 2px solid'}
      position={'relative'}
      overflow={'hidden'}
      width={'100%'}
    >
      {getWidth !== undefined && <BoxSliderContent  translate={translate}
                                                    transition={transition}
                                                    width={getWidth * 3}
      >

        <MoreInfoSmall01 />
        <MoreInfoSmall02 />
        <MoreInfoSmall03 />

      </BoxSliderContent>}

      {/*<BoxSliderContent  translate={translate}*/}
      {/*                   transition={transition}*/}
      {/*                   width={getWidth * 3}*/}
      {/*>*/}

      {/*    <MoreInfoSmall01 />*/}
      {/*    <MoreInfoSmall02 />*/}
      {/*    <MoreInfoSmall03 />*/}

      {/*</BoxSliderContent>*/}
      <Arrow direction={"left"} moveSlide={prevSlide} />
      <Arrow direction={"right"} moveSlide={nextSlide} />
      <Dots  activeIndex={activeIndex} />
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
