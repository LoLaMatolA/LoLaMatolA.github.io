
  
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
  
  const hobbies=[
    {
      hobby:"Dance",
      description:"",
      
    },
    {
      hobby:"Drawing",
      description:"",
      
    },
    {
      hobby:"Cooking",
      description:"",
      
    },
    {
      hobby:"Embroidery",
      description:"",
      
    },
  ];

  const services = [
    {
      title: "React Developer",
      icon:'src/assets/react.png' ,
    },
    {
      title: "Python Developer",
      icon: 'src/assets/python.png',
    },
    {
      title: "Web Developer",
      icon:'src/assets/webdev.png',
    },
    {
      title: "Java",
      icon: 'src/assets/java.png',
    },
  ];

  const social =[
    {
      title:"LinkedIn",
      icon:'src/assets/linkedin.png' ,
      link:'https://www.linkedin.com/in/shruti-yadav-027a36284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxctmK4uRQcah8DM12hRSWg%3D%3D',
    },
    {
      title:"GitHub",
      icon: 'src/assets/github.png',
      link:'https://github.com/LoLaMatolA',
    },
  ];


  const experiences = [
    {
      title: "Samsung Innovation Campus - Big Data",
      type: "Certificate Course",
      icon: 'src/assets/staricon.png',
      iconBg: "#383E56",
      date: "November 2022 - January 2023",
      points: [
       
      ],
    },
    
    // {
    //   title: "InternPe - Web Developer",
    //   type: "Internship",
    //   icon: 'src/assets/staricon.png',
    //   iconBg: "#E6DEDD",
    //   date: "July 2023 - August 2023",
    //   points: [
        
    //   ],
    // },
    {
      title: "TechnoHacks - Data Analytics",
      type: "Internship",
      icon: 'src/assets/staricon.png',
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        
      ],
    },
    {
      title: "Google Cloud Study Jam",
      type: "Certificate Course",
      icon: 'src/assets/staricon.png',
      iconBg: "#E6DEDD",
      date: "September 2023",
      points: [
        "Currently pursuing M.Tech in Computer Science at IIT Guwahati.",
        "Exploring various domains including software development, AI, and cybersecurity.",
      ],
    }
    
  ];
  
  const projects = [
    {
      name: "GameOfLife-Simulation",
      description:
        "A python application to implement Conway's Game of Life. Uses TKinter library for GUI.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TKinter",
          color: "green-text-gradient",
        },
        
      ],
      image: 'src/assets/GameOfLife.png',
      source_code_link: "https://github.com/LoLaMatolA/GameOfLife",
    },
    {
      name: "Virtual Self-driving Car Simulator",
      description:
        "A model to train primitive car model to park itself in a pre-determined spot. Uses unity's MLagents library. Minor project in college.",
      tags: [
        {
          name: "UNITY",
          color: "blue-text-gradient",
        },
        {
          name: "ML-Agents",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: 'src/assets/virtualsdc.png',
      source_code_link: "https://github.com/LoLaMatolA/Virtual-Self-Driving-Car",
    },
    {
      name: "React Portfolio",
      description:
        "My portfolio build using react, three.js, tilt.js, HTML, Tailwind-CSS and JavaScript.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: 'src/assets/portfolio.png',
      source_code_link: "https://github.com/LoLaMatolA/Portfolio",
    },
    {
      name: "Heart Rate Monitor with React Website",
      description:
        "A heart rate monitoring system using Arduino that tracks users' pulse in real time. The data is displayed and logged through a React-based web dashboard, allowing continuous monitoring and user history tracking.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Arduino",
          color: "orange-text-gradient",
        }
      ],
      image: 'src/assets/monitor.png',
      source_code_link: "https://github.com/LoLaMatolA/Major_Project_Heart_Rate_Monitor",
    },
  ];


  
  export { services,experiences, projects, hobbies, social };