
import { z } from "zod";

// مخطط التحقق للخطوة الأولى
export const accountTypeSchema = z.object({
  accountType: z.enum(['citizen', 'visitor'], {
    required_error: "يرجى اختيار نوع الحساب",
  }),
});

// مخطط التحقق للبيانات الشخصية
export const personalInfoSchema = z.object({
  fullName: z.string().optional(),
  nationality: z.string().optional(),
  idNumber: z.string().optional(),
  birthDate: z.string().optional(),
  nationalId: z.string().optional(),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  emailConfirm: z.string(),
  phone: z.string().min(10, "رقم الهاتف غير صالح"),
  countryCode: z.string().min(1, "يرجى اختيار رمز الدولة"),
}).refine((data) => data.email === data.emailConfirm, {
  message: "البريد الإلكتروني غير متطابق",
  path: ["emailConfirm"],
});

// مخطط التحقق للهوية
export const identityVerificationSchema = z.object({
  identityDocument: z.string().optional(),
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
export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
export type IdentityVerificationFormValues = z.infer<typeof identityVerificationSchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;
