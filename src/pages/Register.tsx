
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { AccountTypeStep } from "@/components/registration/AccountTypeStep";
import { ContactInfoStep } from "@/components/registration/PersonalInfoStep";  // Renamed component
import { PersonalInfoStep } from "@/components/registration/IdentityVerificationStep";  // Renamed component
import { PasswordStep } from "@/components/registration/PasswordStep";
import { CompleteStep } from "@/components/registration/CompleteStep";
import { RegistrationSteps } from "@/components/registration/RegistrationSteps";

// تعريف نوع للخطوات
type Step = 'accountType' | 'contactInfo' | 'personalInfo' | 'password' | 'complete';

// مخطط التحقق للخطوة الأولى
const accountTypeSchema = z.object({
  accountType: z.enum(['citizen', 'visitor'], {
    required_error: "يرجى اختيار نوع الحساب",
  }),
});

// مخطط التحقق لبيانات التواصل
const contactInfoSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  emailConfirm: z.string(),
  phone: z.string().min(10, "رقم الهاتف غير صالح"),
  countryCode: z.string().min(1, "يرجى اختيار رمز الدولة"),
}).refine((data) => data.email === data.emailConfirm, {
  message: "البريد الإلكتروني غير متطابق",
  path: ["emailConfirm"],
});

// مخطط التحقق للبيانات الشخصية
const personalInfoSchema = z.object({
  fullName: z.string().min(3, "الاسم الكامل مطلوب ويجب أن يكون على الأقل 3 أحرف"),
  nationality: z.string().optional(),
  idNumber: z.string().min(5, "رقم الهوية/الجواز مطلوب"),
  birthDate: z.string().min(5, "تاريخ الميلاد مطلوب"),
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
  const [currentStep, setCurrentStep] = useState<Step>('accountType');

  // نموذج نوع الحساب
  const accountTypeForm = useForm<z.infer<typeof accountTypeSchema>>({
    resolver: zodResolver(accountTypeSchema),
    defaultValues: {
      accountType: undefined,
    },
  });

  // نموذج بيانات التواصل
  const contactInfoForm = useForm<z.infer<typeof contactInfoSchema>>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      email: "",
      emailConfirm: "",
      phone: "",
      countryCode: "",
    },
  });

  // نموذج البيانات الشخصية
  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      nationality: "",
      idNumber: "",
      birthDate: "",
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
  const onAccountTypeSubmit = () => {
    setCurrentStep('contactInfo');
  };

  // معالجة تقديم بيانات التواصل
  const onContactInfoSubmit = () => {
    setCurrentStep('personalInfo');
  };

  // معالجة تقديم البيانات الشخصية
  const goToPasswordStep = () => {
    setCurrentStep('password');
  };

  // معالجة تقديم كلمة المرور
  const onPasswordSubmit = () => {
    // هنا يمكن إضافة منطق إرسال البيانات للخادم
    toast.success("تم إنشاء الحساب بنجاح");
    setCurrentStep('complete');
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary/5" dir="rtl">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-28">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <RegistrationSteps currentStep={currentStep} />

          {currentStep === 'accountType' && (
            <AccountTypeStep 
              form={accountTypeForm} 
              onComplete={onAccountTypeSubmit} 
            />
          )}

          {currentStep === 'contactInfo' && (
            <ContactInfoStep 
              form={contactInfoForm} 
              accountType={accountTypeForm.getValues('accountType')}
              onComplete={onContactInfoSubmit}
              onBack={() => setCurrentStep('accountType')}
            />
          )}

          {currentStep === 'personalInfo' && (
            <PersonalInfoStep 
              form={personalInfoForm} 
              goToNextStep={goToPasswordStep}
              onBack={() => setCurrentStep('contactInfo')}
            />
          )}

          {currentStep === 'password' && (
            <PasswordStep 
              form={passwordForm}
              onComplete={onPasswordSubmit}
              onBack={() => setCurrentStep('personalInfo')}
            />
          )}

          {currentStep === 'complete' && <CompleteStep />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
