import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ProgressSteps } from "@/components/registration/ProgressSteps";
import { CompanyInfoStep } from "@/components/registration/CompanyInfoStep";
import { CompanyNameStep } from "@/components/registration/CompanyNameStep";
import { AddressStep } from "@/components/registration/AddressStep";
import { CapitalStep } from "@/components/registration/CapitalStep";
import { DirectorsStep } from "@/components/registration/DirectorsStep";
import { DocumentsStep } from "@/components/registration/DocumentsStep";
import { SummaryStep } from "@/components/registration/SummaryStep";
import { PaymentStep } from "@/components/registration/PaymentStep";

const formSchema = z.object({
  applicantType: z.string(),
  companyType: z.string(),
  businessActivities: z.array(z.string()),
  companyNameAr: z.string(),
  companyNameEn: z.string(),
  alternativeNameAr: z.string().optional(),
  alternativeNameEn: z.string().optional(),
  city: z.string(),
  state: z.string(),
  address: z.string(),
  poBox: z.string(),
  phone: z.string(),
  email: z.string().email(),
  authorizedCapital: z.number(),
  paidCapital: z.number(),
  shareValue: z.number(),
  numberOfShares: z.number(),
});

const CompanyRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isFormSaved, setIsFormSaved] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantType: "",
      companyType: "",
      businessActivities: [],
      companyNameAr: "",
      companyNameEn: "",
      alternativeNameAr: "",
      alternativeNameEn: "",
      city: "",
      state: "",
      address: "",
      poBox: "",
      phone: "",
      email: "",
      authorizedCapital: 0,
      paidCapital: 0,
      shareValue: 0,
      numberOfShares: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />

      <main className="flex-1 pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="mb-4"
              >
                رجوع
              </Button>
              <h1 className="text-2xl font-bold text-[#003979]">تأسيس شركة</h1>
            </div>

            <ProgressSteps currentStep={step} />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && <CompanyInfoStep form={form} />}
                {step === 2 && <CompanyNameStep form={form} />}
                {step === 3 && <AddressStep form={form} />}
                {step === 4 && <CapitalStep form={form} />}
                {step === 5 && <DirectorsStep form={form} />}
                {step === 6 && <DocumentsStep form={form} />}
                {step === 7 && <SummaryStep form={form} />}
                {step === 8 && <PaymentStep form={form} />}

                <div className="flex justify-between pt-6">
                  <div className="space-x-2 rtl:space-x-reverse">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                      >
                        السابق
                      </Button>
                    )}
                    {step < 8 && (
                      <Button
                        type="button"
                        onClick={() => setStep(step + 1)}
                      >
                        التالي
                      </Button>
                    )}
                    {step === 8 && (
                      <Button type="submit">
                        تقديم الطلب
                      </Button>
                    )}
                  </div>
                  <div className="space-x-2 rtl:space-x-reverse">
                    <Button
                      type="button"
                      variant="default"
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => setIsFormSaved(true)}
                    >
                      حفظ الطلب
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      className="bg-red-500 hover:bg-red-600"
                      onClick={() => {
                        if (window.confirm("هل أنت متأكد من إلغاء الطلب؟")) {
                          form.reset();
                          setStep(1);
                        }
                      }}
                    >
                      إلغاء الطلب
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyRegistrationForm;
