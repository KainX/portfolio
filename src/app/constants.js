import { FaJava, FaReact } from "react-icons/fa";

export const EMAIL = "csantiago.lopez3@gmail.com";

export const SKILLS = [
    {
        icon: FaReact,
        label: "React"
    },
    {
        icon: FaJava,
        label: "Java"
    },
    {
        icon: FaReact,
        label: "React"
    },
    {
        icon: FaJava,
        label: "Java"
    },
    {
        icon: FaReact,
        label: "React"
    }
];

export const PROJECTS = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        stack: ["react", "java"],
        imageUrl: "/react_image.png"
    },
    {
        title: "Project 2",
        description: "This is a description.",
        stack: ["Nodejs", "Go"],
        imageUrl: ""
    }
]

export const JOB_EXPERIENCE = [
    {
        title: "Full stack developer",
        company: "IBM",
        date: "dec 2019 - actual",
        description: `I have extensive experience developing RESTful APIs in Java using spring boot
        with spring security, log4j, resilience4j, lombok, etc., for one of the leading banks in USA, which are utilized by various services within the
        company for credit creation, credit limit adjustments, fraud analysis, and member notifications. Additionally, I
        have worked on the development of UI applications using React and redux that consume services built with AWS
        Lambda and Step Functions. My responsibilities have included leveraging monitoring tools such as Datadog and
        Kibana for log review, as well as utilizing Kafka for event production and consumption during credit card
        assessment creation. I prioritize documentation, unit testing with junit, and integration testing with postman to
        ensure code quality standards and robust functionality.`,
        company_link: ""
    },
    {
        title: "OCC Analyst",
        company: "IBM",
        date: "dec 2017 - dec 2019",
        description: `Monitoring of production systems in SAP. Creation of tickets for alerts.`,
        company_link: ""
    },
    {
        title: "Full stack developer",
        company: "IBM",
        date: "apr 2016 - dec 2017",
        description: `I took charge of updating product listings on the website of one of the world's largest toy companies.
        Additionally, I implemented new functionalities across their websites using HTML, CSS, and jQuery. My role
        involved ensuring seamless updates and enhancements to enhance user experience and drive engagement on
        their digital platforms.`,
        company_link: ""
    },
    {
        title: "Android developer",
        company: "Siteldi",
        date: "jun 2014 - jun 2015",
        description: `As a native Android developer, I designed and developed two successful applications from scratch to launch.
        One of these applications is a local restaurant directory, while the other is tailored for use by restaurant waitstaff.
        My expertise includes utilizing sockets, geolocation, OAuth for authentication, and SQLite as the database. I
        have successfully published both apps on the marketplace and have been responsible for their ongoing
        maintenance and updates.`,
        company_link: ""
    }
]