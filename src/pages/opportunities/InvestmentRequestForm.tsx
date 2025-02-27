import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { InvestmentDetailsStep } from "@/components/investment/InvestmentDetailsStep";
import { FinancialDetailsStep } from "@/components/investment/FinancialDetailsStep";
import { DocumentsStep } from "@/components/investment/DocumentsStep";
import { SummaryStep } from "@/components/investment/SummaryStep";
import { PaymentStep } from "@/components/investment/PaymentStep";

const formSchema = z.object({
  investmentAmount: z.number().min(1),
  expectedReturn: z.number(),
  projectTimeline: z.string(),
  businessPlan: z.string(),
  financialProjections: z.array(z.object({
    year: z.number(),
    revenue: z.number(),
    expenses: z.number(),
    profit: z.number()
  })),
  documents: z.array(z.string())
});

const InvestmentRequestForm = () => {
  const [step, setStep] = useState(1);
  const [isFormSaved, setIsFormSaved] = useState(false);

  const companyInfo = {
    name: "شركة النور للصناعات",
    crNumber: "123456789",
    owner: "أحمد محمد",
    address: "الخرطوم - شرق النيل",
    phone: "0123456789",
    email: "info@alnour.com",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      investmentAmount: 0,
      expectedReturn: 0,
      projectTimeline: "",
      businessPlan: "",
      financialProjections: [],
      documents: []
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const steps = [
    "تفاصيل الاستثمار",
    "التفاصيل المالية",
    "المستندات المطلوبة",
    "ملخص الطلب",
    "سداد الرسوم"
  ];

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
              <h1 className="text-2xl font-bold text-[#003979]">تقديم طلب استثمار</h1>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{companyInfo.name}</h3>
                    <p className="text-sm text-gray-500">سجل تجاري رقم: {companyInfo.crNumber}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-600">المالك</p>
                    <p className="font-medium">{companyInfo.owner}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">العنوان</p>
                    <p className="font-medium">{companyInfo.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">رقم الهاتف</p>
                    <p className="font-medium">{companyInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">البريد الإلكتروني</p>
                    <p className="font-medium">{companyInfo.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-8">
              <div className="relative flex justify-center items-center mb-8">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>
                <div className="flex justify-between w-full relative z-10">
                  {steps.map((label, index) => {
                    const stepNumber = index + 1;
                    return (
                      <div key={stepNumber} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step === stepNumber
                              ? "bg-[#003979] text-white"
                              : stepNumber < step
                              ? "bg-green-500 text-white"
                              : "bg-gray-200 text-gray-600"
                          } mb-2`}
                        >
                          {stepNumber}
                        </div>
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && <InvestmentDetailsStep form={form} />}
                {step === 2 && <FinancialDetailsStep form={form} />}
                {step === 3 && <DocumentsStep form={form} />}
                {step === 4 && <SummaryStep form={form} />}
                {step === 5 && <PaymentStep form={form} />}

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
                    {step < 5 && (
                      <Button
                        type="button"
                        onClick={() => setStep(step + 1)}
                      >
                        التالي
                      </Button>
                    )}
                    {step === 5 && (
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

export default InvestmentRequestForm;
