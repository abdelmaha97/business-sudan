
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

type PaymentStepProps = {
  form: UseFormReturn<any>;
};

export const PaymentStep = ({ form }: PaymentStepProps) => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-6">سداد الرسوم</h3>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">رسوم الطلب</p>
                <p className="font-bold text-xl">500 ج.س</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem className="text-right">
                  <FormLabel>رقم البطاقة</FormLabel>
                  <FormControl>
                    <Input className="text-right" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem className="text-right">
                    <FormLabel>تاريخ الانتهاء</FormLabel>
                    <FormControl>
                      <Input className="text-right" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem className="text-right">
                    <FormLabel>رمز CVV</FormLabel>
                    <FormControl>
                      <Input className="text-right" type="password" maxLength={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
