import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
           Hi there! <br />
           I'm Miguel
        </SectionTitle>
        <SectionText>
            I'm a full-stack engineer and I love both mobile and web development. I'm also a third-year CS student at UESTC, China
        </SectionText>

        <Button onClick={() => window.location = 'mailto:miguelbento2000@gmail.com'}>Learn More</Button>
      </LeftSection>
    </Section>
);

export default Hero;