
import { Link } from "react-router-dom";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Clock, FileBarChart, Coins, Scale } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TaxDeclaration = () => {
  const relatedAgencies = [
    {
      name: 'مصلحة الضرائب',
      logo: '/path-to-logo-1.png',
    },
    {
      name: 'وزارة المالية',
      logo: '/path-to-logo-2.png',
    },
    {
      name: 'الغرفة التجارية',
      logo: '/path-to-logo-3.png',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <div className="h-48 bg-[#003979] relative overflow-hidden mt-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230055b3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }} />
        <div className="container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl font-bold text-white">تقديم إقرار الالتزامات المالية الضريبية</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#003979]/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#003979]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">المدة الزمنية (تقريباً)</p>
                        <p className="font-bold">2 يوم إلى 3 أيام</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#003979]/10 flex items-center justify-center">
                        <Coins className="w-6 h-6 text-[#003979]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">الرسوم (تقريباً)</p>
                        <p className="font-bold">300 ج.س</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button size="lg" className="w-full md:w-auto" asChild>
                      <Link to="/services/financial/tax/form">
                        ابدأ الخدمة
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="description" className="border rounded-lg">
                  <AccordionTrigger className="px-6">وصف الخدمة</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    خدمة تقديم الإقرار الضريبي السنوي للشركات والمؤسسات، يشمل حساب وتحديد الضرائب المستحقة وفقاً للقوانين واللوائح المعمول بها
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="beneficiary" className="border rounded-lg">
                  <AccordionTrigger className="px-6">نوع المستفيد</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>الشركات التجارية</li>
                      <li>المؤسسات الفردية</li>
                      <li>الشركات الصناعية</li>
                      <li>المهن الحرة</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="validity" className="border rounded-lg">
                  <AccordionTrigger className="px-6">الصلاحية</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    يجب تقديم الإقرار الضريبي سنوياً قبل نهاية شهر مارس من كل عام
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conditions" className="border rounded-lg">
                  <AccordionTrigger className="px-6">الشروط</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>تحديث السجل الضريبي</li>
                      <li>سداد المستحقات السابقة</li>
                      <li>تقديم الإقرارات الشهرية</li>
                      <li>الالتزام بمعايير المحاسبة</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documents" className="border rounded-lg">
                  <AccordionTrigger className="px-6">المستندات المطلوبة</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>البيانات المالية المدققة</li>
                      <li>كشوفات المبيعات والمشتريات</li>
                      <li>سجل الأصول والممتلكات</li>
                      <li>إيصالات الضريبة المدفوعة</li>
                      <li>بطاقة التسجيل الضريبي</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="lg:w-80">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">الجهات المتعلقة</h3>
                  <div className="space-y-4">
                    {relatedAgencies.map((agency, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                        <FileBarChart className="w-6 h-6 text-[#003979]" />
                        <span>{agency.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TaxDeclaration;
