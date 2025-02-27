
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, ChevronLeft, Building2, Factory, Scale, FileBarChart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      id: 'company-registration',
      title: 'التأسيس الشامل للشركات',
      icon: Building2,
      description: 'خدمة متكاملة لتأسيس الشركات تشمل جميع المتطلبات القانونية والإجراءات اللازمة للبدء في النشاط التجاري',
      path: '/services/commercial-records'
    },
    {
      id: 'factory-setup',
      title: 'تأسيس مصنع',
      icon: Factory,
      description: 'خدمة شاملة لتأسيس المصانع وتجهيزها بما يتوافق مع المعايير والاشتراطات الصناعية',
      path: '/services/factory'
    },
    {
      id: 'licenses',
      title: 'التراخيص والتصاريح',
      icon: FileText,
      description: 'إصدار وتجديد التراخيص والتصاريح اللازمة لممارسة الأنشطة التجارية والصناعية',
      path: '/services/licenses'
    },
    {
      id: 'contracts',
      title: 'العقود التجارية',
      icon: Scale,
      description: 'خدمات إعداد ومراجعة وتوثيق العقود التجارية بمختلف أنواعها',
      path: '/services/contracts'
    },
    {
      id: 'financial',
      title: 'الالتزامات المالية',
      icon: FileBarChart,
      description: 'إدارة الالتزامات المالية والضريبية وتنظيم المدفوعات الحكومية',
      path: '/services/financial'
    }
  ];

  const filteredServices = services.filter(service => 
    service.title.includes(searchQuery) || 
    service.description.includes(searchQuery)
  );

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <div className="h-52 bg-[#003979] relative overflow-hidden mt-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230055b3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }} />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">الخدمات الإلكترونية</h1>
        </div>
      </div>

      <main className="flex-1 -mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-10 mb-16 max-w-2xl mx-auto">
            <div className="relative">
              <Input
                placeholder="ابحث عن الخدمة"
                className="h-14 pr-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute top-4 right-4 w-6 h-6 text-gray-400" />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all border-t-4 border-t-[#e9c46a]">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-[#003979]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-[#003979]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <Button asChild variant="link" className="p-0 text-[#003979] group-hover:gap-2 transition-all">
                    <Link to={service.path}>
                      <span>ابدأ الخدمة</span>
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
