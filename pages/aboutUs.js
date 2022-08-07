import React from 'react'

import Box from '../styles/Box'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import AboutUsSmall from '../components/routes/aboutUs/AboutUsSmall'
import AboutUsBig from '../components/routes/aboutUs/AboutUsBig'

const AboutUs = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <Box>
      {!modificationPage && <AboutUsSmall />}
      {modificationPage && <AboutUsBig />}
    </Box>
  )
}

export default AboutUs
