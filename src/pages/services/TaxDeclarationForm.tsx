
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PaymentStep } from "@/components/registration/PaymentStep";

const formSchema = z.object({
  // تعريف حقول النموذج هنا
  companyName: z.string().min(1, "مطلوب"),
  taxNumber: z.string().min(1, "مطلوب"),
  // بيانات الدفع
  cardNumber: z.string().min(16, "رقم البطاقة غير صحيح"),
  expiryDate: z.string().min(1, "مطلوب"),
  cvv: z.string().min(3, "CVV غير صحيح"),
});

const TaxDeclarationForm = () => {
  const [step, setStep] = useState(1);
  const [isFormSaved, setIsFormSaved] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      taxNumber: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

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
              <h1 className="text-2xl font-bold text-[#003979]">نموذج إقرار الالتزامات المالية الضريبية</h1>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <PaymentStep form={form} />
                )}

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
                    {step < 1 && (
                      <Button
                        type="button"
                        onClick={() => setStep(step + 1)}
                      >
                        التالي
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

export default TaxDeclarationForm;
