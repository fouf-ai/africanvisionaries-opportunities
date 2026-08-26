export interface CountryInfo {
  code: string;
  name: string;
  region: "AFRICA" | "EUROPE" | "AMERICA" | "ASIA" | "MIDDLE_EAST" | "OCEANIA";
  flagEmoji: string;
  description: string;
}

export const countriesList: CountryInfo[] = [
  {
    code: "CAF",
    name: "République Centrafricaine",
    region: "AFRICA",
    flagEmoji: "🇨🇫",
    description: "Programmes nationaux, initiatives de jeunesse et bourses de mobilité pour étudiants et chercheurs centrafricains.",
  },
  {
    code: "CMR",
    name: "Cameroun",
    region: "AFRICA",
    flagEmoji: "🇨🇲",
    description: "Opportunités académiques, stages professionnels et bourses d'études supérieures au Cameroun et à l'international.",
  },
  {
    code: "SEN",
    name: "Sénégal",
    region: "AFRICA",
    flagEmoji: "🇸🇳",
    description: "Programmes d'excellence pour jeunes leaders, conférences internationales et bourses de recherche au Sénégal.",
  },
  {
    code: "CHE",
    name: "Suisse",
    region: "EUROPE",
    flagEmoji: "🇨🇭",
    description: "Bourses d'excellence du gouvernement suisse, programmes doctoraux et recherche scientifique de pointe.",
  },
  {
    code: "CAN",
    name: "Canada",
    region: "AMERICA",
    flagEmoji: "🇨🇦",
    description: "Bourses d'études universitaires complètes, programmes d'échange et opportunités de recherche en IA et technologies.",
  },
  {
    code: "FRA",
    name: "France",
    region: "EUROPE",
    flagEmoji: "🇫🇷",
    description: "Bourses Eiffel, masters internationaux et programmes de bourses universitaires d'excellence.",
  },
];
