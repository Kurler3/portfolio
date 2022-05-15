import Link from 'next/link';
import React, {memo} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
    <Container>
      {/* BEGINNING BUTTON */}
      <Div1>
        <Link href="/">
          <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
            <DiCssdeck size="3rem"/> <span>Portfolio</span>
          </a>  
        </Link>
      </Div1>

      {/* NAV LINKS */}
      <Div2>
        {/* PROJECTS */}
        <li>
            {/* Using # in the href will make it scroll smoothly to the div with id="projects" */}
            <Link href="#projects">
              <NavLink>
                Projects
              </NavLink>
            </Link>
        </li>
        {/* Technologies */}
        <li>
            {/* Using # in the href will make it scroll smoothly to the div with id="projects" */}
            <Link href="#tech">
              <NavLink>
                Technologies
              </NavLink>
            </Link>
        </li>
        {/* About */}
        <li>
            {/* Using # in the href will make it scroll smoothly to the div with id="projects" */}
            <Link href="#about">
              <NavLink>
                About
              </NavLink>
            </Link>
        </li>
      </Div2>
    </Container>
);

export default memo(Header);
