export interface OpportunityDetail {
  id: string;
  slug: string;
  title: string;
  organization: string;
  country: string;
  region: "AFRICA" | "EUROPE" | "AMERICA" | "ASIA" | "MIDDLE_EAST" | "OCEANIA" | "GLOBAL";
  category: "scholarships" | "fellowships" | "grants" | "internships" | "conferences" | "trainings";
  funding: "FULLY_FUNDED" | "PARTIALLY_FUNDED" | "FREE" | "PAID";
  targetLevel: "HIGH_SCHOOL" | "BACHELOR" | "MASTER" | "PHD" | "POSTDOC" | "PROFESSIONAL" | "ENTREPRENEUR" | "RESEARCHER" | "YOUTH";
  fieldOfStudy: string;
  deadline: string;
  officialLink: string;
  summary: string;
  description: string;
  eligibility: string[];
  documents: string[];
  benefits: string[];
  procedure: string[];
}

export const opportunitiesList: OpportunityDetail[] = [
  {
    id: "fcs-swiss-excellence-2026",
    slug: "bourse-excellence-gouvernement-suisse",
    title: "Bourses d'Excellence de la Confédération Suisse",
    organization: "Commission fédérale des bourses pour étudiants étrangers (CFBE)",
    country: "Suisse",
    region: "EUROPE",
    category: "scholarships",
    funding: "FULLY_FUNDED",
    targetLevel: "PHD",
    fieldOfStudy: "Tous domaines de recherche académique",
    deadline: "2026-12-15",
    officialLink: "https://www.sbfi.admin.ch/sbfi/fr/home/formation/bourses-et-prets/bourses-d-etudes-de-la-confederation.html",
    summary: "Bourses d'excellence pour chercheurs et doctorants étrangers d'exception dans les universités publiques suisses.",
    description: "La Confédération suisse offre chaque année des bourses d'excellence dans le domaine de la recherche et des arts afin de promouvoir les échanges internationaux et la coopération scientifique avec plus de 180 pays.",
    eligibility: [
      "Diplôme universitaire de niveau Master ou équivalent obtenu avant le début de la bourse",
      "Projet de recherche valide accepté par un professeur superviseur en Suisse",
      "Excellence académique attestée et maîtrise de la langue d'enseignement (Anglais, Français ou Allemand)",
    ],
    documents: [
      "Formulaire officiel de candidature de la CFBE",
      "Curriculum Vitae complet avec liste de publications",
      "Lettre de motivation détaillée",
      "Proposition de recherche scientifique (max 5 pages)",
      "Lettre d'acceptation officielle du professeur d'accueil en Suisse",
      "Copies certifiées conformes des diplômes et relevés de notes",
    ],
    benefits: [
      "Allocation mensuelle de subsistance",
      "Exonération des frais d'inscription universitaire",
      "Assurance maladie et accidents obligatoire prise en charge",
      "Indemnité de logement et billet d'avion retour",
    ],
    procedure: [
      "Vérifier les critères spécifiques auprès de l'Ambassade de Suisse de votre pays de résidence",
      "Obtenir l'accord écrit d'un professeur d'une université suisse",
      "Retirer et compléter le dossier officiel auprès de la représentation diplomatique suisse",
      "Soumettre le dossier complet avant la date limite fixée par l'ambassade",
    ],
  },
  {
    id: "ava-panafrican-fellowship-2026",
    slug: "programme-leadership-jeunes-africains",
    title: "Fellowship Panafricain pour Jeunes Leaders",
    organization: "African Visionaries Alliance (AVA)",
    country: "Afrique",
    region: "AFRICA",
    category: "fellowships",
    funding: "FULLY_FUNDED",
    targetLevel: "YOUTH",
    fieldOfStudy: "Leadership, Résilience Communautaire, Urgences Sociales",
    deadline: "2026-10-30",
    officialLink: "https://africanvisionaries.org/about",
    summary: "Programme d'immersion intensive et d'accompagnement de projet pour les bâtisseurs de solutions sociales en Afrique.",
    description: "Une initiative d'AVA visant à outiller et financer les jeunes leaders africains qui déploient des initiatives d'urgence sociale, de santé communautaire, d'éducation et de résilience numérique.",
    eligibility: [
      "Être ressortissant d'un pays africain et âgé de 18 à 35 ans",
      "Porter un projet ou une initiative active ayant un impact direct sur une communauté locale",
      "Démontrer un engagement civique fort et une capacité de mobilisation de la jeunesse",
    ],
    documents: [
      "Formulaire d'inscription en ligne",
      "CV à jour mettant en avant les réalisations communautaires",
      "Note de cadrage du projet ou de l'initiative (max 3 pages)",
      "Deux lettres de recommandation d'autorités ou d'organisations partenaires",
    ],
    benefits: [
      "Prise en charge intégrale des frais de voyage et de séjour pour les sessions d'immersion",
      "Accompagnement personnalisé par des mentors et experts internationaux",
      "Accès aux subventions d'amorçage pour le déploiement sur le terrain",
      "Intégration au réseau d'alumni des visionnaires africains",
    ],
    procedure: [
      "Soumettre sa candidature sur le portail numérique officiel AVA",
      "Présélection sur dossier par le comité des programmes",
      "Entretien virtuel avec le jury d'évaluation",
      "Annonce des lauréats et démarrage du cycle de formation",
    ],
  },
  {
    id: "canada-ai-cyber-scholarship-2026",
    slug: "bourse-master-informatique-ia-canada",
    title: "Bourse d'Excellence en Informatique & Cybersécurité",
    organization: "Institut Panafricain des Sciences Numériques",
    country: "Canada",
    region: "AMERICA",
    category: "scholarships",
    funding: "FULLY_FUNDED",
    targetLevel: "MASTER",
    fieldOfStudy: "Informatique, Intelligence Artificielle, Sécurité des Réseaux",
    deadline: "2026-11-20",
    officialLink: "https://www.educanada.ca/",
    summary: "Bourse de mobilité internationale complète pour étudiants africains brillants en technologies de pointe.",
    description: "Financement intégral dédié aux étudiants à fort potentiel souhaitant poursuivre une maîtrise de recherche axée sur l'application de l'IA et de la cybersécurité aux défis d'infrastructure mondiaux.",
    eligibility: [
      "Être titulaire d'une Licence ou Bac+3 en Informatique, Mathématiques Appliquées ou Génie Logiciel",
      "Moyenne académique supérieure à 14/20 ou équivalent",
      "Projet d'études orienté vers les solutions technologiques durables",
    ],
    documents: [
      "Relevés de notes universitaires complets",
      "Lettre d'intérêt académique et professionnel",
      "Deux recommandations de professeurs d'université",
      "Preuve de compétences techniques ou portfolio de projets informatiques",
    ],
    benefits: [
      "Exemption totale des droits de scolarité internationaux",
      "Bourse de subsistance mensuelle pour toute la durée des études",
      "Billet d'avion aller-retour pris en charge",
      "Assurance médicale complète pour étudiants internationaux",
    ],
    procedure: [
      "Consulter les programmes d'études éligibles sur la plateforme EduCanada",
      "Déposer sa demande d'admission auprès de l'établissement d'accueil",
      "Remplir le dossier de demande de bourse rattaché",
      "Suivi des résultats d'attribution via le consulat",
    ],
  },
];

export function calculateDaysLeft(deadlineStr: string): number {
  const deadline = new Date(deadlineStr);
  const now = new Date();
  const diffTime = deadline.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}
