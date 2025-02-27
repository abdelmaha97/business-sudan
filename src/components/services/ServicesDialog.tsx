
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Building2, Factory, FileText, Scale, FileBarChart, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServicesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ServicesDialog = ({ open, onOpenChange }: ServicesDialogProps) => {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0" dir="rtl">
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold mb-8">اختر واحدة من الخدمات لإنشاء شركتك في السودان</h2>
          
          <div className="relative">
            <Input
              placeholder="اكتب اسم الخدمة (مثال: التأسيس الشامل)"
              className="h-12 pr-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute top-3 right-4 w-6 h-6 text-gray-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{service.description}</p>
                  </div>
                  <Button asChild variant="link" className="p-0 text-primary group-hover:gap-2 transition-all">
                    <Link to={service.path} onClick={() => onOpenChange(false)}>
                      <span>ابدأ الخدمة</span>
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
