import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'

import OfferSmallHeader from './OfferSmallHeader'
import OfferDescription from './OfferDescription'
import OfferSizes from './OfferSizes'
import OfferLaughingManSmall from './OfferLaughingManSmall'

const OfferSmall = () => {
  return (
    <Box
    // border={'green 2px solid'}
    >
      <OfferSmallHeader />
      <OfferDescription />
      <OfferSizes />
      <OfferLaughingManSmall />
    </Box>
  )
}

export default OfferSmall
