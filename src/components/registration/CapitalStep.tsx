
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

type CapitalStepProps = {
  form: UseFormReturn<any>;
};

export const CapitalStep = ({ form }: CapitalStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">رأس المال</h3>
      
      <FormField
        control={form.control}
        name="authorizedCapital"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>رأس المال المصرح به (جنيه سوداني)</FormLabel>
            <FormControl>
              <Input className="text-right" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="paidCapital"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>رأس المال المدفوع (جنيه سوداني)</FormLabel>
            <FormControl>
              <Input className="text-right" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shareValue"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>قيمة السهم (جنيه سوداني)</FormLabel>
            <FormControl>
              <Input className="text-right" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="numberOfShares"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>عدد الأسهم</FormLabel>
            <FormControl>
              <Input className="text-right" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
