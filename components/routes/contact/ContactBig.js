import Box from '../../../styles/Box'

import ContactBigHeader from './ContactBigHeader'
import ContactBigDescription from './ContactBigDescription'
import Faq from './faq/Faq'

const ContactBig = () => {
  return (
    <Box position={'relative'}>
      <ContactBigHeader />
      <ContactBigDescription />
      <Faq />
    </Box>
  )
}

export default ContactBig
