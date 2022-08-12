import Box from '../../../styles/Box'

import ContactSmallHeader from './ContactSmallHeader'
import ContactSmallDescription from './ContactSmallDescription'
import Faq from './faq/Faq'

const ContactSmall = () => {
  return (
    <Box position={'relative'}>
      <ContactSmallHeader />
      <ContactSmallDescription />
      <Faq />
    </Box>
  )
}

export default ContactSmall
