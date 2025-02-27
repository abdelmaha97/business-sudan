
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LifeBuoy, Search, FileQuestion, Settings, MessageSquare, Headset } from 'lucide-react';
import { useState } from 'react';
import { FAQSection } from '@/components/help/FAQSection';
import { ContactSection } from '@/components/help/ContactSection';
import { GuidesSection } from '@/components/help/GuidesSection';
import { HelpGuides } from '@/components/help/HelpGuides';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "كيف يمكنني تسجيل شركة جديدة؟",
      answer: "يمكنك تسجيل شركة جديدة من خلال قسم الخدمات الإلكترونية > السجلات التجارية > تسجيل جديد. قم باتباع الخطوات وملء النموذج المطلوب مع إرفاق المستندات اللازمة."
    },
    {
      question: "ما هي المستندات المطلوبة لتسجيل شركة؟",
      answer: "المستندات الأساسية تشمل: صور الهويات للشركاء، عقد التأسيس، النظام الأساسي للشركة، إثبات المقر الرئيسي، وأي مستندات إضافية حسب نوع النشاط."
    },
    {
      question: "كيف يمكنني تتبع حالة طلبي؟",
      answer: "يمكنك تتبع حالة طلبك من خلال قسم الخدمات الإلكترونية > السجلات التجارية > تتبع الطلب، ثم إدخال رقم الطلب الذي استلمته عبر البريد الإلكتروني."
    },
    {
      question: "ما هي مدة معالجة الطلب؟",
      answer: "تستغرق معالجة الطلب عادةً من 3 إلى 5 أيام عمل، قد تختلف المدة حسب اكتمال المستندات المطلوبة وصحتها."
    },
    {
      question: "كيف يمكنني الاطلاع على الفرص الاستثمارية المتاحة؟",
      answer: "يمكنك استكشاف الفرص الاستثمارية المتاحة من خلال قسم الفرص الاستثمارية في الموقع، حيث يمكنك تصفية الفرص حسب القطاع والموقع وحجم الاستثمار."
    }
  ];

  const guides = [
    {
      title: "دليل تسجيل الشركات",
      icon: FileQuestion,
      description: "خطوة بخطوة لتسجيل شركتك بنجاح"
    },
    {
      title: "دليل استخدام المنصة",
      icon: Settings,
      description: "تعرف على كيفية استخدام جميع خدمات المنصة"
    },
    {
      title: "الأسئلة الشائعة",
      icon: MessageSquare,
      description: "إجابات على الأسئلة الأكثر تكراراً"
    },
    {
      title: "التواصل مع الدعم",
      icon: Headset,
      description: "تواصل مع فريق الدعم الفني"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* قسم البحث الرئيسي */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <LifeBuoy className="w-12 h-12 text-primary" />
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">كيف يمكننا مساعدتك؟</h1>
              <p className="text-gray-600">ابحث عن إجابات لأسئلتك أو تواصل مع فريق الدعم</p>
            </div>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="ابحث عن سؤال..."
                className="w-full pl-4 pr-12 py-6 text-right"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <HelpGuides guides={guides} />

          {/* الأقسام الرئيسية */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="faq" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
                <TabsTrigger value="contact">تواصل معنا</TabsTrigger>
                <TabsTrigger value="guides">الأدلة الإرشادية</TabsTrigger>
              </TabsList>

              <TabsContent value="faq">
                <FAQSection faqs={faqs} />
              </TabsContent>

              <TabsContent value="contact">
                <ContactSection />
              </TabsContent>

              <TabsContent value="guides">
                <GuidesSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
