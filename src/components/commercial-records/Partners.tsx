
import { CommercialRecord } from "@/types/commercial-record";

interface PartnersProps {
  record: CommercialRecord;
}

export const Partners = ({ record }: PartnersProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">الشركاء والمؤسسون</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-right">الاسم الكامل</th>
              <th className="border p-2 text-right">الجنسية</th>
              <th className="border p-2 text-right">رقم الهوية</th>
              <th className="border p-2 text-right">العنوان</th>
              <th className="border p-2 text-right">نسبة المساهمة</th>
            </tr>
          </thead>
          <tbody>
            {record.partners.map((partner, index) => (
              <tr key={index}>
                <td className="border p-2">{partner.fullName}</td>
                <td className="border p-2">{partner.nationality}</td>
                <td className="border p-2">{partner.idNumber}</td>
                <td className="border p-2">{partner.address}</td>
                <td className="border p-2">{partner.sharePercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
