import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    korek,
    downloads,
    industry,
    meta,
    starbucks,
    poster,
    tesla,
    shopify,
    carrent,
    jobit,
    yt,
    tripguide,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Explore',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Poster',
        icon: poster,
    },
    {
        title: 'Korek Visit Video',
        icon: yt,
    },
    {
        title: 'Industry Talk Report',
        icon: backend,
    },
    {
        title: 'Content Creator',
        icon: creator,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },

    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
];

const experiences = [
    {
        title: 'Industrial Talk Poster',
        company_name: 'Technology & Information',
        icon: starbucks,
        bg: poster,
        iconBg: '#383E56',
        date: '2024',
        points: [
            'Download',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'React Native Developer',
        company_name: 'Tesla',
        icon: tesla,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Feb 2022',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Shopify',
        icon: shopify,
        iconBg: '#383E56',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Full stack Developer',
        company_name: 'Meta',
        icon: meta,
        iconBg: '#E6DEDD',
        date: 'Jan 2023 - Present',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
];

const testimonials = [
    //     {
    //         testimonial:
    //             'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    //         name: 'Sara Lee',
    //         designation: 'CFO',
    //         company: 'Acme Co',
    //         image: 'https://randomuser.me/api/portraits/women/4.jpg',
    //     },
    //     {
    //         testimonial:
    //             "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //         name: 'Chris Brown',
    //         designation: 'COO',
    //         company: 'DEF Corp',
    //         image: 'https://randomuser.me/api/portraits/men/5.jpg',
    //     },
    //     {
    //         testimonial:
    //             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //         name: 'Lisa Wang',
    //         designation: 'CTO',
    //         company: '456 Enterprises',
    //         image: 'https://randomuser.me/api/portraits/women/6.jpg',
    //     },
];

const projects = [
    {
        name: 'Industrial talk poster',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: poster,
        source_code_link:
            'https://drive.google.com/file/d/1KsrZLanpDPKL6PYrt4lUFufCKGcRVJVV/view?usp=drive_link',
    },
    {
        name: 'Industrial talk report',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: industry,
        source_code_link:
            'https://drive.google.com/file/d/1hBxQ-kEu3D8j6YZb1jhbZ0_EcsyuQCyD/view?usp=drive_link',
    },
    {
        name: 'Korek visit video',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'UTM',
                color: 'pink-text-gradient',
            },
            {
                name: 'QIU',
                color: 'blue-text-gradient',
            },
        ],
        image: korek,
        source_code_link: 'https://www.youtube.com/watch?v=yIqDeFATna0',
    },
    // {
    //     name: 'Design Prototype',
    //     description: 'lorem ipsum qqqdsfwwweeeee',
    //     tags: [
    //         {
    //             name: 'UTM',
    //             color: 'pink-text-gradient',
    //         },
    //         {
    //             name: 'QIU',
    //             color: 'blue-text-gradient',
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: 'https://github.com/',
    // },
];

export { services, technologies, experiences, testimonials, projects };
