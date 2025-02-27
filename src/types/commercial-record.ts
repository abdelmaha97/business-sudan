
export interface CommercialRecord {
  recordNumber: string;
  nameAr: string;
  nameEn: string;
  companyType: string;
  address: {
    city: string;
    state: string;
    details: string;
    poBox: string;
    phone: string;
    email: string;
  };
  activities: string[];
  capital: {
    authorized: number;
    paid: number;
    shareValue: number;
    sharesCount: number;
  };
  partners: {
    fullName: string;
    nationality: string;
    idNumber: string;
    address: string;
    sharePercentage: number;
  }[];
  directors: {
    fullName: string;
    nationality: string;
    role: string;
  }[];
  status: string;
  issueDate: string;
  expiryDate: string;
}
