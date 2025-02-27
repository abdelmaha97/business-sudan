
import { CommercialRecord } from "@/types/commercial-record";

interface DirectorsProps {
  record: CommercialRecord;
}

export const Directors = ({ record }: DirectorsProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">المديرون المفوضون</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-right">الاسم الكامل</th>
              <th className="border p-2 text-right">الجنسية</th>
              <th className="border p-2 text-right">الصفة</th>
            </tr>
          </thead>
          <tbody>
            {record.directors.map((director, index) => (
              <tr key={index}>
                <td className="border p-2">{director.fullName}</td>
                <td className="border p-2">{director.nationality}</td>
                <td className="border p-2">{director.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
