import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'

import AboutUsBigHeader from './AboutUsBigHeader'
import AboutUsBigDescription from './AboutUsBigDescription'
import AboutUsBigSteps from './AboutUsBigSteps'

const AboutUsBig = () => (
  <Box
    position={'relative'}
    // border={'green 2px solid'}
  >
    <AboutUsBigHeader />
    <AboutUsBigDescription />
    <AboutUsBigSteps />
  </Box>
)

export default AboutUsBig
