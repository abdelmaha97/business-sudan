
import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { LanguageSelector } from './header/LanguageSelector';
import { NotificationBell } from './header/NotificationBell';
import { UserMenu } from './header/UserMenu';
import { NavigationMenu } from './header/NavigationMenu';
import { ServicesDialog } from './services/ServicesDialog';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const userName = 'محمد عبد المحمود';

  useEffect(() => {
    // التحقق من حالة تسجيل الدخول عند تحميل المكون
    // وأيضاً عند الدخول إلى لوحة التحكم أو الملف الشخصي
    const checkLoginStatus = () => {
      const isDashboardRoute = location.pathname.startsWith('/dashboard');
      const isProfileRoute = location.pathname === '/profile';
      
      if (isDashboardRoute || isProfileRoute) {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loginStatus);
      }
    };

    checkLoginStatus();
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    toast.success('تم تسجيل الخروج بنجاح');
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* الشريط العلوي - شريط التحكم */}
      <div className="bg-secondary text-white">
        <div className="container mx-auto px-4 h-10">
          <div className="flex items-center justify-end h-full gap-4">
            <LanguageSelector />

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <NotificationBell />
                <UserMenu userName={userName} onLogout={handleLogout} />
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 text-sm text-gray-200 hover:text-primary transition-colors"
              >
                <User className="w-4 h-4" />
                <span>تسجيل الدخول</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* الشريط السفلي - شريط التنقل */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img
                src="/img/logo.png"
                alt="Development & Investment Portal"
                className="h-12"
              />
            </Link>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <NavigationMenu />
          </div>

          {/* القائمة المنسدلة للشاشات الصغيرة */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
              <NavigationMenu isMobile closeMenu={() => setIsMenuOpen(false)} />
            </div>
          )}
        </div>
      </nav>

      <ServicesDialog open={isServicesOpen} onOpenChange={setIsServicesOpen} />
    </header>
  );
};
