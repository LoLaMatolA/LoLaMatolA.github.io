
  
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
    {
      title: "IBM Quantum Explorers",
      type: "Certificate Course",
      icon: 'src/assets/staricon.png',
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        
      ],
    },
    {
      title: "InternPe - Web Developer",
      type: "Internship",
      icon: 'src/assets/staricon.png',
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023",
      points: [
        
      ],
    },
    {
      title: "TechnoHacks - Data Analytics",
      type: "Internship",
      icon: 'src/assets/staricon.png',
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        
      ],
    },
    
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
  ];


  
  export { services,experiences, projects, hobbies };