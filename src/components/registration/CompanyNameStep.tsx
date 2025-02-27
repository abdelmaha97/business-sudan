
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

type CompanyNameStepProps = {
  form: UseFormReturn<any>;
};

export const CompanyNameStep = ({ form }: CompanyNameStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">الاسم التجاري</h3>
      
      <FormField
        control={form.control}
        name="companyNameAr"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الاسم الأول باللغة العربية</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyNameEn"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الاسم الأول باللغة الإنجليزية</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="alternativeNameAr"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الاسم البديل باللغة العربية (إن وجد)</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="alternativeNameEn"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الاسم البديل باللغة الإنجليزية (إن وجد)</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
