
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
    icon: <DiVisualstudio size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#3BADF7"/>,
  },
  // ANDROID STUDIO
  {
    name:"Android Studio",
    icon: <DiAndroid size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#45F41E"/>
  },
  // HTML 5
  {
    name: "HTML5",
    icon: <DiHtml5 size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#F6491D"/>
  },
  // CSS3
  {
    name: "CSS3",
    icon: <DiCss3 size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#167FF1"/>
  },
  // SASS
  {
    name: "SASS",
    icon: <DiSass size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#F92FFC"/>
  },
  // TAILWINDCSS
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#25D9F3"/>
  },
  // JAVA
  {
    name: "Java",
    icon: <DiJava size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#CC0F0C"/>
  },
  // JAVASCRIPT
  {
    name: "JavaScript",
    icon: <DiJavascript size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#EEEE0F"/>
  },
  // TYPESCRIPT
  {
    name: "TypeScript",
    icon: <SiTypescript size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#0D95DC"/>
  },
  // PYTHON
  {
    name: "Python",
    icon: <DiPython size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#F0EC0A"/>
  },
  // DART
  {
    name: "Dart",
    icon: <DiDart size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#0A75F0"/>
  },
  // KOTLIN
  {
    name: "Kotlin",
    icon: <SiKotlin size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#F0A50A"/>
  },
  // REACT
  {
    name: "React.js",
    icon: <DiReact size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#1392E2"/>
  },
  // REDUX
  {
    name: "Redux",
    icon: <SiRedux size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#D813E7"/>
  },
  // NEXT
  {
    name: "Next.js",
    icon: <SiNextDotJs size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#E3E3E3"/>
  },
  // GRAPHQL
  {
    name: "GraphQL",
    icon: <SiGraphql size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#D80581"/>
  },
  // FLUTTER
  {
    name: "Flutter",
    icon: <SiFlutter size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#038EFF"/>
  },
  // FIREBASE
  {
    name: "Firebase",
    icon: <SiFirebase size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#E0AC04"/>
  },
  // NODE JS
  {
    name: "Node.js",
    icon: <FaNode size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#06CB0B"/>
  },
  // MONGODB
  {
    name: "MongoDB",
    icon: <DiMongodb size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="03AB07"/>
  },
  // MYSQL
  {
    name: "MySQL",
    icon: <DiMysql size={PROGRAMMING_LANGUAGE_ICON_SIZE} color="#0ACBFB"/>
  },
  // GITHUB
  {
    name: "GitHub",
    icon: <SiGithub size={PROGRAMMING_LANGUAGE_ICON_SIZE}/>
  },
]

export const projects = [
  {
    title: 'AniHub',
    description: "FullStack website build with the MERN stack.",
      image: '/images/anihub.png',
      tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/Kurler3/AniHub',
    id: 0,
  },
  {
    title: 'BlogSpace',
    description:"Modern blog app using Next.js, graphQL, graphCMS (headless CMS) and TailwindCSS",
    image: '/images/blogspace.png',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS'],
    source: 'https://github.com/Kurler3/BlogSpace',
    visit: 'https://blog-space-next.vercel.app/',
    id: 1,
  },
  {
    title: 'MovieBox',
    description: "One of my first React projects. It was designed with SCSS and it's a front-end project",
    image: '/images/movie_box.png',
    tags: ['React', 'SCSS', "Movie Database API"],
    source: 'https://github.com/Kurler3/movie-box',
    visit: 'https://movieboxreact.netlify.app/',
    id: 3,
  },
  {
    title: 'MovieBox Kotlin',
    description: "Android app build with Kotlin and the latest android tech (at the time)",
    image: '/images/kotlin_movie_box.png',
    tags: ['Android', 'Java', 'Kotlin', "Movie Database API"],
    source: 'https://github.com/Kurler3/MoviesApp',
    id: 4,
  },
  {
    title: 'Flutter Instagram Clone',
    description: "Instagram clone built with Flutter and Firebase",
    image: '/images/flutter_instagram.jpg',
    tags: ['Flutter', 'Instagram', 'Firebase', 'Dart'],
    source: 'https://github.com/Kurler3/Flutter-Instagram-Clone',
    id: 5,
  },
  {
    title: 'Flutter Chat App',
    description: "Mobile chatting app build with Flutter and Firebase.",
      image: '/images/flutter_chat.png',
      tags: ['Flutter', 'Firebase'],
    source: 'https://github.com/Kurler3/Flutter-Chat-App',
    id: 2,
  },
];

export const TimeLineData = [
  {year: 2019, text: 'Flew to China to start college'},
  {year: 2019, text: 'Started learning Android dev'},
  {year: 2020, text: 'Started learning ML and DL'},
  {year: 2020, text: 'Took part in a research paper about Computer Vision'},
  {year: 2021, text: 'Started learning Web Development (Full-Stack)'},
  {year: 2022, text: 'Moved back to Portugal and got my first job as a front-end engineer'},
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
