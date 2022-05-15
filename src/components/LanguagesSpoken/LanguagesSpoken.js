import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './LanguagesSpokenStyles';

import { LANGUAGES_SPOKEN } from '../../constants/constants';

const LanguagesSpoken = () => (
  <Section>
    <SectionDivider/>
    <br/>
    <SectionTitle>Languages Spoken</SectionTitle>

    <Boxes>
      {
        LANGUAGES_SPOKEN.map((card, index) => (
          <Box 
            key={`languages_spoken_card_${card.name}_${index}`}
          >
            <BoxNum>
              {card.name}
            </BoxNum>
            <BoxText>
              {card.level}
            </BoxText>
          </Box>
        ))
      }
    </Boxes>
  </Section>
);

export default LanguagesSpoken;
