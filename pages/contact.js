import React from 'react'

import Box from '../styles/Box'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import ContactSmall from '../components/routes/contact/ContactSmall'
import ContactBig from '../components/routes/contact/ContactBig'

const Contact = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <Box>
      {!modificationPage && <ContactSmall/>}
      {modificationPage && <ContactBig/>}
    </Box>
  )
}

export default Contact
