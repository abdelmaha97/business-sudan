
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { User, Lock, CreditCard } from 'lucide-react';
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const loginSchema = z.object({
  username: z.string().min(1, "يرجى إدخال اسم المستخدم"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    localStorage.setItem('isLoggedIn', 'true');
    toast.success("تم تسجيل الدخول بنجاح");
    navigate("/dashboard"); // تم تغيير المسار إلى لوحة التحكم
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary/5" dir="rtl">
      <Header />
      
      <main className="flex-1 grid md:grid-cols-2 items-center gap-8 p-4 md:p-8 mt-28">
        {/* قسم الشعار */}
        <div className="hidden md:flex justify-center items-center">
          <img 
            src="/img/logo.png" 
            alt=" نافذة التنمية والاستثمار" 
            className="max-w-[400px] w-full" 
          />
        </div>

        {/* قسم النموذج */}
        <div className="w-full max-w-md mx-auto">
          {/* الشعار للشاشات الصغيرة */}
          <div className="md:hidden flex justify-center mb-8">
            <img 
              src="/img/logo.png" 
              alt=" نافذة التنمية والاستثمار" 
              className="h-20" 
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">تسجيل الدخول</h1>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="اسم المستخدم" 
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

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="password" 
                            placeholder="كلمة المرور" 
                            className="pr-10"
                            {...field} 
                          />
                          <Lock className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center text-sm">
                  <Link to="/register" className="text-primary hover:underline">
                    لا تمتلك حساب حتى الآن؟ إنشاء الحساب
                  </Link>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    هل نسيت كلمة المرور؟
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  تسجيل الدخول
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">أو</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/smart-card-login')}
                >
                  <CreditCard className="ml-2 h-4 w-4" />
                  تسجيل الدخول عن طريق البطاقة الذكية
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
