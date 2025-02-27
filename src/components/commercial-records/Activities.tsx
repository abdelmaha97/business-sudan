
import { CommercialRecord } from "@/types/commercial-record";

interface ActivitiesProps {
  record: CommercialRecord;
}

export const Activities = ({ record }: ActivitiesProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">أغراض الشركة</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>التجارة العامة (الاستيراد والتصدير، البيع بالجملة والتجزئة)</li>
        <li>الخدمات اللوجستية والنقل (النقل البري، البحري، الجوي، التخليص الجمركي)</li>
        <li>الخدمات المالية (الاستثمار، التمويل، التأمين، الصرافة)</li>
        <li>تقنية المعلومات والاتصالات (تطوير البرمجيات، خدمات الإنترنت، الحوسبة السحابية)</li>
      </ul>
    </div>
  );
};
