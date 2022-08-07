import React, { useRef } from 'react'
import styled, { css } from 'styled-components'

import SlidersArrowsAndDots from './SlidersArrowsAndDots'

import Box from '../../../styles/Box'

const OneSlide = ({
  scrollToId,
  portfolioItems,
  whichSlide,
  setWhichSlide,
}) => {
  const itemsRef = useRef(null)

  function scrollToId(index) {
    const map = getMap()
    const node = map.get(index)
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map()
    }
    return itemsRef.current
  }

  return (
    <Box
      // border={'orange 2px solid'}
      width={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'hidden'}
      position={'relative'}
      p={'40px 0px'}
    >
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
          scrollToId={scrollToId}
          getMap={getMap}
          itemsRef={itemsRef}
          portfolioItems={portfolioItems}
          whichSlide={whichSlide}
          setWhichSlide={setWhichSlide}
        />
      </Box>

      <Box
        // border={'orange 2px solid'}
        overflow={'hidden'}
        width={430}
        display={'flex'}
        // justifyContent={'flex-start'}
        alignItems={'stretch'}
      >
        {portfolioItems.map((item, index) => (
          <Box
            key={item}
            // border={'red 2px solid'}
            width={350}
            m={'0 40px 0 40px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}

            // ref={(node) => {
            //     const map = getMap();
            //     if (node) {
            //         map.set(index, node);
            //     } else {
            //         map.delete(index);
            //     }
            // }}
          >
            <img width={350} src={item} alt={item} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default OneSlide
