import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:miguelbento2000@gmail.com">miguelbento2000@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning new technologies</Slogan>
        </CompanyContainer>
        <SocialContainer>
          {/* GITHUB */}
          <SocialIcons href="https://github.com/Kurler3" target="_blank">
              <AiFillGithub size="3rem"/>
          </SocialIcons>
          {/* LINKED IN */}
          <SocialIcons href="https://www.linkedin.com/in/miguel-bento-083b07170/" target="_blank">
              <AiFillLinkedin size="3rem"/>
          </SocialIcons>

          {/* INSTAGRAM */}
          <SocialIcons href="https://www.instagram.com/miguelgbento/" target="_blank">
              <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
