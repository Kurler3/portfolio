import React, { useMemo, useState, memo, useCallback, useRef, createRef } from 'react';
import { PROGRAMMING_LANGUAGES } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { Box, Boxes, BoxIcon, BoxTitle, ShowMore } from './ProgrammingLanguagesStyles';




const ProgrammingLanguages = () => {

  const containerRef = useRef();  

  const [state, setState] = useState({
    isShowMore: false,
  });

  const mappableLanguages = useMemo(() => {
    
    return !state.isShowMore ? PROGRAMMING_LANGUAGES.slice(0, 8) : PROGRAMMING_LANGUAGES;
  }, [state.isShowMore]);

  const handleOnShowMoreClick = useCallback(() => {
      setState((prevState) => {

        if(!!prevState.isShowMore) {
                containerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
        }

        return {
              ...prevState,
              isShowMore: !prevState.isShowMore,
        }
      });
    
  }, []);

  return (
        <Section id='programming_languages' ref={containerRef}>
            <SectionDivider />
            <br/>
            <SectionTitle style={{fontSize:"40px"}}>Programming Languages, Frameworks and Tools</SectionTitle>
            

            <Boxes key={`programming_languages_container_${mappableLanguages.length}`}>
                {
                    mappableLanguages.map((item, index) => (
                        <Box
                            key={`programming_languages_${item.name}_${index}`}
                        >
                            <BoxTitle>
                                {item.name}
                            </BoxTitle>

                            <BoxIcon>
                                {item.icon}
                            </BoxIcon>
                        </Box>
                    ))
                }
            </Boxes>

            <ShowMore onClick={handleOnShowMoreClick}>
                {
                    !state.isShowMore ?
                    "Show more..." : "Hide"
                }
            </ShowMore>
        </Section>
  )
}

export default ProgrammingLanguages;