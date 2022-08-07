import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'

import OfferBigHeader from './OfferBigHeader'
import OfferDescription from './OfferDescription'
import OfferSizes from './OfferSizes'
import OfferLaughingManSmall from './OfferLaughingManSmall'

const OfferBig = () => (
  <Box
  // border={'green 2px solid'}
  >
    <OfferBigHeader />
    <OfferDescription />
    <OfferSizes />
    <OfferLaughingManSmall />
  </Box>
)

export default OfferBig
