export interface TeamRoleItem {
  id: string;
  group: "EXECUTIVE_COUNCIL" | "SECRETARIAT" | "REGIONAL_REPRESENTATIVES" | "SPECIAL_REPRESENTATIVES";
  roleTitleFr: string;
  roleTitleEn: string;
  roleTitleAr: string;
  name: string;
  bioFr: string;
  bioEn: string;
  bioAr: string;
}

export const teamStructure: TeamRoleItem[] = [
  {
    id: "exec-pres",
    group: "EXECUTIVE_COUNCIL",
    roleTitleFr: "Président",
    roleTitleEn: "President",
    roleTitleAr: "الرئيس",
    name: "[Nom à renseigner]",
    bioFr: "Définit les orientations stratégiques et porte la vision panafricaine de l'Alliance.",
    bioEn: "Defines strategic directions and carries the pan-African vision of the Alliance.",
    bioAr: "يحدد التوجهات الاستراتيجية ويقود الرؤية الأفريقية للتحالف.",
  },
  {
    id: "exec-vp-1",
    group: "EXECUTIVE_COUNCIL",
    roleTitleFr: "Vice-Président (Régions)",
    roleTitleEn: "Vice-President (Regions)",
    roleTitleAr: "نائب الرئيس (المناطق)",
    name: "[Nom à renseigner]",
    bioFr: "Coordination des dynamiques régionales et des points focaux territoriaux.",
    bioEn: "Coordination of regional dynamics and territorial focal points.",
    bioAr: "تنسيق الديناميكيات الإقليمية ونقاط الاتصال المحلية.",
  },
  {
    id: "exec-sg",
    group: "EXECUTIVE_COUNCIL",
    roleTitleFr: "Secrétaire Général",
    roleTitleEn: "Secretary-General",
    roleTitleAr: "الأمين العام",
    name: "[Nom à renseigner]",
    bioFr: "Supervise les opérations quotidiennes, le secrétariat et l'exécution des programmes.",
    bioEn: "Oversees daily operations, secretariat, and program execution.",
    bioAr: "يشرف على العمليات اليومية والأمانة وتنفيذ البرامج.",
  },
  {
    id: "exec-treasurer",
    group: "EXECUTIVE_COUNCIL",
    roleTitleFr: "Trésorier Général",
    roleTitleEn: "General Treasurer",
    roleTitleAr: "أمين الصندوق العام",
    name: "[Nom à renseigner]",
    bioFr: "Garant de la gestion financière, de la transparence et du contrôle budgétaire.",
    bioEn: "Guarantor of financial management, transparency, and budget oversight.",
    bioAr: "ضامن الإدارة المالية والشفافية والرقابة على الميزانية.",
  },
  {
    id: "sec-prog",
    group: "SECRETARIAT",
    roleTitleFr: "Directeur des Programmes",
    roleTitleEn: "Program Director",
    roleTitleAr: "مدير البرامج",
    name: "[Nom à renseigner]",
    bioFr: "Conception, suivi et évaluation des initiatives pour la jeunesse et les urgences sociales.",
    bioEn: "Design, monitoring, and evaluation of youth initiatives and social emergency programs.",
    bioAr: "تصميم ومتابعة وتقييم المبادرات الشبابية والاستجابة الاجتماعية.",
  },
  {
    id: "sec-part",
    group: "SECRETARIAT",
    roleTitleFr: "Directeur des Partenariats & Mobilisation",
    roleTitleEn: "Director of Partnerships & Resource Mobilization",
    roleTitleAr: "مدير الشراكات وحشد الموارد",
    name: "[Nom à renseigner]",
    bioFr: "Développement des coopérations internationales et des opportunités de financement.",
    bioEn: "Development of international cooperation and funding opportunities.",
    bioAr: "تطوير التعاون الدولي وفرص التمويل.",
  },
  {
    id: "sec-comm",
    group: "SECRETARIAT",
    roleTitleFr: "Directeur de la Communication & Plaidoyer",
    roleTitleEn: "Director of Communications & Advocacy",
    roleTitleAr: "مدير الاتصال والمناصرة",
    name: "[Nom à renseigner]",
    bioFr: "Rayonnement médiatique, veille numérique et diffusion des opportunités.",
    bioEn: "Media outreach, digital monitoring, and opportunity dissemination.",
    bioAr: "التواصل الإعلامي، الرصد الرقمي ونشر الفرص.",
  },
  {
    id: "rep-youth",
    group: "SPECIAL_REPRESENTATIVES",
    roleTitleFr: "Représentant de la Jeunesse",
    roleTitleEn: "Youth Representative",
    roleTitleAr: "ممثل الشباب",
    name: "[Nom à renseigner]",
    bioFr: "Porte-voix des initiatives étudiantes et citoyennes des jeunes sur le continent.",
    bioEn: "Voice of student and civic initiatives for young people across the continent.",
    bioAr: "صوت المبادرات الطلابية والمدنية للشباب في القارة.",
  },
  {
    id: "rep-gender",
    group: "SPECIAL_REPRESENTATIVES",
    roleTitleFr: "Représentant Égalité de Genre & Inclusion",
    roleTitleEn: "Gender Equality & Inclusion Representative",
    roleTitleAr: "ممثل المساواة والشمول",
    name: "[Nom à renseigner]",
    bioFr: "Intégration systématique de l'égalité et de l'inclusion dans l'ensemble des projets.",
    bioEn: "Systematic integration of equality and inclusion throughout all projects.",
    bioAr: "الإدماج المنهجي للمساواة والشمول في كافة البرامج.",
  },
];
