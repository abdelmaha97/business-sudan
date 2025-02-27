
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">تواصل مع فريق الدعم</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Phone className="w-6 h-6 text-primary" />
            <div className="text-right">
              <h3 className="font-semibold">اتصل بنا</h3>
              <p className="text-gray-600">+249 XXX XXXX</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Mail className="w-6 h-6 text-primary" />
            <div className="text-right">
              <h3 className="font-semibold">راسلنا</h3>
              <p className="text-gray-600">support@investment-window.sd</p>
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <h3 className="font-semibold mb-4 text-right">أرسل لنا رسالة</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="الاسم" className="text-right" />
              <Input placeholder="البريد الإلكتروني" type="email" className="text-right" />
            </div>
            <Input placeholder="الموضوع" className="text-right" />
            <textarea 
              className="w-full h-32 px-3 py-2 text-right border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="كيف يمكننا مساعدتك؟"
            />
            <Button className="w-full">إرسال</Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

