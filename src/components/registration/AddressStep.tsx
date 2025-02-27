
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

type AddressStepProps = {
  form: UseFormReturn<any>;
};

export const AddressStep = ({ form }: AddressStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">عنوان المقر الرئيسي للشركة</h3>
      
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>المدينة</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>الولاية</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>العنوان التفصيلي</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="poBox"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>صندوق البريد</FormLabel>
            <FormControl>
              <Input className="text-right" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>رقم الهاتف</FormLabel>
            <FormControl>
              <Input className="text-right" type="tel" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>البريد الإلكتروني</FormLabel>
            <FormControl>
              <Input className="text-right" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
