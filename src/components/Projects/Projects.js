import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
        Projects
    </SectionTitle>
    <GridContainer>
      {
        projects.map(({image, title, description, tags, source, visit}, index) => (
          <BlogCard key={`projects_${index}_${title}`}>
              <Img 
                src={image}
              />
              <TitleContent>
                <HeaderThree title>
                    {title}
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>
                {description}
              </CardInfo>
              <div>
                <TitleContent>
                  Stack
                </TitleContent>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={`${tag}_${index}`}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source} target="_blank">Code</ExternalLinks>
                {
                  visit &&
                  <ExternalLinks href={visit} target="_blank">Live Version</ExternalLinks>
                }
              </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;