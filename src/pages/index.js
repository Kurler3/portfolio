import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import LanguagesSpoken from '../components/LanguagesSpoken/LanguagesSpoken';
import ProgrammingLanguages from '../components/ProgrammingLanguages/ProgrammingLanguages';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
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
    </Layout>
  );
};

export default Home;
