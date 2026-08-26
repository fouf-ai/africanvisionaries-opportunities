export interface VolunteerItem {
  id: string;
  name: string;
  role: string;
  city: string;
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
  };
  volunteersCount: number;
  volunteersList: VolunteerItem[];
}

export const countriesList: CountryInfo[] = [
  { code: "CAF", name: "République Centrafricaine", region: "AFRICA", flagEmoji: "🇨🇫", description: "Pays siège statutaire d'AVA. Coordination des réponses d'urgences sociales, de veille numérique et d'orientation académique.", nationalRepresentative: { name: "[Représentant National RCA]", title: "Coordonnateur National AVA Centrafrique", email: "rca@africanvisionaries.org", status: "ACTIVE" }, volunteersCount: 25, volunteersList: [{ id: "v-caf-1", name: "[Bénévole 1 - Pôle Bourses]", role: "Veille académique", city: "Bangui" }, { id: "v-caf-2", name: "[Bénévole 2 - Pôle Urgences]", role: "Secours communautaire", city: "Bangui" }, { id: "v-caf-3", name: "[Bénévole 3 - Pôle Jeunesse]", role: "Mobilisation étudiante", city: "Bangui" }] },
  { code: "CMR", name: "Cameroun", region: "AFRICA", flagEmoji: "🇨🇲", description: "Point focal Afrique Centrale. Réseau dynamique d'étudiants, de chercheurs et d'acteurs d'initiatives sociales.", nationalRepresentative: { name: "[Représentant National Cameroun]", title: "Coordonnateur National AVA Cameroun", email: "cameroun@africanvisionaries.org", status: "ACTIVE" }, volunteersCount: 18, volunteersList: [{ id: "v-cmr-1", name: "[Bénévole 1]", role: "Orientation bourses", city: "Yaoundé" }, { id: "v-cmr-2", name: "[Bénévole 2]", role: "Partenariats universitaires", city: "Douala" }] },
  { code: "SEN", name: "Sénégal", region: "AFRICA", flagEmoji: "🇸🇳", description: "Antenne Afrique de l'Ouest. Hub pour les bourses d'excellence, les fellowships et les conférences internationales.", nationalRepresentative: { name: "[Représentant National Sénégal]", title: "Coordonnateur National AVA Sénégal", email: "senegal@africanvisionaries.org", status: "ACTIVE" }, volunteersCount: 14, volunteersList: [{ id: "v-sen-1", name: "[Bénévole 1]", role: "Communication & Événements", city: "Dakar" }, { id: "v-sen-2", name: "[Bénévole 2]", role: "Accompagnement dossiers", city: "Saint-Louis" }] },
  { code: "CHE", name: "Suisse", region: "EUROPE", flagEmoji: "🇨🇭", description: "Hub de coopération académique et scientifique. Relais pour les bourses d'excellence de la Confédération suisse.", nationalRepresentative: { name: "[Point Focal Coopération Suisse]", title: "Représentant Liaison Académique Suisse", email: "swiss@africanvisionaries.org", status: "ACTIVE" }, volunteersCount: 6, volunteersList: [{ id: "v-che-1", name: "[Volontaire Diaspora]", role: "Liaison Universitaire", city: "Genève" }] },
  { code: "CAN", name: "Canada", region: "AMERICA", flagEmoji: "🇨🇦", description: "Hub de mobilité pour l'Amérique du Nord. Partenariats de recherche, bourses d'excellence en technologies et IA.", nationalRepresentative: { name: "[Point Focal Mobilité Canada]", title: "Représentant Liaison Études & Recherche Canada", email: "canada@africanvisionaries.org", status: "ACTIVE" }, volunteersCount: 8, volunteersList: [{ id: "v-can-1", name: "[Volontaire Diaspora]", role: "Accueil & Mentorat étudiants", city: "Montréal" }] },
  { code: "FRA", name: "France", region: "EUROPE", flagEmoji: "🇫🇷", description: "Relais pour les bourses universitaires internationales et la coopération éducative francophone.", nationalRepresentative: { name: "[Point Focal France]", title: "Représentant Liaison Éducative France", email: "france@africanvisionaries.org", status: "ACTIVE" }, volunteersCount: 12, volunteersList: [{ id: "v-fra-1", name: "[Volontaire Diaspora]", role: "Mentorat d'admission", city: "Paris" }] },
];
