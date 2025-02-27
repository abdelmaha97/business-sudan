
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { useState } from "react";

type FinancialDetailsStepProps = {
  form: UseFormReturn<any>;
};

export const FinancialDetailsStep = ({ form }: FinancialDetailsStepProps) => {
  const [projectionYears, setProjectionYears] = useState([1]);

  const addYear = () => {
    setProjectionYears([...projectionYears, projectionYears.length + 1]);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">التفاصيل المالية</h3>

      <div className="space-y-8">
        {projectionYears.map((year) => (
          <div key={year} className="border rounded-lg p-6 space-y-4">
            <h4 className="font-medium mb-4">السنة {year}</h4>
            
            <FormField
              control={form.control}
              name={`financialProjections.${year - 1}.revenue`}
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel>الإيرادات المتوقعة</FormLabel>
                  <FormControl>
                    <Input type="number" className="text-right" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`financialProjections.${year - 1}.expenses`}
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel>المصروفات المتوقعة</FormLabel>
                  <FormControl>
                    <Input type="number" className="text-right" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`financialProjections.${year - 1}.profit`}
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel>صافي الربح المتوقع</FormLabel>
                  <FormControl>
                    <Input type="number" className="text-right" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addYear}
          className="w-full"
        >
          إضافة سنة +
        </Button>
      </div>
    </div>
  );
};
