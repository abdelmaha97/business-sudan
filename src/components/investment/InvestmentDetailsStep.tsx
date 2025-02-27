
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type InvestmentDetailsStepProps = {
  form: UseFormReturn<any>;
};

export const InvestmentDetailsStep = ({ form }: InvestmentDetailsStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">تفاصيل الاستثمار</h3>
      
      <FormField
        control={form.control}
        name="investmentAmount"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>مبلغ الاستثمار (بالجنيه السوداني)</FormLabel>
            <FormControl>
              <Input type="number" className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expectedReturn"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>العائد المتوقع (%)</FormLabel>
            <FormControl>
              <Input type="number" className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="projectTimeline"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>المدة الزمنية المتوقعة للمشروع</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessPlan"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>خطة العمل</FormLabel>
            <FormControl>
              <Textarea 
                className="text-right min-h-[150px]" 
                placeholder="يرجى تقديم ملخص لخطة العمل الخاصة بالمشروع..."
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
