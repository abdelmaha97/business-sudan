
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Settings } from 'lucide-react';

export const GuidesSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">الأدلة الإرشادية</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
            <Button variant="outline">تحميل PDF</Button>
            <div className="text-right mr-auto ml-4">
              <h3 className="font-semibold">دليل تسجيل الشركات</h3>
              <p className="text-gray-600">خطوات تفصيلية لتسجيل شركتك بنجاح</p>
            </div>
            <BookOpen className="w-6 h-6 text-primary ml-4" />
          </div>
          <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
            <Button variant="outline">تحميل PDF</Button>
            <div className="text-right mr-auto ml-4">
              <h3 className="font-semibold">دليل استخدام المنصة</h3>
              <p className="text-gray-600">شرح مفصل لكيفية استخدام خدمات المنصة</p>
            </div>
            <Settings className="w-6 h-6 text-primary ml-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

