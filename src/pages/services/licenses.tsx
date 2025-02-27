
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, FileCheck, Users, Truck, TreePine, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Licenses = () => {
  const licenses = [
    {
      id: 'economic',
      title: 'ترخيص النشاط الاقتصادي',
      icon: Building2,
      issuer: 'وزارة التجارة والصناعة',
      description: 'يتيح هذا الترخيص للشركات ممارسة الأنشطة الاقتصادية المختلفة وفقًا للقوانين واللوائح المعمول بها في السودان. يشمل كافة الأنشطة التجارية والصناعية.',
      link: '/services/licenses/economic'
    },
    {
      id: 'tax',
      title: 'ترخيص البطاقة الضريبية',
      icon: FileCheck,
      issuer: 'ديوان الضرائب',
      description: 'هو الترخيص الذي يُمنح للشركات والأفراد لممارسة الأنشطة التجارية والصناعية بشكل قانوني من خلال التسجيل في ديوان الضرائب ودفع الضرائب المطلوبة.',
      link: '/services/licenses/tax'
    },
    {
      id: 'chamber',
      title: 'ترخيص الغرفة التجارية',
      icon: Building2,
      issuer: 'الغرفة التجارية للأعمال التجارية',
      description: 'يتيح هذا الترخيص للشركات الانضمام إلى الغرفة التجارية وتوثيق علاقتها بها، مما يعزز من فرصها في التعامل مع مختلف القطاعات التجارية في السودان.',
      link: '/services/licenses/chamber'
    }
  ];

  const permits = [
    {
      id: 'workforce',
      title: 'تصاريح القوى العاملة',
      icon: Users,
      issuer: 'وزارة العمل - الضمان الاجتماعي',
      description: 'يتعلق هذا القسم بتصاريح العمل للموظفين سواء كانوا سودانيين أو أجانب. يشمل تصاريح العمل للموظفين المحليين والأجانب.',
      link: '/services/permits/workforce'
    },
    {
      id: 'transport',
      title: 'تصاريح النقل البري',
      icon: Truck,
      issuer: 'الشرطة',
      description: 'يتضمن هذا القسم التصاريح المتعلقة بشركات النقل سواء كانت شركات نقل بري أو شركات تأجير سيارات.',
      link: '/services/permits/transport'
    },
    {
      id: 'environmental',
      title: 'التصاريح البيئية',
      icon: TreePine,
      issuer: 'وزارة البيئة',
      description: 'يتعلق هذا القسم بالأنشطة الصناعية أو التجارية التي قد تؤثر على البيئة.',
      link: '/services/permits/environmental'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">التراخيص والتصاريح</h1>

          <Tabs defaultValue="licenses" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="licenses" className="text-lg">التراخيص</TabsTrigger>
              <TabsTrigger value="permits" className="text-lg">التصاريح</TabsTrigger>
            </TabsList>

            <TabsContent value="licenses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {licenses.map((license) => (
                  <Card key={license.id} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <license.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">{license.title}</h3>
                      <p className="text-sm text-primary mb-4">{license.issuer}</p>
                      <p className="text-gray-600 mb-6 text-sm">{license.description}</p>
                      <Button asChild className="w-full">
                        <Link to={license.link} className="flex items-center justify-center gap-2">
                          <span>تقديم الطلب</span>
                          <ChevronLeft className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="permits">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {permits.map((permit) => (
                  <Card key={permit.id} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <permit.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">{permit.title}</h3>
                      <p className="text-sm text-primary mb-4">{permit.issuer}</p>
                      <p className="text-gray-600 mb-6 text-sm">{permit.description}</p>
                      <Button asChild className="w-full">
                        <Link to={permit.link} className="flex items-center justify-center gap-2">
                          <span>تقديم الطلب</span>
                          <ChevronLeft className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">ملاحظات هامة:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>جميع التصاريح والتراخيص تتطلب تعبئة النماذج عبر النظام الإلكتروني</li>
              <li>يجب دفع الرسوم عبر طرق الدفع الإلكترونية المتاحة</li>
              <li>يمكن متابعة حالة الطلبات وتحديثاتها مباشرة عبر النظام الإلكتروني</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Licenses;
