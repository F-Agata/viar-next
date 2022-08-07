import styled, { css } from 'styled-components';

import Box from '../../../styles/Box';

import ContactSmallHeader from './ContactSmallHeader';
import ContactSmallDescription from './ContactSmallDescription';
import Faq from './faq/Faq';

const ContactSmall = () => (
        <Box position={'relative'}
            // border={'green 2px solid'}
        >
            <ContactSmallHeader/>
            <ContactSmallDescription/>
            <Faq/>

        </Box>
);

export default ContactSmall;
