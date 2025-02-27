
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Landmark, Building2 } from "lucide-react";
import { PaymentStep } from "@/components/registration/PaymentStep";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const formSchema = z.object({
  // الطرف الأول - المؤجر
  lessorId: z.string().min(1, "مطلوب"),
  lessorName: z.string().min(1, "مطلوب"),
  lessorEmail: z.string().email("البريد الإلكتروني غير صحيح"),
  lessorPhone: z.string().min(10, "رقم الهاتف غير صحيح"),

  // بيانات العقار
  propertyAddress: z.string().min(1, "مطلوب"),
  propertyNumber: z.string().min(1, "مطلوب"),
  propertyType: z.enum(["residential", "commercial", "industrial", "other"]),

  // مدة الإيجار
  leaseDuration: z.number().min(1, "مطلوب"),
  leaseStartDate: z.date(),
  autoRenewal: z.boolean(),
  renewalNotice: z.number().optional(),

  // قيمة الإيجار
  rentAmount: z.number().min(1, "مطلوب"),
  paymentMethod: z.enum(["bank", "credit", "wallet"]),
  paymentSchedule: z.enum(["monthly", "quarterly", "yearly"]),

  // بيانات الدفع
  cardNumber: z.string().min(16, "رقم البطاقة غير صحيح"),
  expiryDate: z.string().min(1, "مطلوب"),
  cvv: z.string().min(3, "CVV غير صحيح"),
});

const CommercialLeaseContractForm = () => {
  const [step, setStep] = useState(1);
  const [isFormSaved, setIsFormSaved] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lessorId: "",
      lessorName: "",
      lessorEmail: "",
      lessorPhone: "",
      propertyAddress: "",
      propertyNumber: "",
      propertyType: "commercial",
      leaseDuration: 12,
      leaseStartDate: new Date(),
      autoRenewal: false,
      renewalNotice: 30,
      rentAmount: 0,
      paymentMethod: "bank",
      paymentSchedule: "monthly",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  // بيانات المستأجر (الطرف الثاني) - ثابتة
  const tenantInfo = {
    name: "شركة النور للصناعات",
    crNumber: "123456789",
    owner: "أحمد محمد",
    address: "الخرطوم - شرق النيل",
    phone: "0123456789",
    email: "info@alnour.com",
  };

  const steps = [
    "بيانات المؤجر",
    "بيانات المستأجر",
    "بيانات العقار",
    "مدة الإيجار",
    "قيمة الإيجار",
    "الشروط والالتزامات",
    "سداد الرسوم"
  ];

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">بيانات الطرف الأول (المؤجر)</h3>
            <div className="space-y-4">
              <div className="relative">
                <Label>البحث برقم الهوية/السجل التجاري</Label>
                <Input 
                  placeholder="أدخل رقم الهوية أو السجل التجاري"
                  className="text-right"
                />
                <Button 
                  type="button"
                  className="absolute left-2 top-[32px]"
                >
                  بحث
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>الاسم</Label>
                  <Input 
                    {...form.register("lessorName")}
                    placeholder="الاسم الكامل"
                    className="text-right"
                  />
                </div>
                <div>
                  <Label>البريد الإلكتروني</Label>
                  <Input 
                    {...form.register("lessorEmail")}
                    type="email"
                    placeholder="example@domain.com"
                    className="text-right"
                  />
                </div>
                <div>
                  <Label>رقم الهاتف</Label>
                  <Input 
                    {...form.register("lessorPhone")}
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="text-right"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">بيانات الطرف الثاني (المستأجر)</h3>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{tenantInfo.name}</h3>
                    <p className="text-sm text-gray-500">سجل تجاري رقم: {tenantInfo.crNumber}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-600">المالك</p>
                    <p className="font-medium">{tenantInfo.owner}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">العنوان</p>
                    <p className="font-medium">{tenantInfo.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">رقم الهاتف</p>
                    <p className="font-medium">{tenantInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">البريد الإلكتروني</p>
                    <p className="font-medium">{tenantInfo.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">بيانات العقار المؤجَّر</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>العنوان</Label>
                <div className="relative">
                  <Input 
                    {...form.register("propertyAddress")}
                    placeholder="عنوان العقار"
                    className="text-right pr-10"
                  />
                  <MapPin className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <div>
                <Label>رقم العقار في المحلية</Label>
                <Input 
                  {...form.register("propertyNumber")}
                  placeholder="رقم العقار"
                  className="text-right"
                />
              </div>
            </div>

            <div>
              <Label>الغرض من الإيجار</Label>
              <RadioGroup 
                defaultValue="commercial"
                className="grid grid-cols-2 gap-4 mt-2"
              >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RadioGroupItem value="residential" id="residential" />
                  <Label htmlFor="residential">سكني</Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RadioGroupItem value="commercial" id="commercial" />
                  <Label htmlFor="commercial">تجاري</Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RadioGroupItem value="industrial" id="industrial" />
                  <Label htmlFor="industrial">صناعي</Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">آخر</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">مدة الإيجار</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>مدة الإيجار (بالشهور)</Label>
                <Input 
                  {...form.register("leaseDuration")}
                  type="number"
                  min="1"
                  className="text-right"
                />
              </div>

              <div>
                <Label>تاريخ بدء الإيجار</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-right"
                    >
                      {selectedDate ? (
                        format(selectedDate, "dd/MM/yyyy")
                      ) : (
                        <span>اختر التاريخ</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-4">
              <Label>إمكانية التجديد التلقائي</Label>
              <RadioGroup defaultValue="no">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">نعم</Label>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">لا</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>مدة الإشعار المسبق (بالأيام)</Label>
              <Input 
                {...form.register("renewalNotice")}
                type="number"
                min="1"
                className="text-right"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">قيمة الإيجار وطرق الدفع</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>قيمة الإيجار (ج.س)</Label>
                <Input 
                  {...form.register("rentAmount")}
                  type="number"
                  min="1"
                  className="text-right"
                />
              </div>

              <div>
                <Label>طريقة الدفع</Label>
                <RadioGroup defaultValue="bank">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">تحويل بنكي</Label>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">بطاقة ائتمان</Label>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet">محفظة إلكترونية</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>موعد الدفع</Label>
                <RadioGroup defaultValue="monthly">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">شهري</Label>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="quarterly" id="quarterly" />
                    <Label htmlFor="quarterly">ربع سنوي</Label>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RadioGroupItem value="yearly" id="yearly" />
                    <Label htmlFor="yearly">سنوي</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">الشروط والالتزامات</h3>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">الشروط العامة</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>دفع الإيجار في الوقت المحدد دون تأخير</li>
                    <li>عدم تأجير العقار من الباطن دون موافقة خطية من المؤجر</li>
                    <li>الحفاظ على العقار وإعادته بنفس الحالة عند انتهاء العقد</li>
                    <li>التزام المؤجر بالصيانة الأساسية للعقار</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Label>شروط إضافية (اختياري)</Label>
                  <textarea
                    className="w-full mt-2 p-3 border rounded-md text-right"
                    rows={4}
                    placeholder="أدخل أي شروط إضافية هنا..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 7:
        return <PaymentStep form={form} />;

      default:
        return null;
    }
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
              <h1 className="text-2xl font-bold text-[#003979]">نموذج عقد إيجار تجاري</h1>
            </div>

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
                {renderStepContent()}

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
                    {step < steps.length && (
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

export default CommercialLeaseContractForm;
