
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { applicantTypes, companyTypes, businessActivities } from "@/types/company-registration";
import { ChevronDown } from "lucide-react";
import * as z from "zod";
import { useState } from "react";

type CompanyInfoStepProps = {
  form: UseFormReturn<any>;
};

export const CompanyInfoStep = ({ form }: CompanyInfoStepProps) => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="applicantType"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>نوع مقدم الطلب</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-white text-right">
                  <SelectValue placeholder="اختر نوع مقدم الطلب" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white z-50" align="end" sideOffset={4}>
                {applicantTypes.map((type) => (
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
        name="companyType"
        render={({ field }) => (
          <FormItem className="text-right">
            <FormLabel>نوع الشركة</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-white text-right">
                  <SelectValue placeholder="اختر نوع الشركة" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white z-50" align="end" sideOffset={4}>
                {companyTypes.map((type) => (
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
        name="businessActivities"
        render={() => (
          <FormItem className="text-right">
            <FormLabel>النشاط التجاري</FormLabel>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between text-right">
                  <span>{selectedActivities.length ? `${selectedActivities.length} نشاط محدد` : 'اختر النشاط التجاري'}</span>
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[300px] bg-white" align="end">
                {businessActivities.map((activity) => (
                  <DropdownMenuCheckboxItem
                    key={activity.value}
                    checked={selectedActivities.includes(activity.value)}
                    onCheckedChange={(checked) => {
                      const updatedActivities = checked
                        ? [...selectedActivities, activity.value]
                        : selectedActivities.filter((value) => value !== activity.value);
                      setSelectedActivities(updatedActivities);
                      form.setValue('businessActivities', updatedActivities);
                    }}
                    className="text-right"
                  >
                    {activity.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
