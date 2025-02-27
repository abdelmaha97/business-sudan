
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// تعريف نوع للخطوات
type Step = 'accountType' | 'personalInfo' | 'password' | 'complete';

// مخطط التحقق للخطوة الأولى
const accountTypeSchema = z.object({
  accountType: z.enum(['citizen', 'visitor'], {
    required_error: "يرجى اختيار نوع الحساب",
  }),
});

// مخطط التحقق للبيانات الشخصية
const personalInfoSchema = z.object({
  nationalId: z.string().optional(),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  emailConfirm: z.string(),
  phone: z.string().min(10, "رقم الهاتف غير صالح"),
  countryCode: z.string().min(1, "يرجى اختيار رمز الدولة"),
}).refine((data) => data.email === data.emailConfirm, {
  message: "البريد الإلكتروني غير متطابق",
  path: ["emailConfirm"],
});

// مخطط التحقق لكلمة المرور
const passwordSchema = z.object({
  password: z.string().min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "كلمة المرور غير متطابقة",
  path: ["passwordConfirm"],
});

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('accountType');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // نموذج نوع الحساب
  const accountTypeForm = useForm<z.infer<typeof accountTypeSchema>>({
    resolver: zodResolver(accountTypeSchema),
    defaultValues: {
      accountType: undefined,
    },
  });

  // نموذج البيانات الشخصية
  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      nationalId: "",
      email: "",
      emailConfirm: "",
      phone: "",
      countryCode: "",
    },
  });

  // نموذج كلمة المرور
  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  // معالجة تقديم نوع الحساب
  const onAccountTypeSubmit = (data: z.infer<typeof accountTypeSchema>) => {
    setCurrentStep('personalInfo');
  };

  // معالجة تقديم البيانات الشخصية
  const onPersonalInfoSubmit = (data: z.infer<typeof personalInfoSchema>) => {
    setCurrentStep('password');
  };

  // معالجة تقديم كلمة المرور
  const onPasswordSubmit = (data: z.infer<typeof passwordSchema>) => {
    // هنا يمكن إضافة منطق إرسال البيانات للخادم
    toast.success("تم إنشاء الحساب بنجاح");
    setCurrentStep('complete');
  };

  // عرض خطوات التسجيل
  const renderSteps = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4 space-x-reverse">
        {[
          { number: 1, label: "نوع الحساب", status: currentStep === 'accountType' ? 'current' : 'done' },
          { number: 2, label: "البيانات الشخصية", status: currentStep === 'personalInfo' ? 'current' : (currentStep === 'accountType' ? 'upcoming' : 'done') },
          { number: 3, label: "كلمة المرور", status: currentStep === 'password' ? 'current' : (currentStep === 'complete' ? 'done' : 'upcoming') },
          { number: 4, label: "انتهاء التسجيل", status: currentStep === 'complete' ? 'current' : 'upcoming' },
        ].map((step, index) => (
          <div key={step.number} className="flex items-center">
            {index > 0 && (
              <div 
                className={`h-0.5 w-16 mx-2 ${
                  step.status === 'upcoming' ? 'bg-gray-200' : 'bg-primary'
                }`}
              />
            )}
            <div className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  step.status === 'current' ? 'bg-primary text-white' :
                  step.status === 'done' ? 'bg-primary/20 text-primary' :
                  'bg-gray-200 text-gray-400'
                }`}
              >
                {step.number}
              </div>
              <span className="text-sm mt-1 text-gray-600">{step.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-primary/5" dir="rtl">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-28">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {renderSteps()}

          {currentStep === 'accountType' && (
            <Form {...accountTypeForm}>
              <form onSubmit={accountTypeForm.handleSubmit(onAccountTypeSubmit)} className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-6">اختر نوع الحساب</h2>
                
                <FormField
                  control={accountTypeForm.control}
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
          )}

          {currentStep === 'personalInfo' && (
            <Form {...personalInfoForm}>
              <form onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)} className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-6">البيانات الشخصية</h2>

                {accountTypeForm.getValues('accountType') === 'citizen' && (
                  <FormField
                    control={personalInfoForm.control}
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
                  control={personalInfoForm.control}
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
                  control={personalInfoForm.control}
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
                    control={personalInfoForm.control}
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
                    control={personalInfoForm.control}
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
                    onClick={() => setCurrentStep('accountType')}
                  >
                    رجوع
                  </Button>
                  <Button type="submit">استمر</Button>
                </div>
              </form>
            </Form>
          )}

          {currentStep === 'password' && (
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-6">كلمة المرور</h2>

                <FormField
                  control={passwordForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>كلمة المرور</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="كلمة المرور"
                            className="pr-10"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تأكيد كلمة المرور</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="تأكيد كلمة المرور"
                            className="pr-10"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep('personalInfo')}
                  >
                    رجوع
                  </Button>
                  <Button type="submit">إنشاء الحساب</Button>
                </div>
              </form>
            </Form>
          )}

          {currentStep === 'complete' && (
            <div className="text-center space-y-6">
              <div className="text-primary">
                <svg
                  className="mx-auto h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">تم إنشاء الحساب بنجاح</h2>
              <p className="text-gray-600">
                يمكنك الآن تسجيل الدخول واستخدام جميع خدمات المنصة
              </p>
              <Button onClick={() => navigate('/login')} className="mt-4">
                تسجيل الدخول
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
