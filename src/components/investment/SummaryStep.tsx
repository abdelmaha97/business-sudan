
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
            <CardTitle className="text-lg">تفاصيل الاستثمار</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-right">
            <p><span className="font-medium">مبلغ الاستثمار:</span> {formValues.investmentAmount} ج.س</p>
            <p><span className="font-medium">العائد المتوقع:</span> {formValues.expectedReturn}%</p>
            <p><span className="font-medium">المدة الزمنية:</span> {formValues.projectTimeline}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">التفاصيل المالية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-right">
            {formValues.financialProjections.map((projection: any, index: number) => (
              <div key={index} className="border-b pb-2 last:border-0">
                <p className="font-medium">السنة {index + 1}</p>
                <p>الإيرادات: {projection.revenue} ج.س</p>
                <p>المصروفات: {projection.expenses} ج.س</p>
                <p>صافي الربح: {projection.profit} ج.س</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
