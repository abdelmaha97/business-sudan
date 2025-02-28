
import { z } from "zod";

// مخطط التحقق للخطوة الأولى
export const accountTypeSchema = z.object({
  accountType: z.enum(['citizen', 'visitor'], {
    required_error: "يرجى اختيار نوع الحساب",
  }),
});

// مخطط التحقق لبيانات التواصل
export const contactInfoSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  emailConfirm: z.string(),
  phone: z.string().min(10, "رقم الهاتف غير صالح"),
  countryCode: z.string().min(1, "يرجى اختيار رمز الدولة"),
}).refine((data) => data.email === data.emailConfirm, {
  message: "البريد الإلكتروني غير متطابق",
  path: ["emailConfirm"],
});

// مخطط التحقق للبيانات الشخصية
export const personalInfoSchema = z.object({
  fullName: z.string().min(3, "الاسم الكامل مطلوب ويجب أن يكون على الأقل 3 أحرف"),
  nationality: z.string().optional(),
  idNumber: z.string().min(5, "رقم الهوية/الجواز مطلوب"),
  birthDate: z.string().min(5, "تاريخ الميلاد مطلوب"),
});

// مخطط التحقق لكلمة المرور
export const passwordSchema = z.object({
  password: z.string().min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "كلمة المرور غير متطابقة",
  path: ["passwordConfirm"],
});

export type AccountTypeFormValues = z.infer<typeof accountTypeSchema>;
export type ContactInfoFormValues = z.infer<typeof contactInfoSchema>;
export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;
