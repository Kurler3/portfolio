import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
      <SectionDivider/>
      <br/>
      <SectionTitle >
        Technologies
      </SectionTitle>
      <SectionText>
        My Main Web Development Stack is MERN.
        <br/>
        For Mobile I Use Flutter Mostly.
      </SectionText>

      <List>
        {/* FRONT-END */}
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>
              Front-End
            </ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        {/* BACK-END */}
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>
              Back-End
            </ListTitle>
            <ListParagraph>
              Experience with <br/>
              node.js and databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        {/* MOBILE */}
        <ListItem>
          <DiAndroid size="3rem"/>
          <ListContainer>
            <ListTitle>
              Mobile
            </ListTitle>
            <ListParagraph>
              Experience with <br/>
              Android and Flutter
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
);

export default Technologies;
