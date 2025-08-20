export const mySocials = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/chu-quang-th%E1%BA%AFng-b1995a286/',
    icon: '/Portfolio/assets/linkedIn.png'
  },
  {
    name: 'Gmail',
    href: 'chuthang766@gmail.com',
    icon: '/Portfolio/assets/gmail.png'
  }
];
export const experiences = [
  {
    title: 'Fullstack Developer Intern at Sapo',
    job: 'Java Backend Intern',
    date: 'November 2023 – March 2024',
    contents: [
      'Gained solid foundation in Java Core, object-oriented programming, multithreading, and React for frontend development.',
      'Learned database design principles, practiced SQL queries, and applied them in real-world scenarios.',
      'Studied and implemented RESTful API design, ensuring scalable and maintainable service development.',
      'Explored message broker technologies including Kafka and RabbitMQ for building distributed systems.',
      'Contributed to the Sapo FnB project by designing and developing a reporting export service, enabling generation of Excel-based reports for business operations.'
    ]
  },
  {
    title: 'Front-End Developer at BMB Soft',
    job: 'Front-End Developer',
    date: 'August 2024 – Present',
    contents: [
      'Contributed to an e-commerce project by designing product pages and developing a content management system (CMS) for store management.',
      'Implemented a CMS to handle content, user interactions, and workflow management for a WhatsApp chatbot serving customers in Argentina.',
      'Developed front-end microservices for Buildcorp (Australia) using SharePoint Framework to create management dashboards covering project tracking, financial revenue, HR, and company operations.'
    ]
  },
  {
    title: 'Remote Job',
    job: 'Fullstack Developer',
    date: 'February 2025 – Present',
    contents: [
      'Designed and developed an online exam preparation platform for English certifications (IELTS, TOEIC), supporting all test modules: Writing, Reading, Listening, Speaking, and mixed-mode practice.',
      'Implemented advanced features such as vocabulary highlighting, performance analytics, test history tracking, and detailed result breakdowns for students.',
      'Built an admin dashboard with functionalities for creating and managing exams, handling users and courses, and generating statistical and analytical reports on student performance.'
    ]
  }
];
export const myProjects = [
  {
    id: 1,
    title: 'Educraft (Job Remote)',
    description:
      'Designed and developed an online exam preparation platform for English certifications (IELTS, TOEIC), supporting all test modules: Writing, Reading, Listening, Speaking, and mixed-mode practice.',
    subDescription: [
      'Implemented advanced features such as vocabulary highlighting, performance analytics, test history tracking, and detailed result breakdowns for students.',
      'Built an admin dashboard with functionalities for creating and managing exams, handling users and courses, and generating statistical and analytical reports on student performance.',
      'Integrated role-based access control (RBAC) to ensure secure and fine-grained permissions for students, teachers, and administrators.',
      'Containerized the application using Docker and automated deployment pipelines with GitLab CI/CD for seamless integration and scalable delivery.'
    ],
    href: 'https://educraft.icsvietnam.com/vi-VN/',
    image: '/Portfolio/assets/educraft.png',
    tags: [
      {
        id: 1,
        name: 'Nextjs',
        path: '/Portfolio/assets/nextjs.svg'
      },
      {
        id: 2,
        name: 'Spring',
        path: '/Portfolio/assets/spring.svg'
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/Portfolio/assets/mysql.svg'
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/Portfolio/assets/tailwindcss.svg'
      },
      {
        id: 5,
        name: 'Vitejs',
        path: '/Portfolio/assets/vitejs.svg'
      },
      {
        id: 6,
        name: 'Docker',
        path: '/Portfolio/assets/docker.svg'
      }
    ]
  },
  {
    id: 2,
    title: 'Social Charities',
    description:
      'Developed a modern social networking platform for charity and volunteering, featuring real-time interaction, donation management, and event participation with seamless ZaloPay integration.',
    subDescription: [
      'Implemented authentication and user profile management with JWT, including privacy settings and avatar customization.',
      'Built core functionalities for creating and managing charity projects and events, with progress tracking, updates, and volunteer participation.',
      'Developed interactive social features including news feed, posts, likes, shares, comments, friend requests, and real-time chat using Firebase Firestore.',
      'Integrated donation system with ZaloPay API, providing intuitive donation flow, transaction history, and confirmation.',
      'Enabled real-time updates for chat, notifications, friend requests, donations, and event participation via Firebase and WebSockets.',
      'Containerized the frontend using Docker and optimized for SEO and performance with Next.js 14 (App Router + Server Actions).'
    ],
    href: 'https://datn-fe-3xyo.onrender.com',
    image: '/Portfolio/assets/charity1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/Portfolio/assets/nextjs.svg'
      },
      {
        id: 2,
        name: 'Nodejs',
        path: '/Portfolio/assets/node.svg'
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/Portfolio/assets/mongo.svg'
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/Portfolio/assets/tailwindcss.svg'
      }
    ]
  },
  {
    id: 3,
    title: 'Social Charities App',
    description:
      'Built a cross-platform mobile application using React Native for managing charity projects, user accounts, and donation activities.',
    subDescription: [
      'Developed features for creating, updating, and tracking charity projects directly within the mobile app.',
      'Implemented user management including registration, authentication, profile customization, and role-based access control (RBAC).',
      'Integrated donation system with secure payment flow and transaction history for transparency.',
      'Designed an intuitive mobile UI/UX optimized for both iOS and Android devices, ensuring seamless user experience.'
    ],
    href: '',
    image: '/Portfolio/assets/social_app.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/Portfolio/assets/react.svg'
      },
      {
        id: 2,
        name: 'Nodejs',
        path: '/Portfolio/assets/node.svg'
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/Portfolio/assets/mongo.svg'
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/Portfolio/assets/firebase.png'
      }
    ]
  },
  {
    id: 4,
    title: 'Panda Shop',
    description:
      'Developed a full-featured Ecommerce web application using React, providing a modern storefront, secure checkout, and an integrated admin dashboard for ecommerce management.',
    subDescription: [
      'Implemented core shopping features including homepage banners, product listings with filters & search, product detail pages, shopping cart with persistent storage, and secure checkout flow.',
      'Built user authentication system with login, registration, profile management, and order history tracking.',
      'Developed an admin dashboard with revenue statistics, user management, product CRUD operations with Firebase Storage integration, and transaction monitoring.',
      'Added advanced CMS functionalities such as banner management and customer feedback handling to support business operations.',
      'Utilized Redux Toolkit for state management, React Router for navigation, and integrated Recharts for real-time analytics and reporting.'
    ],
    href: 'https://e-commerceclient-4as8.onrender.com',
    image: '/Portfolio/assets/ecomerce.png',
    tags: [
      {
        id: 1,
        name: 'Reactjs',
        path: '/Portfolio/assets/react.svg'
      },
      {
        id: 2,
        name: 'Nodejs',
        path: '/Portfolio/assets/node.svg'
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/Portfolio/assets/mongo.svg'
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/Portfolio/assets/firebase.svg'
      }
    ]
  },
  {
    id: 5,
    title: 'Admin Dashboard',
    description:
      'Developed a React-based CMS dashboard for ecommerce management, enabling administrators to analyze performance and manage users, products, transactions, banners, and feedback in a centralized system.',
    subDescription: [
      'Implemented interactive analytics dashboard with revenue tracking, growth statistics, product sales, new user registrations, and latest transactions using Chart.js.',
      'Built management modules for users, products (CRUD with Firebase Storage integration), transactions, banners, and customer feedback.',
      'Designed a responsive and intuitive UI with Material UI and React Router for seamless navigation.',
      'Integrated secure image storage with Firebase and API communication via Axios for smooth data handling.'
    ],
    href: '',
    image: '/Portfolio/assets/admin.png',
    tags: [
      {
        id: 1,
        name: 'Reactjs',
        path: '/Portfolio/assets/react.svg'
      },
      {
        id: 2,
        name: 'Nodejs',
        path: '/Portfolio/assets/node.svg'
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/Portfolio/assets/mongo.svg'
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/Portfolio/assets/firebase.svg'
      }
    ]
  }
];
