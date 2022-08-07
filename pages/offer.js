import React from 'react'

import Box from '../styles/Box'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import OfferSmall from '../components/routes/offer/OfferSmall'
import OfferBig from '../components/routes/offer/OfferBig'

const Offer = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <Box>
      {!modificationPage && <OfferSmall/>}
      {modificationPage && <OfferBig/>}
    </Box>
  )
}

export default Offer
