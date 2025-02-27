
import { CommercialRecord } from "@/types/commercial-record";

export const defaultRecord: CommercialRecord = {
  recordNumber: '123456789',
  nameAr: 'التميز للأعمال والحلول التقنية',
  nameEn: 'Excellence for Business and Technical Solutions',
  companyType: 'llc',
  address: {
    city: 'الخرطوم',
    state: 'الخرطوم',
    details: 'الكلاكلة - أبوأدم - شارع ابراهيم شمس الدين - مربع 2',
    poBox: '5884',
    phone: '0121615595',
    email: 'exbts@mail.com'
  },
  activities: ['trade', 'logistics', 'finance', 'it'],
  capital: {
    authorized: 15000000,
    paid: 15000000,
    shareValue: 1,
    sharesCount: 15000000
  },
  partners: [
    {
      fullName: 'محمد عبد المحمود',
      nationality: 'سوداني',
      idNumber: '1588715505510',
      address: 'الخرطوم',
      sharePercentage: 70
    },
    {
      fullName: 'سالم أحمد سالم',
      nationality: 'سوداني',
      idNumber: '1115887155050',
      address: 'الخرطوم',
      sharePercentage: 30
    }
  ],
  directors: [
    {
      fullName: 'محمد عبد المحمود',
      nationality: 'سوداني',
      role: 'رئيس مجلس الادارة'
    }
  ],
  status: 'active',
  issueDate: '2024-03-20',
  expiryDate: '2025-03-20'
};
