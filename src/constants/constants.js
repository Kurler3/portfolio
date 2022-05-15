
const PROGRAMMING_LANGUAGE_ICON_SIZE = "4rem";

import {
  DiVisualstudio,
  DiAndroid,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJava,
  DiJavascript,
  DiPython,
  DiDart,
  DiReact,
  DiMongodb,
  DiMysql,
} from 'react-icons/di';

import {
  SiTailwindcss,
  SiTypescript,
  SiKotlin,
  SiRedux,
  SiNextDotJs,
  SiGraphql,
  SiFlutter,
  SiFirebase,
  SiGithub,
 
} from 'react-icons/si';

import {
  FaNode,
} from 'react-icons/fa';


export const PROGRAMMING_LANGUAGES = [
  // VISUAL STUDIO CODE
  {
    name: 'Visual Studio Code',
    icon: <DiVisualstudio size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>,
  },
  // ANDROID STUDIO
  {
    name:"Android Studio",
    icon: <DiAndroid size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // HTML 5
  {
    name: "HTML5",
    icon: <DiHtml5 size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // CSS3
  {
    name: "CSS3",
    icon: <DiCss3 size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // SASS
  {
    name: "SASS",
    icon: <DiSass size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // TAILWINDCSS
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // JAVA
  {
    name: "Java",
    icon: <DiJava size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // JAVASCRIPT
  {
    name: "JavaScript",
    icon: <DiJavascript size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // TYPESCRIPT
  {
    name: "TypeScript",
    icon: <SiTypescript size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // PYTHON
  {
    name: "Python",
    icon: <DiPython size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // DART
  {
    name: "Dart",
    icon: <DiDart size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // KOTLIN
  {
    name: "Kotlin",
    icon: <SiKotlin size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // REACT
  {
    name: "React.js",
    icon: <DiReact size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // REDUX
  {
    name: "Redux",
    icon: <SiRedux size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // NEXT
  {
    name: "Next.js",
    icon: <SiNextDotJs size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // GRAPHQL
  {
    name: "GraphQL",
    icon: <SiGraphql size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // FLUTTER
  {
    name: "Flutter",
    icon: <SiFlutter size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // FIREBASE
  {
    name: "Firebase",
    icon: <SiFirebase size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // NODE JS
  {
    name: "Node.js",
    icon: <FaNode size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // MONGODB
  {
    name: "MongoDB",
    icon: <DiMongodb size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // MYSQL
  {
    name: "MySQL",
    icon: <DiMysql size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
  // GITHUB
  {
    name: "GitHub",
    icon: <SiGithub size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
]

export const projects = [
  {
    title: 'MERN Memories',
    description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
      image: '/images/1.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'E-Commerce',
    description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: '/images/2.png',
    tags: ['React', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: '/images/3.jpg',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];



export const LANGUAGES_SPOKEN = [
  {
    name: 'Portuguese',
    level: "Native",
  },
  {
    name: 'English',
    level: "Fluent",
  },
  {
    name: 'Chinese',
    level: "Fluent",
  },
  {
    name: 'French',
    level: "Intermediate",
  },
]
