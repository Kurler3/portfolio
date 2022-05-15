import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfileImg } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <ProfileImg
          // src='https://avatars.githubusercontent.com/u/43253459?s=400&u=20fd8ca76a5e5d16b5cdebc176e18ed4fe296dbe&v=4'
          // alt="profile_pic"
        >
          <img 
            src="https://avatars.githubusercontent.com/u/43253459?s=400&u=20fd8ca76a5e5d16b5cdebc176e18ed4fe296dbe&v=4"
            alt="Profile_pic"
            width="100%"
            height="100%"
            style={{
              objectPosition: "50% 50%",
              marginLeft:'2px',
              marginTop:"1px",
            }}
          />
        </ProfileImg>
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