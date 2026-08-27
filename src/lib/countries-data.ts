export interface VolunteerItem {
  id: string;
  name: string;
  role: string;
  city: string;
  photoUrl?: string;
}

export interface CountryInfo {
  code: string;
  name: string;
  region: "AFRICA" | "EUROPE" | "AMERICA" | "ASIA" | "MIDDLE_EAST" | "OCEANIA";
  flagEmoji: string;
  description: string;
  nationalRepresentative: {
    name: string;
    title: string;
    email: string;
    status: "ACTIVE" | "APPOINTMENT_PENDING";
    photoUrl?: string;
  };
  volunteersCount: number;
  volunteersList: VolunteerItem[];
}

export const countriesList: CountryInfo[] = [
  {
    code: "CAF",
    name: "République Centrafricaine",
    region: "AFRICA",
    flagEmoji: "🇨🇫",
    description: "Siège statutaire de l'organisation à Bangui. Coordination centrale des urgences sociales, orientation académique et cellule numérique.",
    nationalRepresentative: { name: "Jean-Lucien Fouf-Kagna Grebaye", title: "Coordonnateur National AVA Centrafrique", email: "rca@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/centrafrique-jean-lucien.jpg" },
    volunteersCount: 25,
    volunteersList: [
      { id: "v-caf-1", name: "Comité Bourses & Veille", role: "Orientation académique", city: "Bangui" },
      { id: "v-caf-2", name: "Cellule Urgences & Secours", role: "Actions communautaires", city: "Bangui" },
    ],
  },
  {
    code: "BDI",
    name: "Burundi",
    region: "AFRICA",
    flagEmoji: "🇧🇮",
    description: "Antenne Grands Lacs et Afrique de l'Est. Dynamisation du leadership étudiant et accès aux bourses universitaires.",
    nationalRepresentative: { name: "André Théophase Ndayisaba", title: "Représentant National AVA Burundi", email: "burundi@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/burundi-andre-theophase.jpg" },
    volunteersCount: 14,
    volunteersList: [{ id: "v-bdi-1", name: "Comité Bujumbura", role: "Orientation & Mentorat", city: "Bujumbura" }],
  },
  {
    code: "CIV",
    name: "Côte d'Ivoire",
    region: "AFRICA",
    flagEmoji: "🇨🇮",
    description: "Hub Afrique de l'Ouest. Mobilisation citoyenne, opportunités professionnelles et accompagnement aux stages internationaux.",
    nationalRepresentative: { name: "Gaoussou Binate", title: "Représentant National AVA Côte d'Ivoire", email: "cotedivoire@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/cote-divoire-gaoussou-binate.jpg" },
    volunteersCount: 18,
    volunteersList: [{ id: "v-civ-1", name: "Comité Abidjan", role: "Pôle Études & Bourses", city: "Abidjan" }],
  },
  {
    code: "GMB",
    name: "Gambie",
    region: "AFRICA",
    flagEmoji: "🇬🇲",
    description: "Coordination de l'antenne anglophone d'Afrique de l'Ouest et renforcement des échanges universitaires.",
    nationalRepresentative: { name: "Ibrahim Kah", title: "Représentant National AVA Gambie", email: "gambia@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/gambie-ibrahim-kah.jpg" },
    volunteersCount: 10,
    volunteersList: [{ id: "v-gmb-1", name: "Banjul Youth Chapter", role: "Liaison académique", city: "Banjul" }],
  },
  {
    code: "MLI",
    name: "Mali",
    region: "AFRICA",
    flagEmoji: "🇲🇱",
    description: "Coordination Sahel pour la résilience éducative, la solidarité communautaire et l'orientation des jeunes diplômés.",
    nationalRepresentative: { name: "Soumaila Seyni Harouna", title: "Représentant National AVA Mali", email: "mali@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/mali-soumaila-seyni.jpg" },
    volunteersCount: 16,
    volunteersList: [{ id: "v-mli-1", name: "Comité Bamako", role: "Accompagnement candidatures", city: "Bamako" }],
  },
  {
    code: "RWA",
    name: "Rwanda",
    region: "AFRICA",
    flagEmoji: "🇷🇼",
    description: "Pôle innovation, technologies et vulgarisation des bourses d'études scientifiques et d'ingénierie.",
    nationalRepresentative: { name: "NIBISHAKA Fakiru", title: "Représentant National AVA Rwanda", email: "rwanda@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/rwanda-nibishaka-fakiru.jpg" },
    volunteersCount: 12,
    volunteersList: [{ id: "v-rwa-1", name: "Kigali Tech & Youth Hub", role: "Veille technologique", city: "Kigali" }],
  },
  {
    code: "TCD",
    name: "Tchad",
    region: "AFRICA",
    flagEmoji: "🇹🇩",
    description: "Antenne d'appui à la jeunesse, veille des bourses de coopération et réponses aux urgences communautaires.",
    nationalRepresentative: { name: "Adam Ali Ousmane", title: "Représentant National AVA Tchad", email: "tchad@africanvisionaries.org", status: "ACTIVE", photoUrl: "/images/volunteers/tchad-adam-ali.jpg" },
    volunteersCount: 15,
    volunteersList: [{ id: "v-tcd-1", name: "Comité N'Djamena", role: "Information & Orientation", city: "N'Djamena" }],
  },
];
