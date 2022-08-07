import styled, { css } from 'styled-components';

import Box from '../../../styles/Box';

import AboutUsSmallHeader from './AboutUsSmallHeader';
import AboutUsSmallDescription from './AboutUsSmallDescription';
import AboutUsSmallSteps from './AboutUsSmallSteps';

const AboutUsSmall = () => (
        <Box position={'relative'}
            // border={'green 2px solid'}
        >
            <AboutUsSmallHeader/>
            <AboutUsSmallDescription/>
            <AboutUsSmallSteps/>

        </Box>
);

export default AboutUsSmall;
