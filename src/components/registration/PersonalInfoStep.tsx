
import { UseFormReturn } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone } from 'lucide-react';

interface PersonalInfoStepProps {
  form: UseFormReturn<any>;
  accountType: string;
  onComplete: () => void;
  onBack: () => void;
}

export const PersonalInfoStep = ({ form, accountType, onComplete, onBack }: PersonalInfoStepProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6">البيانات الشخصية</h2>

        {accountType === 'citizen' && (
          <FormField
            control={form.control}
            name="nationalId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم الهوية</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="رقم الهوية"
                      className="pr-10"
                      {...field}
                    />
                    <User className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="البريد الإلكتروني"
                    type="email"
                    className="pr-10"
                    {...field}
                  />
                  <Mail className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emailConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تأكيد البريد الإلكتروني</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="تأكيد البريد الإلكتروني"
                    type="email"
                    className="pr-10"
                    {...field}
                  />
                  <Mail className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز الدولة</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="+249">السودان (+249)</SelectItem>
                    <SelectItem value="+966">السعودية (+966)</SelectItem>
                    <SelectItem value="+971">الإمارات (+971)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>رقم الهاتف</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="رقم الهاتف"
                      className="pr-10"
                      {...field}
                    />
                    <Phone className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
          >
            رجوع
          </Button>
          <Button type="submit">استمر</Button>
        </div>
      </form>
    </Form>
  );
};
