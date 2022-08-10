import { useState, useEffect } from 'react'

import Box from '../styles/Box'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import MoreInfoSmallSlider from '../components/routes/moreInfo/MoreInfoSmallSlider'
import MoreInfoBigSlider from '../components/routes/moreInfo/MoreInfoBigSlider'

const MoreInfo = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  const [getWidth, setGetWidth] = useState(0);

  const handleResize = () => setGetWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(()=>{
    setGetWidth(window.innerWidth);
  }, [])

  return (
    <Box >
      {!modificationPage && <MoreInfoSmallSlider getWidth={getWidth}/>}
      {modificationPage && <MoreInfoBigSlider getWidth={getWidth}/>}
    </Box>
  )
}

export default MoreInfo
