
import { Label } from "@/components/ui/label";
import { CommercialRecord } from "@/types/commercial-record";

interface CapitalInfoProps {
  record: CommercialRecord;
}

export const CapitalInfo = ({ record }: CapitalInfoProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">رأس المال</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>رأس المال المصرح به</Label>
          <p className="mt-1">{record.capital.authorized.toLocaleString()} جنيه سوداني</p>
        </div>
        <div>
          <Label>رأس المال المدفوع</Label>
          <p className="mt-1">{record.capital.paid.toLocaleString()} جنيه سوداني</p>
        </div>
        <div>
          <Label>قيمة السهم</Label>
          <p className="mt-1">{record.capital.shareValue} جنيه سوداني</p>
        </div>
        <div>
          <Label>عدد الأسهم</Label>
          <p className="mt-1">{record.capital.sharesCount.toLocaleString()} سهم</p>
        </div>
      </div>
    </div>
  );
};
