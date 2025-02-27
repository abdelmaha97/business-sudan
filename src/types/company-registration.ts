
export type ApplicantType = {
  value: string;
  label: string;
};

export type CompanyType = {
  value: string;
  label: string;
};

export type BusinessActivity = {
  value: string;
  label: string;
};

export const applicantTypes: ApplicantType[] = [
  { value: "owner", label: "المالك" },
  { value: "partner", label: "شريك" },
  { value: "authorized", label: "مخول بتقديم الطلب" },
];

export const companyTypes: CompanyType[] = [
  { value: "llc", label: "شركة ذات مسؤولية محدودة" },
  { value: "public", label: "شركة مساهمة عامة" },
  { value: "private", label: "شركة مساهمة خاصة" },
  { value: "partnership", label: "شركة تضامن" },
  { value: "limited-partnership", label: "شركة توصية بسيطة" },
  { value: "sole", label: "شركة الشخص الواحد" },
  { value: "foreign", label: "شركة أجنبية" },
];

export const businessActivities: BusinessActivity[] = [
  { value: "general-trade", label: "التجارة العامة (الاستيراد والتصدير، البيع بالجملة والتجزئة)" },
  { value: "construction", label: "المقاولات والإنشاءات" },
  { value: "industrial", label: "الخدمات الصناعية" },
  { value: "mining-energy", label: "التعدين والطاقة" },
  { value: "agriculture", label: "الخدمات الزراعية" },
  { value: "logistics", label: "الخدمات اللوجستية والنقل" },
  { value: "financial", label: "الخدمات المالية" },
  { value: "it", label: "تقنية المعلومات والاتصالات" },
  { value: "medical", label: "الخدمات الطبية والصحية" },
  { value: "tourism", label: "السياحة والفندقة" },
  { value: "education", label: "التعليم والتدريب" },
  { value: "legal", label: "الخدمات القانونية والاستشارية" },
  { value: "media", label: "الإعلام والإعلان" },
  { value: "environmental", label: "الخدمات البيئية" },
  { value: "security", label: "الخدمات الأمنية" },
];
