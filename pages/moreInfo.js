import { useState, useEffect, useRef } from 'react'

import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import Box from '../styles/Box'

import MoreInfoSmall01 from '../components/routes/moreInfo/MoreInfoSmall01'
import MoreInfoSmall02 from '../components/routes/moreInfo/MoreInfoSmall02'
import MoreInfoSmall03 from '../components/routes/moreInfo/MoreInfoSmall03'
import MoreInfoBig01 from '../components/routes/moreInfo/MoreInfoBig01'
import MoreInfoBig02 from '../components/routes/moreInfo/MoreInfoBig02'
import MoreInfoBig03 from '../components/routes/moreInfo/MoreInfoBig03'
import Arrow from '../components/routes/moreInfo/Arrow'
import Dots from '../components/routes/moreInfo/Dots'

const MoreInfo = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  const [getWidth, setGetWidth] = useState(0)
  const [whichSlide, setWhichSlide] = useState(1)

  const slide01Ref = useRef(null)
  const slide02Ref = useRef(null)
  const slide03Ref = useRef(null)

  const handleResize = () => setGetWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    setGetWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    console.log(whichSlide, 'whichSlide z początku')
  }, [whichSlide])

  return (
    <Box position={'relative'}>
      <Box overflow={'hidden'}>
        {getWidth !== 0 && (
          <Box overflow={'hidden'} display="flex" width={getWidth * 3}>
            <Box ref={slide01Ref}>
              {!modificationPage && <MoreInfoSmall01 getWidth={getWidth} />}
              {modificationPage && <MoreInfoBig01 getWidth={getWidth} />}
            </Box>
            <Box ref={slide02Ref}>
              {!modificationPage && <MoreInfoSmall02 getWidth={getWidth} />}
              {modificationPage && <MoreInfoBig02 getWidth={getWidth} />}
            </Box>
            <Box ref={slide03Ref}>
              {!modificationPage && <MoreInfoSmall03 getWidth={getWidth} />}
              {modificationPage && <MoreInfoBig03 getWidth={getWidth} />}
            </Box>
          </Box>
        )}
      </Box>
      <Arrow
        direction={'left'}
        whichSlide={whichSlide}
        setWhichSlide={setWhichSlide}
        slide01Ref={slide01Ref}
        slide02Ref={slide02Ref}
        slide03Ref={slide03Ref}
      />
      <Arrow
        direction={'right'}
        whichSlide={whichSlide}
        setWhichSlide={setWhichSlide}
        slide01Ref={slide01Ref}
        slide02Ref={slide02Ref}
        slide03Ref={slide03Ref}
      />
      <Dots
        whichSlide={whichSlide}
        setWhichSlide={setWhichSlide}
        slide01Ref={slide01Ref}
        slide02Ref={slide02Ref}
        slide03Ref={slide03Ref}
      />
    </Box>
  )
}

export default MoreInfo
