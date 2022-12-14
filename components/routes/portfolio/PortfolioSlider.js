import { useState } from 'react'
import styled from 'styled-components'

import useBetterMediaQuery from '../../../hooks/useBetterMediaQuery'

import OneSlide from './OneSlide'

import portfolioItems from './portfolioItems'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'
import Arrow from './Arrow'
import Dots from './Dots'

const PortfolioSlider = () => {
  const [whichSlide, setWhichSlide] = useState(0)
  const [styleTranslate, setStyleTranslate] = useState(0)

  const widthSingleSlide = 510
  const styleTransition = 0.45

  const modificationPage = useBetterMediaQuery('(min-width: 568px)')

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'stretch'}
      pb={20}
    >
      <BgxBg>
        <Box
          p={'40px 0px 100px 0px'}
          bg={'colorPrimary'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'nowrap'}
          width={'100%'}
        >
          <TitleAndText
            variant={{ _: 'title4Uppercase', tablet: 'title3Uppercase' }}
            textAlign={'center'}
            color={'colorWhite'}
            m={'20px 20px'}
          >
            Nunc vestibulum sodales rhoncus
          </TitleAndText>

          <Box
            width={widthSingleSlide}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            overflow={'hidden'}
            position={'relative'}
            p={'40px 0px'}
          >
            <OneSlide
              portfolioItems={portfolioItems}
              whichSlide={whichSlide}
              setWhichSlide={setWhichSlide}
              styleTranslate={styleTranslate}
              styleTransition={styleTransition}
              widthSingleSlide={widthSingleSlide}
            />

            {modificationPage && (
              <Arrow
                direction={'left'}
                whichSlide={whichSlide}
                setWhichSlide={setWhichSlide}
                portfolioItems={portfolioItems}
                setStyleTranslate={setStyleTranslate}
                widthSingleSlide={widthSingleSlide}
              />
            )}

            {modificationPage && (
              <Arrow
                direction={'right'}
                whichSlide={whichSlide}
                setWhichSlide={setWhichSlide}
                portfolioItems={portfolioItems}
                setStyleTranslate={setStyleTranslate}
                widthSingleSlide={widthSingleSlide}
              />
            )}

            {modificationPage && (
              <Dots
                whichSlide={whichSlide}
                setWhichSlide={setWhichSlide}
                portfolioItems={portfolioItems}
                setStyleTranslate={setStyleTranslate}
                widthSingleSlide={widthSingleSlide}
              />
            )}
          </Box>

          {!modificationPage && (
            <Box
              width={200}
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              overflow={'hidden'}
              position={'relative'}
              p={'40px 0px'}
            >
              <Arrow
                direction={'left'}
                whichSlide={whichSlide}
                setWhichSlide={setWhichSlide}
                portfolioItems={portfolioItems}
                setStyleTranslate={setStyleTranslate}
                widthSingleSlide={widthSingleSlide}
              />

              <Arrow
                direction={'right'}
                whichSlide={whichSlide}
                setWhichSlide={setWhichSlide}
                portfolioItems={portfolioItems}
                setStyleTranslate={setStyleTranslate}
                widthSingleSlide={widthSingleSlide}
              />
            </Box>
          )}
        </Box>
      </BgxBg>
    </Box>
  )
}
export default PortfolioSlider

const BgxBg = styled(Box)`
  width: 100%;
  border: 2px burlywood solid;
  background-image: url('bg3-sliderBig.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0px 0px 0px;
`
