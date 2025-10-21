export default {
  Hero:{
    title: 'Développeur Logiciel Fullstack',
    description1: 'Développeur fullstack curieux, je conçois des projets en ',
    description2: ', avec intégration d\'API et BDD '
  },
  Status:{
    Experiences: {
      title:'Mes expériences professionnelles',
      SLD: {
        title: 'Studio Little Dreams',
        role: 'Chef de projet et Développeur front',
        description1: 'Petite structure de 4 employés, organisation 100% remote',
        description2: 'Coordination via daily & weekly meetings + suivi des tâches avec Wrike',
        description3: 'Projet principal : co-développement d\'un CRM complet et refonte de sites web',
        description4: 'Contribution : développement en autonomie, gestion de la planification, corrections et maintenance',
      },
      Macompta:{
        title: 'MaCompta.fr',
        role: 'Développeur back',
        description1: 'Entreprise de 40 collaborateurs au sein d\'une équipe Agile de 6 personnes (scrum master, testeur, dev front & back)',
        description2: 'Collaboration en méthode Agile (daily, weekly, jalons) avec les business units',
        description3: 'Projet principal : refonte applicative stratégique',
        description4: 'Contribution : développement back-end et travail conjoint avec le chef de projet backend',
      }
    },
    ProjetPerso: {
      title: 'Mes projets perso',
      Firebase:{
        title: 'Firebase avec Angular',
        description: 'Réalisation d\'une application simple surtout axée sur la mise en place de l\'authentification et la gestion des utilisateurs.',
      },
      BotDiscord:{
        title: 'Bot discord',
        description: 'Création de bots Discord pour la récupération d\'information automatisée sur un site spécifique et d\'autres diverses commandes.',
      },
      JavaSpringBoot:{
        title: 'Java SpringBoot',
        description: 'Création d\'un back pour la récupération de données dans le but de créer un réseau social.',
      }
    },
    Etudes: {
      title: 'Mes études',
      BTS: {
        title: 'BTS',
        description: 'Services informatiques aux organisations, option B SLAM',
      },
      Bachelor:{
        title: 'Bachelor',
        description: 'Responsable en Ingénierie Logicielle',
      },
      Master:{
        title: 'Master',
        description: 'Manager en architecture et applications logicielles des SI',
      }
    }
  },
  Skills: {
    badge: 'Compétences',
    title: 'J\'ai pu travailler sur...',
    FrontEnd:{
      title: 'Front-end',
      description1: 'Création d\'interfaces modernes et réactives avec ',
      and: 'et',
      description2: ', sur des projets personnels, académiques et professionnels.',
    },
    BackEnd:{
      title: 'Back-end',
      description1: 'Développement d\'applications en',
      with:'avec ',
      and: 'et',
      description2: ', avec une approche orientée performance et évolutivité, et des connexions à des API tiers.',
    },
    BDD:{
      title: 'Base de données',
      description1: 'Gestion de données avec ',
      and: 'et',
      description2: ', pour des solutions fiables et adaptées aux besoins des projets.',
    },
    Deploiement:{
      title: 'Déploiement',
      description1: 'J\'ai mis en place des processus de CI/CD avec ',
      and: 'et',
      description2: ', aussi bien en entreprise que dans le cadre de projets d\'études, afin d\'automatiser le déploiement et de fiabiliser les livraisons.',
    },
    GestionDeProjet:{
      title: 'Gestion de projet',
      description1: 'J\'ai établi des ',
      planning: 'plannings',
      description2: 'et assuré la ',
      budget: 'budgétisation',
      description3: ' à partir d\'un cahier des charges lors de mes études. En entreprise, j\'ai collaboré en équipe grâce à des outils de planification et de suivi comme ',
      description4: ', pour organiser efficacement les tâches et projets.',
    }
  },
  Contact:{
    badge:'Me contacter',
    title:'Je serais ravi d\'échanger avec vous.',
    linkedin: 'Baptiste Nebout',
    phone:'Téléphone portable',
    mail:'Email',
    copie: 'Copié !'
  }
} as const