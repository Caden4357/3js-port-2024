import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    blazing,
    coding_dojo,
    chatSocket,
    imdbClone,
    storyline,
    threejs,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "python",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
        name: "java",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "aws",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
];

const experiences = [
    {
        title: "Kitchen Manager",
        company_name: "Blazing Onion",
        icon: blazing,
        iconBg: "#F5F5F5",
        date: "Jan 2017 - Dec 2021",
        points: [
            "Coordinating and supervising all kithcen staff to ensure the highest quality of food and service.",
            "Creating and maintaining a safe and clean kitchen environment.",
            "Managing inventory and ordering supplies.",
            "Training and developing kitchen staff to ensure the highest quality of food and service."
        ],
    },
    {
        title: "Assistant Instructor",
        company_name: "Coding Dojo",
        icon: coding_dojo,
        iconBg: "#E6DEDD",
        date: "Dec 2021 - Aug 2022",
        points: [
            "Assisting students with understanding and implementing coding concepts.",
            "Providing feedback to students and helping them improve their coding skills.",
            "Assisting with curriculum development and lesson planning.",
            "Mentoring students and helping them prepare for job interviews.",
            "Using metrics to track student progress and identify areas of improvement. While working closely with Instructors and student support to ensure student success."
        ],
    },
    {
        title: "Software Engineer / Lead Instructor",
        company_name: "Coding Dojo",
        icon: coding_dojo,
        iconBg: "#E6DEDD",
        date: "Aug 2022 - Present",
        points: [
            "Teaching full-stack web development using different technologies such as Python, Flask, Django, JavaScript, React, Node.js, Express, and MongoDB.",
            "Assisting students with understanding and implementing coding concepts.",
            "Providing feedback to students and helping them improve their coding skills",
            "Assisting with curriculum development and lesson planning.",
            "Working closely with Instructors and student support to ensure student success.",
            "Using metrics to track student progress and identify areas of improvement.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "IMDb Clone",
        description:
            "Web-based platform that allows users to search for movies or tv shows, view details about a movies or shows and view the cast and crew.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "",
            },
            {
                name: "TMDb API",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: imdbClone,   
        source_code_link: "https://github.com/Caden4357/imdb-clone",
        deployed_link: 'https://imdb-clone-five-black.vercel.app/' 
    },
    {
        name: "Chat.io",
        description:
            "Web application that enables users to chat with each others in real-time. Users can join and leave rooms freely. While in a room users can chat with each other. Chat.io users secure authentication and authorization with bcrypt and jsonwebtoken.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
            {
                name: "Socket.io",
                color: "pink-text-gradient",
            },
        ],
        image: chatSocket,
        source_code_link: "https://github.com/Caden4357/socketIntro/tree/master/socket-intro",
    },
    {
        name: "Storyline",
        description:
            "A place for people to share their stories and experiences. Users can create, read, update, and delete their stories. Users can also like and comment on other users stories.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "SQL",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: storyline,
        source_code_link: "https://github.com/Caden4357/ProjectsAndAlgos/tree/main/Week1/ProjectWireframe/storyline/storyline",
    },
];

export { services, technologies, experiences, testimonials, projects };