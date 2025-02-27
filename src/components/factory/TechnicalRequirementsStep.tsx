
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

type TechnicalRequirementsStepProps = {
  form: UseFormReturn<any>;
};

export const TechnicalRequirementsStep = ({ form }: TechnicalRequirementsStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">المتطلبات الفنية</h3>

      <FormField
        control={form.control}
        name="workersCount"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>عدد العمال المتوقع</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="powerRequirements"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>متطلبات الطاقة الكهربائية</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="waterRequirements"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>متطلبات المياه</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
