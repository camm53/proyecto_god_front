import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Inicio",
    url: "/",
  },
  {
    id: "1",
    title: "Contacto",
    url: "#contacto",
  },
  
  {
    id: "2",
    title: "Servicios",
    url: "#servicios",
  },
  {
    id: "3",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "tel",
    iconUrl: discordBlack,
    url: "9841672057",
    numero: "9841445909",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/yourhandle",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://instagram.com/yourhandle", 
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://facebook.com/yourpage",
  },
  {
    id: "5",
    title: "YouTube",
    
    url: "https://youtube.com/channel/yourchannelid",
  },
];


export const servicios = [
  {
    id: "0",
    title: "Aires Acondicionados",
    url: "#aires-acondicionados",
    shortDescription: "Instalación y mantenimiento de sistemas de aire acondicionado.",
    longDescription:
      "Servicio especializado en el manejo de sistemas de aire acondicionado, incluyendo instalación y mantenimiento. Diseñado para garantizar comodidad en cualquier espacio, este servicio asegura un ambiente controlado y agradable, adaptándose a las necesidades específicas de cada cliente.",
    imagen:"https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    imagenhorizontal:"https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "1",
    title: "Mantenimiento de Instalaciones Eléctricas, Sanitarias, Hidráulicas",
    url: "#mantenimiento-instalaciones",
    shortDescription: "Cuidado integral de sistemas eléctricos, sanitarios e hidráulicos.",
    longDescription:
      "Ofrecemos mantenimiento completo para instalaciones eléctricas, sanitarias e hidráulicas. Este servicio busca prolongar la vida útil de los sistemas, asegurar su funcionamiento óptimo y resolver problemas comunes de forma eficiente y profesional.",
      imagen:"https://images.pexels.com/photos/9679179/pexels-photo-9679179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagenhorizontal:"https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    title: "Electricidad Media y Baja Tensión",
    url: "#electricidad",
    shortDescription: "Especialistas en sistemas eléctricos de media y baja tensión.",
    longDescription:
      "Un servicio dedicado a la instalación y mantenimiento de sistemas eléctricos en media y baja tensión. Perfecto para garantizar la seguridad, funcionalidad y eficiencia de las instalaciones en diversos entornos, adaptándose a los requerimientos específicos del cliente.",
      imagen:"https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagenhorizontal:"https://images.pexels.com/photos/10130754/pexels-photo-10130754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    title: "Tablaroca",
    url: "#tablaroca",
    shortDescription: "Instalación profesional de sistemas de tablaroca.",
    longDescription:
      "Realizamos instalaciones de tablaroca para diversos usos, como divisiones, techos y acabados. Este servicio permite transformar espacios de manera rápida y eficiente, logrando resultados visualmente atractivos y funcionales.",
      imagen:"https://cursoscecati.info/wp-content/uploads/2023/08/%C2%BFPor-que-elegir-un-curso-de-Tablaroca-CECATI.jpg",
      imagenhorizontal:"https://uniblock.com.mx/wp-content/uploads/2024/05/Tablaroca-Uniblock-Basecoat-Uniblock-1-1-1024x704.jpg",
    },
  {
    id: "4",
    title: "Paneles Solares y Energías Renovables",
    url: "#paneles-solares",
    shortDescription: "Soluciones sostenibles en energías renovables.",
    longDescription:
      "Brindamos servicios relacionados con paneles solares y energías renovables. Este servicio está orientado a promover el uso de tecnologías limpias y sostenibles, contribuyendo al ahorro energético y al cuidado del medio ambiente.",
      imagen:"https://images.pexels.com/photos/9875410/pexels-photo-9875410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagenhorizontal:"https://images.pexels.com/photos/8853539/pexels-photo-8853539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  {
    id: "5",
    title: "Construcción",
    url: "#construccion",
    shortDescription: "Proyectos de construcción desde la planeación hasta la ejecución.",
    longDescription:
      "Ofrecemos servicios de construcción para proyectos de cualquier escala. Desde los primeros pasos de diseño hasta la entrega final, trabajamos para materializar ideas en estructuras funcionales, duraderas y de calidad.",
      imagen:"https://images.pexels.com/photos/6474494/pexels-photo-6474494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagenhorizontal:"https://images.pexels.com/photos/9964624/pexels-photo-9964624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  {
    id: "6",
    title: "Arquitectura",
    url: "#arquitectura",
    shortDescription: "Diseños arquitectónicos funcionales y estéticos.",
    longDescription:
      "Servicio de arquitectura enfocado en crear diseños que combinen estética y funcionalidad. Trabajamos en proyectos personalizados que se adaptan a las necesidades y gustos de cada cliente, con atención especial a los detalles.",
      imagen:"https://images.pexels.com/photos/7641867/pexels-photo-7641867.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      imagenhorizontal:"https://images.pexels.com/photos/7641859/pexels-photo-7641859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  {
    id: "7",
    title: "Impermeabilizado",
    url: "#impermeabilizado",
    shortDescription: "Protección contra filtraciones en techos y estructuras.",
    longDescription:
      "Ofrecemos soluciones de impermeabilización para proteger estructuras contra la humedad y filtraciones. Este servicio asegura la durabilidad de las construcciones y mejora su resistencia a las condiciones climáticas.",
      imagen:"https://t4.ftcdn.net/jpg/03/99/52/97/360_F_399529738_cJOsJrYAX4umigUKnVxLIuQGUububDh4.jpg",
      imagenhorizontal:"https://st2.depositphotos.com/1657792/42752/i/450/depositphotos_427520034-stock-photo-building-resins-waterproofing-terraces-solving.jpg",
    },
  {
    id: "8",
    title: "Pintura",
    url: "#pintura",
    shortDescription: "Acabados de pintura de alta calidad para interiores y exteriores.",
    longDescription:
      "Servicio de pintura enfocado en proporcionar acabados duraderos y de alta calidad. Ideal para renovar espacios interiores y exteriores, con una variedad de opciones que se adaptan a diferentes estilos y preferencias.",
      imagen:"https://images.pexels.com/photos/5799018/pexels-photo-5799018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imagenhorizontal:"https://images.pexels.com/photos/2293819/pexels-photo-2293819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  {
    id: "9",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
    imagen:"https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imagenhorizontal:"",
  },
  {
    id: "10",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const slides = [
  {
    imageUrl: 'https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
    title: 'Lorem ipsum dolor',
    role: 'Web Designer',
    description: 'Lorem ipsum dolor sit amet consectetur.sum dolor sit amet consectetur.sum dolor sit amet consectetur.sum dolor sit amet consectetur.sum dolor sit amet consectetur.sum dolor sit amet consectetur.sum dolor sit amet consectetur.',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
    title: 'Lorem ipsum dolor',
    role: 'Web Designer',
    description: '',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
    title: 'Lorem ipsum dolor',
    role: 'Web Designer',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/8422523/pexels-photo-8422523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
    title: 'Lorem ipsum dolor',
    role: 'Web Designer',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
    title: 'Lorem ipsum dolor',
    role: 'Web Designer',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
    title: 'Lorem ipsum dolor',
    role: 'Web Designer',
  },
];
