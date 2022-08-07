import React from 'react'

import Box from '../styles/Box'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import HomeSmall from '../components/routes/home/HomeSmall'
import HomeBig from '../components/routes/home/HomeBig'

const Home = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <Box>
      {!modificationPage && <HomeSmall />}
      {modificationPage && <HomeBig />}
    </Box>
  )
}

export default Home
