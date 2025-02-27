
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 mt-16 overflow-hidden">
      {/* خلفية الفوتر */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/img/12.png")',
          opacity: 0.3
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-200">
          {/* القسم الأول - معلومات الاتصال */}
          <div className="md:col-span-4 bg-white/90 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-primary">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <span className="text-gray-700">الخرطوم، السودان – برج الاستثمار،  </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">+249 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">support@investment.di.sd</span>
              </li>
            </ul>
          </div>

          {/* القسم الثاني - روابط سريعة */}
          <div className="md:col-span-4 bg-white/90 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-primary">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link to="/opportunities" className="text-gray-700 hover:text-primary transition-colors">الفرص الاستثمارية</Link></li>
              <li><Link to="/services" className="text-gray-700 hover:text-primary transition-colors">الخدمات الإلكترونية</Link></li>
              <li><Link to="/tourism" className="text-gray-700 hover:text-primary transition-colors">السياحة في السودان</Link></li>
            </ul>
          </div>

          {/* القسم الثالث - الدعم والسياسات */}
          <div className="md:col-span-4 bg-white/90 p-6 rounded-lg shadow-sm">
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-6 text-primary">الدعم الفني</h3>
              <ul className="space-y-3">
                <li><Link to="/faq" className="text-gray-700 hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
                <li><Link to="/guide" className="text-gray-700 hover:text-primary transition-colors">إرشادات الاستخدام</Link></li>
                <li><Link to="/support" className="text-gray-700 hover:text-primary transition-colors">رفع تذكرة دعم</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-primary">السياسات</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-gray-700 hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
                <li><Link to="/terms" className="text-gray-700 hover:text-primary transition-colors">شروط الاستخدام</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-700">حقوق النشر © {new Date().getFullYear()} نافذة التنمية والاستثمار. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

