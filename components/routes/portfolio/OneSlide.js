import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'

const OneSlide = ({
  portfolioItems,
  whichSlide,
  setWhichSlide,
                    styleTranslate,
                    styleTransition,
}) => {


  return (
            <BoxWrapp  howManySlides={portfolioItems.length} styleTranslate={styleTranslate} styleTransition={styleTransition}>
        {portfolioItems.map((item, index) => (
          <Box
            key={item}
            // border={'red 2px solid'}
            width={350}
            m={'0 40px 0 40px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img width={350} src={item} alt={item} />
          </Box>
        ))}
      </BoxWrapp>

  )
}

export default OneSlide

const BoxWrapp = styled(Box)`
border: lightseagreen solid 2px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  width: ${props => props.howManySlides * 430}px;
  transform: translateX(-${props => props.styleTranslate}px);
  transition: transform ease-out ${props => props.styleTransition}s;
  
  
  

 
`