
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseFormReturn } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AccountTypeStepProps {
  form: UseFormReturn<any>;
  onComplete: () => void;
}

export const AccountTypeStep = ({ form, onComplete }: AccountTypeStepProps) => {
  const navigate = useNavigate();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6">اختر نوع الحساب</h2>
        
        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-3"
                >
                  <div className="flex flex-row-reverse items-center space-x-3">
                    <label 
                      htmlFor="citizen" 
                      className="text-right cursor-pointer"
                    >
                      المواطنين السودانين والمقيمين الأجانب
                    </label>
                    <RadioGroupItem value="citizen" id="citizen" />
                  </div>
                  <div className="flex flex-row-reverse items-center space-x-3">
                    <label 
                      htmlFor="visitor" 
                      className="text-right cursor-pointer"
                    >
                      الزوار والمستخدمين من خارج السودان
                    </label>
                    <RadioGroupItem value="visitor" id="visitor" />
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/login')}
          >
            إلغاء
          </Button>
          <Button type="submit">استمر</Button>
        </div>
      </form>
    </Form>
  );
};
