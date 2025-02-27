
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

type FactoryDetailsStepProps = {
  form: UseFormReturn<any>;
};

export const FactoryDetailsStep = ({ form }: FactoryDetailsStepProps) => {
  const factoryTypes = [
    { value: "food", label: "صناعات غذائية" },
    { value: "textile", label: "صناعات نسيجية" },
    { value: "chemical", label: "صناعات كيميائية" },
    { value: "metal", label: "صناعات معدنية" },
    { value: "plastic", label: "صناعات بلاستيكية" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">تفاصيل المصنع</h3>

      <FormField
        control={form.control}
        name="factoryType"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>نوع المصنع</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع المصنع" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {factoryTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="productionCapacity"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الطاقة الإنتاجية المتوقعة</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="area"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>المساحة المطلوبة (متر مربع)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="equipmentValue"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>قيمة المعدات والآلات (جنيه سوداني)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
