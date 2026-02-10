import { Code, BarChart, Terminal, Database, Globe } from 'lucide-react';

export const experiences = [
    {
        title: "Data Analyst & Web Developer Intern",
        company: "Pioneer Foundation Engineers Pvt. Ltd.",
        period: "Dec 2025 - Current",
        description: [
            "Developed and managed a Monitor Bot to track system and process performance.",
            "Created Flight Dashboard websites for real-time data visualization.",
            "Supported DGPS (Differential GPS) systems for data handling and monitoring.",
            "Wrote automation scripts to streamline repetitive enterprise workflows.",
            "Designed interactive dashboards for business insights and reporting."
        ]
    }
];

export const education = [
    {
        degree: "Bachelor in Data Science",
        school: "S.M. Shetty Powai, Mumbai",
        period: "06/2025",
        details: "6.68 GPA"
    },
    {
        degree: "HSC (Science)",
        school: "S.M. Shetty Powai",
        period: "04/2022"
    },
    {
        degree: "SSC (Secondary Education)",
        school: "Samata Vidya Mandir, Mumbai",
        period: "03/2020"
    }
];

export const skills = [
    { name: "Python & JavaScript", level: 90, icon: Code },
    { name: "Data Analysis & Viz", level: 85, icon: BarChart },
    { name: "Automation Scripting", level: 88, icon: Terminal },
    { name: "Power BI & Excel", level: 85, icon: Database },
    { name: "MySQL Management", level: 80, icon: Database },
    { name: "Web Development", level: 75, icon: Globe },
];

export const certifications = [
    {
        title: "Deloitte Australia Data Analytics Job Simulation",
        issuer: "Forage",
        date: "Oct 2025",
        image: "/certs/deloitte.pdf",
        verifyLink: "#"
    },
    {
        title: "Data Analytics & Visualization",
        issuer: "Accenture (Forage)",
        date: "2025",
        image: "/certs/accenture.pdf"
    },
    {
        title: "Data Science & Analytics Workshop",
        issuer: "Jobaaj Learnings",
        date: "2024",
        image: "/certs/jobaaj.jpg"
    },
    {
        title: "Tata Group Data Analytics Job Simulation",
        issuer: "Tata iQ (Forage)",
        date: "2025",
    },
    {
        title: "Excel A–Z (Premium Award)",
        issuer: "Jobaaj Learnings",
        date: "2022",
        image: "/certs/excel.jpg"
    },
    {
        title: "Inventory Management with Excel",
        issuer: "Juno",
        date: "2022",
        image: "/certs/juno.pdf"
    }
];
