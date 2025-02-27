import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChevronLeft, ArrowRight, Building2, FileText, HelpCircle, Play, TrendingUp, Building, Users, MessageSquare, Coins, TreePalm, FileBarChart, Scale, Calculator, MapPin, Target } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/i18n/translations";
import { useState } from 'react';
import { AdvisorChat } from '@/components/advisor/AdvisorChat';

const Index = () => {
  const { t, language } = useLanguage();
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  
  const sectors = Object.entries(translations[language].opportunities.sectors)
    .filter(([key]) => key !== 'all')
    .map(([key, value]) => ({
      key,
      value: value as string
    }));

  return (
    <div className="min-h-screen flex flex-col" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="flex-1">
      <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/5.mp4" type="video/mp4" />
          </video>
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl animate-slide-in">
              بوابتك نحو الاستثمار في السودان
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl animate-slide-in" style={{ animationDelay: "0.1s" }}>
              منصة رقمية متكاملة تسهل عمليات تسجيل الشركات، إصدار التراخيص، واكتشاف الفرص الاستثمارية
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <Button variant="default" size="lg" className="gap-2" asChild>
                <a href="/register">
                  <Building2 className="w-5 h-5" />
                  <span>ابدأ الآن - تسجيل شركتك</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm" asChild>
                <a href="/opportunities">
                  <TrendingUp className="w-5 h-5" />
                  <span>استكشف الفرص الاستثمارية</span>
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="gap-2" asChild>
                <a href="/laws">
                  <FileText className="w-5 h-5" />
                  <span>تعرف على القوانين والتشريعات</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-primary/5">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">+1583</div>
                <p className="text-gray-600">شركة مسجلة حديثاً</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5">
                <Coins className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">+3</div>
                <p className="text-gray-600">مليار دولار قيمة الاستثمارات المفعّلة</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">+18</div>
                <p className="text-gray-600">فرص استثمارية مطروحة</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">+62</div>
                <p className="text-gray-600">مناطق سياحية بها مشاريع استثمار</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('mainServices', 'common')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/img/15.jpg" 
                      alt="تسجيل الشركات" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">تسجيل الشركات</h3>
                  <p className="text-gray-600 mb-4">خدمات شاملة لتسجيل وتأسيس الشركات بكافة أنواعها</p>
                  <Button variant="link" className="p-0" asChild>
                    <a href="/services/register" className="inline-flex items-center text-primary hover:gap-2 transition-all">
                      <span>{t('learnMore', 'common')}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/img/9.jpg" 
                      alt="إدارة التراخيص" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">إدارة التراخيص والتصاريح</h3>
                  <p className="text-gray-600 mb-4">إصدار وتجديد التراخيص والتصاريح التجارية</p>
                  <Button variant="link" className="p-0" asChild>
                    <a href="/services/licenses" className="inline-flex items-center text-primary hover:gap-2 transition-all">
                      <span>{t('learnMore', 'common')}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                        src="/img/17.jpg" 
                        alt="العقود التجارية" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Scale className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">العقود التجارية</h3>
                  <p className="text-gray-600 mb-4">إدارة وتوثيق العقود التجارية وحماية حقوق الأطراف</p>
                  <Button variant="link" className="p-0" asChild>
                    <a href="/services/contracts" className="inline-flex items-center text-primary hover:gap-2 transition-all">
                      <span>{t('learnMore', 'common')}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/img/8.jpg" 
                      alt="إدارة الالتزامات المالية" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Calculator className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">إدارة الالتزامات المالية</h3>
                  <p className="text-gray-600 mb-4">خدمات إدارة الضرائب والرسوم والالتزامات المالية</p>
                  <Button variant="link" className="p-0" asChild>
                    <a href="/services/financial" className="inline-flex items-center text-primary hover:gap-2 transition-all">
                      <span>{t('learnMore', 'common')}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">{t('investmentOpportunities', 'common')}</h2>
              <Button variant="outline" asChild>
                <a href="/opportunities" className="inline-flex items-center gap-2">
                  <span>{t('viewAll', 'common')}</span>
                  <ChevronLeft className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map(({ key, value }) => (
                <Card key={key} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={`https://source.unsplash.com/featured/?sudan,${value}`}
                        alt={value}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{value}</span>
                    </div>
                    <h3 className="font-bold mb-2">{language === 'ar' ? `مشروع استثماري في ${value}` : `Investment Project in ${value}`}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {language === 'ar' ? `فرصة استثمارية واعدة في قطاع ${value}` : `Promising investment opportunity in ${value} sector`}
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <a href={`/opportunities/${key}`} className="inline-flex items-center text-primary">
                        <span>{t('details', 'common')}</span>
                        <ChevronLeft className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">{t('latestNews', 'common')}</h2>
              <Button variant="outline" asChild>
                <a href="/news" className="inline-flex items-center gap-2">
                  <span>{t('viewAll', 'common')}</span>
                  <ChevronLeft className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  ar: 'تحديثات جديدة في قوانين الاستثمار',
                  en: 'New Updates in Investment Laws',
                  image: '/img/22.jpg' 
                },
                {
                  ar: 'تقرير: نمو الاستثمارات في القطاع الزراعي',
                  en: 'Report: Growth in Agricultural Investments',
                  image: '/img/21.jpg'
                },
                {
                  ar: 'فرص واعدة في قطاع التكنولوجيا',
                  en: 'Promising Opportunities in Technology Sector',
                  image: '/img/20.jpg'
                }
              ].map((title) => (
                <Card key={title[language]} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={title.image}
                        alt={title[language]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>15 {language === 'ar' ? 'مارس' : 'March'} 2024</span>
                    </div>
                    <h3 className="font-bold mb-2">{title[language]}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {language === 'ar' 
                        ? 'تحليل شامل للتطورات الأخيرة في سوق الاستثمار السوداني'
                        : 'Comprehensive analysis of recent developments in the Sudanese investment market'}
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <a href="/news/1" className="inline-flex items-center text-primary">
                        <span>{t('readMore', 'common')}</span>
                        <ChevronLeft className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('readyToStart', 'common')}</h2>
            <p className="text-xl mb-8 opacity-90">{t('joinInvestors', 'common')}</p>
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <a href="/register">
                <span>{t('registerNow', 'common')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        <div className="fixed bottom-6 left-6 z-50">
          <Button 
            size="lg" 
            className="gap-2 rounded-full shadow-lg" 
            onClick={() => setIsAdvisorOpen(true)}
          >
            <MessageSquare className="w-5 h-5" />
            <span>اسأل مستشار الاستثمار</span>
          </Button>
        </div>
      </main>

      <AdvisorChat 
        open={isAdvisorOpen} 
        onOpenChange={setIsAdvisorOpen} 
      />

      <Footer />
    </div>
  );
};

export default Index;
