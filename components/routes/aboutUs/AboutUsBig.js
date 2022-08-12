import Box from '../../../styles/Box'

import AboutUsBigHeader from './AboutUsBigHeader'
import AboutUsBigDescription from './AboutUsBigDescription'
import AboutUsBigSteps from './AboutUsBigSteps'

const AboutUsBig = () => {
  return (
    <Box
      position={'relative'}
    >
      <AboutUsBigHeader />
      <AboutUsBigDescription />
      <AboutUsBigSteps />
    </Box>
  )
}

export default AboutUsBig
