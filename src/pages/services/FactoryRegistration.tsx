import { Link } from "react-router-dom";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Clock, Factory, Coins, Building2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FactoryRegistration = () => {
  const relatedAgencies = [
    {
      name: 'وزارة الصناعة',
      logo: '/path-to-logo-1.png',
    },
    {
      name: 'هيئة المناطق الصناعية',
      logo: '/path-to-logo-2.png',
    },
    {
      name: 'هيئة المواصفات والمقاييس',
      logo: '/path-to-logo-3.png',
    },
    {
      name: 'وزارة البيئة',
      logo: '/path-to-logo-4.png',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      {/* شريط العنوان الرئيسي */}
      <div className="h-48 bg-[#003979] relative overflow-hidden mt-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230055b3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }} />
        <div className="container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl font-bold text-white">التأسيس الشامل للمصانع</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* المحتوى الرئيسي */}
            <div className="flex-1">
              {/* بطاقة المعلومات الرئيسية */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#003979]/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#003979]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">المدة الزمنية (تقريباً)</p>
                        <p className="font-bold">14 يوم إلى 21 يوم</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#003979]/10 flex items-center justify-center">
                        <Coins className="w-6 h-6 text-[#003979]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">التكلفة (تقريباً)</p>
                        <p className="font-bold">15,000 ج.س</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button size="lg" className="w-full md:w-auto" asChild>
                      <Link to="/services/factory/form">
                        ابدأ الخدمة
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* تفاصيل الخدمة */}
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="description" className="border rounded-lg">
                  <AccordionTrigger className="px-6">وصف الخدمة</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    خدمة شاملة لتأسيس المصانع تتضمن جميع الإجراءات والتراخيص اللازمة لبدء النشاط الصناعي، بما في ذلك الموافقات البيئية والصناعية
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="beneficiary" className="border rounded-lg">
                  <AccordionTrigger className="px-6">نوع المستفيد</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>الشركات الصناعية</li>
                      <li>المستثمرون الصناعيون</li>
                      <li>المؤسسات الصناعية</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="validity" className="border rounded-lg">
                  <AccordionTrigger className="px-6">الصلاحية</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    صلاحية الترخيص الصناعي 5 سنوات من تاريخ الإصدار
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="conditions" className="border rounded-lg">
                  <AccordionTrigger className="px-6">الشروط</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>الحصول على موافقة بيئية مبدئية</li>
                      <li>توفير مخطط هندسي للمصنع</li>
                      <li>توفير دراسة جدوى اقتصادية</li>
                      <li>تقديم كافة المستندات المطلوبة</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedures" className="border rounded-lg">
                  <AccordionTrigger className="px-6">الإجراءات</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-decimal list-inside space-y-2">
                      <li>تقديم الطلب إلكترونياً</li>
                      <li>دراسة الجدوى الفنية</li>
                      <li>الموافقة البيئية</li>
                      <li>التفتيش الميداني</li>
                      <li>إصدار الترخيص الصناعي</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documents" className="border rounded-lg">
                  <AccordionTrigger className="px-6">المستندات المطلوبة</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>السجل التجاري</li>
                      <li>دراسة الجدوى الاقتصادية</li>
                      <li>المخططات الهندسية</li>
                      <li>دراسة الأثر البيئي</li>
                      <li>عقد ملكية أو إيجار الموقع</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cost" className="border rounded-lg">
                  <AccordionTrigger className="px-6">التكلفة</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    <ul className="list-disc list-inside space-y-2">
                      <li>رسوم الترخيص الصناعي: 10,000 ج.س</li>
                      <li>رسوم الموافقة البيئية: 3,000 ج.س</li>
                      <li>رسوم التفتيش: 2,000 ج.س</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* الشريط الجانبي */}
            <div className="lg:w-80">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">الجهات المتعلقة</h3>
                  <div className="space-y-4">
                    {relatedAgencies.map((agency, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                        <Factory className="w-6 h-6 text-[#003979]" />
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

export default FactoryRegistration;
