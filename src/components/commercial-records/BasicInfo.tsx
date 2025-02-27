
import { Label } from "@/components/ui/label";
import { CommercialRecord } from "@/types/commercial-record";

interface BasicInfoProps {
  record: CommercialRecord;
}

export const BasicInfo = ({ record }: BasicInfoProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">معلومات الشركة الأساسية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>رقم السجل التجاري</Label>
          <p className="mt-1">{record.recordNumber}</p>
        </div>
        <div>
          <Label>اسم الشركة بالعربية</Label>
          <p className="mt-1">{record.nameAr}</p>
        </div>
        <div>
          <Label>اسم الشركة بالإنجليزية</Label>
          <p className="mt-1">{record.nameEn}</p>
        </div>
        <div>
          <Label>نوع الشركة</Label>
          <p className="mt-1">شركة ذات مسؤولية محدودة</p>
        </div>
      </div>
    </div>
  );
};
