
import { Label } from "@/components/ui/label";
import { CommercialRecord } from "@/types/commercial-record";

interface AddressInfoProps {
  record: CommercialRecord;
}

export const AddressInfo = ({ record }: AddressInfoProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">عنوان المقر الرئيسي</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>المدينة</Label>
          <p className="mt-1">{record.address.city}</p>
        </div>
        <div>
          <Label>الولاية</Label>
          <p className="mt-1">{record.address.state}</p>
        </div>
        <div className="md:col-span-2">
          <Label>العنوان التفصيلي</Label>
          <p className="mt-1">{record.address.details}</p>
        </div>
        <div>
          <Label>صندوق البريد</Label>
          <p className="mt-1">{record.address.poBox}</p>
        </div>
        <div>
          <Label>رقم الهاتف</Label>
          <p className="mt-1">{record.address.phone}</p>
        </div>
        <div className="md:col-span-2">
          <Label>البريد الإلكتروني</Label>
          <p className="mt-1">{record.address.email}</p>
        </div>
      </div>
    </div>
  );
};
