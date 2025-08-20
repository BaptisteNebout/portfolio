export default {
  Hero: {
    title: 'Fullstack Software Developer',
    description1: 'Curious fullstack developer, I design projects in ',
    description2: ', with API and database integration '
  },
  Status: {
    Experiences: {
      title: 'My Professional Experiences',
      SLD: {
        title: 'Studio Little Dreams',
        role: 'Project Manager and Frontend Developer',
        description: 'Within a small remote team of four employees, I contributed to various web and CRM projects, from bug fixing to full website redesigns. I notably co-developed a CRM independently, managing planning, task tracking (Wrike), and coordination through daily and weekly meetings, which strengthened my sense of initiative.',
      },
      Macompta: {
        title: 'MaCompta.fr',
        role: 'Backend Developer',
        description: 'In a company of 40 employees, I joined an Agile team of 6 people following rigorous processes (daily, weekly, milestones), including frontend developers, a tester, a scrum master, and two backend developers. I worked closely with my mentor on a strategic application redesign project, in close collaboration with other business units.',
      }
    },
    ProjetPerso: {
      title: 'My Personal Projects',
      Firebase: {
        title: 'Firebase with Angular',
        description: 'Built a simple application mainly focused on implementing authentication and user management.',
      },
      BotDiscord: {
        title: 'Discord Bot',
        description: 'Developed Discord bots for automated data retrieval from a specific website and other various commands.',
      },
      JavaSpringBoot: {
        title: 'Java Spring Boot',
        description: 'Created a backend for data retrieval with the goal of building a social network.',
      }
    },
    Etudes: {
      title: 'My Studies',
      BTS: {
        title: 'BTS',
        description: 'IT Services for Organizations, option B SLAM',
      },
      Bachelor: {
        title: 'Bachelor',
        description: 'Software Engineering Manager',
      },
      Master: {
        title: 'Master',
        description: 'Manager in Information Systems Architecture and Software Applications',
      }
    }
  },
  Skills: {
    badge: 'Skills',
    title: 'I have worked with...',
    FrontEnd: {
      title: 'Frontend',
      description1: 'Built modern and responsive interfaces with ',
      and: 'and',
      description2: ', on personal, academic, and professional projects.',
    },
    BackEnd: {
      title: 'Backend',
      description1: 'Developed applications in ',
      with: 'with ',
      and: 'and',
      description2: ', with a focus on performance, scalability, and integrations with third-party APIs.',
    },
    BDD: {
      title: 'Databases',
      description1: 'Handled data management with ',
      and: 'and',
      description2: ', providing reliable solutions tailored to project needs.',
    },
    Deploiement: {
      title: 'Deployment',
      description1: 'Implemented CI/CD processes with ',
      and: 'and',
      description2: ', both in companies and academic projects, to automate deployment and ensure reliable deliveries.',
    },
    GestionDeProjet: {
      title: 'Project Management',
      description1: 'I created',
      planning: 'schedules',
      description2: 'and managed',
      budget: 'budgeting',
      description3: 'based on project requirements during my studies. In companies, I collaborated in teams using planning and tracking tools such as ',
      description4: ', to effectively organize tasks and projects.',
    }
  },
  Contact: {
    badge: 'Contact Me',
    title: 'I would be happy to get in touch with you.',
    linkedin: 'Baptiste Nebout',
    phone: 'Cell phone',
    mail: 'Mail',
    copie: 'Copied !'
  }
} as const
