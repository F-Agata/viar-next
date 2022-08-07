import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'

import ContactBigHeader from './ContactBigHeader'
import ContactBigDescription from './ContactBigDescription'
import Faq from './faq/Faq'

const ContactBig = () => (
  <Box
    position={'relative'}
    // border={'green 2px solid'}
  >
    <ContactBigHeader />
    <ContactBigDescription />
    <Faq />
  </Box>
)

export default ContactBig
