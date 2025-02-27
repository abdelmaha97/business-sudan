
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

type EnvironmentalSafetyStepProps = {
  form: UseFormReturn<any>;
};

export const EnvironmentalSafetyStep = ({ form }: EnvironmentalSafetyStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">الأثر البيئي والسلامة</h3>

      <FormField
        control={form.control}
        name="environmentalImpact"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الأثر البيئي المتوقع وإجراءات الحد منه</FormLabel>
            <FormControl>
              <Textarea
                className="min-h-[150px]"
                placeholder="اشرح الإجراءات المتبعة للحد من الأثر البيئي..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="safetyMeasures"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>إجراءات السلامة المهنية</FormLabel>
            <FormControl>
              <Textarea
                className="min-h-[150px]"
                placeholder="اشرح إجراءات السلامة المهنية المتبعة..."
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
