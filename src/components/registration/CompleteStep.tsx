
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CompleteStep = () => {
  const navigate = useNavigate();

  return (
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
  );
};
