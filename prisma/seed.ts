import {
  PrismaClient,
  Region,
  TeamGroup,
} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Démarrage de l'initialisation des données de base AVA...");

  await prisma.category.upsert({
    where: { slug: "scholarships" },
    update: {},
    create: {
      slug: "scholarships",
      nameFr: "Bourses d'études",
      nameEn: "Scholarships",
      nameAr: "المنح الدراسية",
      nameEs: "Becas de estudio",
      namePt: "Bolsas de estudo",
      icon: "GraduationCap",
    },
  });

  await prisma.category.upsert({
    where: { slug: "fellowships" },
    update: {},
    create: {
      slug: "fellowships",
      nameFr: "Fellowships & Recherche",
      nameEn: "Fellowships & Research",
      nameAr: "الزمالات والأبحاث",
      nameEs: "Fellowships e Investigación",
      namePt: "Fellowships e Pesquisa",
      icon: "Award",
    },
  });

  await prisma.country.upsert({
    where: { code: "CAF" },
    update: {},
    create: {
      code: "CAF",
      name: "République Centrafricaine",
      region: Region.AFRICA,
      flagEmoji: "🇨🇫",
      description: "Programmes nationaux, initiatives de jeunesse et bourses de mobilité.",
    },
  });

  await prisma.country.upsert({
    where: { code: "CHE" },
    update: {},
    create: {
      code: "CHE",
      name: "Suisse",
      region: Region.EUROPE,
      flagEmoji: "🇨🇭",
      description: "Bourses d'excellence de la Confédération suisse.",
    },
  });

  await prisma.teamMember.createMany({
    data: [
      {
        group: TeamGroup.EXECUTIVE_COUNCIL,
        positionFr: "Président",
        positionEn: "President",
        positionAr: "الرئيس",
        name: "[Nom à renseigner]",
        orderIndex: 1,
      },
      {
        group: TeamGroup.EXECUTIVE_COUNCIL,
        positionFr: "Secrétaire Général",
        positionEn: "Secretary-General",
        positionAr: "الأمين العام",
        name: "[Nom à renseigner]",
        orderIndex: 2,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Données de base initialisées avec succès !");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
