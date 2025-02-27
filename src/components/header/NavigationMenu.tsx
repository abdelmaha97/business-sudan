
import { Home, TreePalm, Newspaper, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

interface NavigationMenuProps {
  closeMenu?: () => void;
  isMobile?: boolean;
}

export const NavigationMenu = ({ closeMenu, isMobile }: NavigationMenuProps) => {
  const { t } = useLanguage();
  
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <Home className="w-5 h-5" />
          <span>الرئيسية</span>
        </Link>
        
        <Link 
          to="/opportunities" 
          className="text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          {t('opportunities')}
        </Link>

        <Link 
          to="/services"
          className="text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <span>الخدمات الإلكترونية</span>
        </Link>

        <Link
          to="/news"
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <Newspaper className="w-4 h-4" />
          <span>الأخبار والتقارير</span>
        </Link>

        <Link
          to="/laws"
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <FileText className="w-4 h-4" />
          <span>القوانين والتشريعات</span>
        </Link>

        <Link 
          to="/tourism" 
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <TreePalm className="w-5 h-5" />
          <span>السياحة في السودان</span>
        </Link>

        <Link 
          to="/help" 
          className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <HelpCircle className="w-5 h-5" />
          <span>الدعم والمساعدة</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-8">
      <Link 
        to="/" 
        className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
      >
        <Home className="w-5 h-5" />
        <span>الرئيسية</span>
      </Link>

      <Link to="/opportunities" className="text-gray-700 hover:text-primary transition-colors">
        {t('opportunities')}
      </Link>

      <Link 
        to="/services" 
        className="text-gray-700 hover:text-primary transition-colors"
      >
        <span>الخدمات الإلكترونية</span>
      </Link>

      <Link
        to="/news"
        className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
      >
        <Newspaper className="w-4 h-4" />
        <span>الأخبار والتقارير</span>
      </Link>

      <Link
        to="/laws"
        className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
      >
        <FileText className="w-4 h-4" />
        <span>القوانين والتشريعات</span>
      </Link>

      <Link to="/tourism" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
        <TreePalm className="w-5 h-5" />
        <span>السياحة في السودان</span>
      </Link>

      <Link to="/help" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
        <HelpCircle className="w-5 h-5" />
        <span>الدعم والمساعدة</span>
      </Link>
    </div>
  );
};
