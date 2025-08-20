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
        description: 'Dans une structure de quatre employés en télétravail, j\'ai contribué à divers projets web et CRM, de la correction de bugs à la refonte complète de sites. J\'ai notamment co-développé un CRM en autonomie, en gérant la planification, le suivi des tâches (Wrike) et la coordination via daily et weekly meetings, renforçant ainsi mon sens de l\'initiative.',
      },
      Macompta:{
        title: 'MaCompta.fr',
        role: 'Développeur back',
        description: 'Au sein d\'une entreprise de 40 collaborateurs, j\'ai intégré une équipe Agile de 6 personnes appliquant des processus rigoureux (daily, weekly, jalons), des développeurs front, un testeur, une scrum master et deux développeur back. J\'ai co-travaillé avec mon maître d\'apprentissage sur un projet stratégique de refonte applicative, en étroite collaboration avec les autres business units.',
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