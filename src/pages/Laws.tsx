
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Scale, Landmark, FileCheck, Shield, DollarSign } from 'lucide-react';

const Laws = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">القوانين والتشريعات</h1>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-right">
              يتميز السودان بإطار قانوني وتنظيمي يشجع على الاستثمار وتأسيس الشركات، مع توفير العديد من الحوافز والضمانات للمستثمرين. فيما يلي نظرة عامة على القوانين والتشريعات الرئيسية المتعلقة بالاستثمار والشركات في السودان.
            </p>

            <Tabs defaultValue="laws" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="laws">القوانين</TabsTrigger>
                <TabsTrigger value="regulations">التشريعات</TabsTrigger>
              </TabsList>

              <TabsContent value="laws" className="space-y-6">
                {/* قانون تشجيع الاستثمار */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">قانون تشجيع الاستثمار السوداني</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>صدر لأول مرة عام 1999 وتم تعديله عدة مرات.</li>
                      <li>يهدف إلى جذب الاستثمارات المحلية والأجنبية.</li>
                      <li>يمنح المستثمرين حوافز مثل الإعفاءات الضريبية والجمركية.</li>
                      <li>يضمن للمستثمرين حقوقًا مثل عدم التأميم والمصادرة إلا بتعويض عادل.</li>
                      <li>يسمح بالتحويلات المالية بحرية بعد سداد الالتزامات القانونية.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* قانون الشركات */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <Scale className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">قانون الشركات</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>ينظم تأسيس وعمل الشركات في السودان.</li>
                      <li>يحدد أنواع الشركات وإجراءات تأسيسها وهيكلها الإداري والتنظيمي.</li>
                      <li>يركز على الشفافية والحوكمة الرشيدة لضمان بيئة أعمال مستقرة.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* قانون سلطة تنظيم أسواق المال */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <Landmark className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">قانون سلطة تنظيم أسواق المال (2016)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>ينشئ هيئة مستقلة تشرف على الأسواق المالية والمؤسسات غير المصرفية.</li>
                      <li>يعزز الشفافية والعدالة في الاستثمار المالي.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* قانون سوق الخرطوم للأوراق المالية */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <DollarSign className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">قانون سوق الخرطوم للأوراق المالية (1994)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>ينظم إصدار وتداول الأوراق المالية.</li>
                      <li>يشجع على الادخار وزيادة الوعي الاستثماري.</li>
                      <li>يهدف إلى توسيع الملكية الخاصة في الاقتصاد.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="regulations" className="space-y-6">
                {/* الإعفاءات الضريبية والجمركية */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <FileCheck className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">الإعفاءات الضريبية والجمركية</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>إعفاءات تصل إلى 10 سنوات للمشاريع الاستثمارية.</li>
                      <li>إعفاءات على المعدات الرأسمالية ووسائل النقل المرتبطة بالمشاريع.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* حقوق وضمانات المستثمرين */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <Shield className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">حقوق وضمانات المستثمرين</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>لا يجوز مصادرة المشاريع أو تأميمها إلا بموجب قانون وتعويض عادل.</li>
                      <li>لا يجوز الحجز على أموال المستثمر إلا بأمر قضائي.</li>
                      <li>يُسمح بحرية تحويل الأرباح ورأس المال بالعملة الأجنبية.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* تنظيم تأسيس الشركات */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <Scale className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">تنظيم تأسيس الشركات</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>إجراءات مرنة لتسجيل الشركات المحلية والأجنبية.</li>
                      <li>إلزام الشركات بتقديم تقارير مالية دورية لضمان الشفافية.</li>
                      <li>متطلبات الحوكمة والإدارة لضمان بيئة عمل قانونية ومنظمة.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* تنظيم الأسواق المالية */}
                <Card>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <Landmark className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-center">تنظيم الأسواق المالية</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                      <li>تشريعات تحكم عمليات البيع والشراء في البورصة.</li>
                      <li>قواعد لحماية المستثمرين وضمان استقرار السوق المالي.</li>
                      <li>معايير لضمان عدالة وشفافية التداولات المالية.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Laws;
