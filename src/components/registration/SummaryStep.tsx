
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SummaryStepProps = {
  form: UseFormReturn<any>;
};

export const SummaryStep = ({ form }: SummaryStepProps) => {
  const formValues = form.getValues();

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-6">ملخص الطلب</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">معلومات الشركة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-right">
            <p><span className="font-medium">نوع مقدم الطلب:</span> {formValues.applicantType}</p>
            <p><span className="font-medium">نوع الشركة:</span> {formValues.companyType}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">الاسم التجاري</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-right">
            <p><span className="font-medium">الاسم باللغة العربية:</span> {formValues.companyNameAr}</p>
            <p><span className="font-medium">الاسم باللغة الإنجليزية:</span> {formValues.companyNameEn}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">العنوان</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-right">
            <p><span className="font-medium">المدينة:</span> {formValues.city}</p>
            <p><span className="font-medium">الولاية:</span> {formValues.state}</p>
            <p><span className="font-medium">العنوان:</span> {formValues.address}</p>
            <p><span className="font-medium">رقم الهاتف:</span> {formValues.phone}</p>
            <p><span className="font-medium">البريد الإلكتروني:</span> {formValues.email}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">رأس المال</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-right">
            <p><span className="font-medium">رأس المال المصرح به:</span> {formValues.authorizedCapital} جنيه سوداني</p>
            <p><span className="font-medium">رأس المال المدفوع:</span> {formValues.paidCapital} جنيه سوداني</p>
            <p><span className="font-medium">قيمة السهم:</span> {formValues.shareValue} جنيه سوداني</p>
            <p><span className="font-medium">عدد الأسهم:</span> {formValues.numberOfShares}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
