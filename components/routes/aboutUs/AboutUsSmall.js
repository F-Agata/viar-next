import Box from '../../../styles/Box'

import AboutUsSmallHeader from './AboutUsSmallHeader'
import AboutUsSmallDescription from './AboutUsSmallDescription'
import AboutUsSmallSteps from './AboutUsSmallSteps'

const AboutUsSmall = () => {
  return (
    <Box position={'relative'}>
      <AboutUsSmallHeader />
      <AboutUsSmallDescription />
      <AboutUsSmallSteps />
    </Box>
  )
}

export default AboutUsSmall
