
import { Globe } from 'lucide-react';
import { toast } from 'sonner';

export const LanguageSelector = () => {
  return (
    <button 
      className="flex items-center gap-1 text-sm text-gray-200 hover:text-primary transition-colors"
      onClick={() => toast.info("سيتم دعم اللغة الإنجليزية قريباً")}
    >
      <Globe className="w-4 h-4" />
      <span>English</span>
    </button>
  );
};
