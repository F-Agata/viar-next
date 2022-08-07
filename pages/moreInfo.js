import React from 'react'

import Box from '../styles/Box'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import MoreInfoSmallSlider from '../components/routes/moreInfo/MoreInfoSmallSlider'
import MoreInfoBigSlider from '../components/routes/moreInfo/MoreInfoBigSlider'

const MoreInfo = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <Box>
      {!modificationPage && <MoreInfoSmallSlider/>}
      {modificationPage && <MoreInfoBigSlider/>}
    </Box>
  )
}

export default MoreInfo
