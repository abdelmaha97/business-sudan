
import { ArrowLeft, Camera, PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

export const Profile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
        toast.success("تم تحميل الصورة بنجاح");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    toast.success("تم تحديث البيانات بنجاح");
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">ملفي الشخصي</h1>
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="text-gray-600"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          رجوع
        </Button>
      </div>

      <Card>
        <CardHeader className="text-center pb-0">
          <div className="relative w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary bg-gray-100">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="صورة الملف الشخصي" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>
            <label 
              htmlFor="profile-image" 
              className="absolute bottom-0 right-0 p-2 bg-primary rounded-full cursor-pointer hover:bg-primary/90 transition-colors"
            >
              <PencilIcon className="w-4 h-4 text-white" />
            </label>
            <input 
              type="file" 
              id="profile-image" 
              className="hidden" 
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold">محمد عبد المحمود حسين</h2>
          <p className="text-lg text-gray-600">MOHAMED ABD ALMAHMOUD HUSSEIN</p>
        </CardHeader>

        <CardContent className="space-y-8 mt-6">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <PencilIcon className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">التفاصيل الشخصية</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>الاسم (عربي)</Label>
                <Input defaultValue="محمد عبد المحمود حسين" readOnly />
              </div>
              <div>
                <Label>الاسم (إنجليزي)</Label>
                <Input defaultValue="MOHAMED ABD ALMAHMOUD HUSSEIN" readOnly />
              </div>
              <div>
                <Label>رقم الهوية أو الجواز</Label>
                <Input placeholder="أدخل رقم الهوية أو الجواز" />
              </div>
              <div>
                <Label>تاريخ الانتهاء *</Label>
                <Input defaultValue="2031/9/7" readOnly />
              </div>
              <div>
                <Label>الجنسية *</Label>
                <Input defaultValue="السودان" readOnly />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <PencilIcon className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">بيانات التواصل</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>البريد الإلكتروني</Label>
                <Input placeholder="أدخل البريد الإلكتروني" />
              </div>
              <div>
                <Label>البريد الإلكتروني البديل</Label>
                <Input placeholder="أدخل البريد الإلكتروني البديل" />
              </div>
              <div>
                <Label>رقم الهاتف المحمول</Label>
                <Input placeholder="أدخل رقم الهاتف المحمول" />
              </div>
              <div>
                <Label>رقم الهاتف المحمول البديل</Label>
                <Input placeholder="أدخل رقم الهاتف المحمول البديل" />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <PencilIcon className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">تفاصيل العنوان</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>الولاية</Label>
                <Input placeholder="أدخل الولاية" />
              </div>
              <div>
                <Label>المنطقة</Label>
                <Input placeholder="أدخل المنطقة" />
              </div>
              <div>
                <Label>الحي</Label>
                <Input placeholder="أدخل الحي" />
              </div>
              <div>
                <Label>المربع</Label>
                <Input placeholder="أدخل المربع" />
              </div>
            </div>
          </section>

          <div className="flex justify-center pt-4">
            <Button onClick={handleUpdate} className="w-32">تحديث</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
