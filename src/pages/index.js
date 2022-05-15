import { useCallback, useEffect} from 'react';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import LanguagesSpoken from '../components/LanguagesSpoken/LanguagesSpoken';
import ProgrammingLanguages from '../components/ProgrammingLanguages/ProgrammingLanguages';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { ScrollTopButton, Section } from '../styles/GlobalComponents';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Home = () => {

  const handleScroll = useCallback((e) => {

    let scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }, []);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return (
    <Layout>
      {/* INTRO AND PROFILE PIC */}
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      {/* PROJECTS */}
      <Projects />
      {/* TECH */}
      <Technologies />
      {/* PROGRAMMING LANGUAGUES */}
      <ProgrammingLanguages />
      {/* LANGUAGES SPOKEN */}
      <LanguagesSpoken />
      {/* ABOUT ME */}
      <Timeline />

      {/* SCROLL BAR TO TOP BUTTON */}
      <ScrollTopButton 
        id='scrollTopBtn'
        onClick={() => window.location = "#"}
      >
        <AiOutlineArrowUp size="3rem"/>
      </ScrollTopButton>
    </Layout>
  );
};

export default Home;
