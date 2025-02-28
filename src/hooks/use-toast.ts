
import { useToast as useToastInternal } from "../components/ui/use-toast";

export const useToast = () => {
  return useToastInternal();
};

export const toast = {
  info: (title: string, description?: string) => {
    console.log('Info Toast:', title, description);
  },
  success: (title: string, description?: string) => {
    console.log('Success Toast:', title, description);
  },
  error: (title: string, description?: string) => {
    console.log('Error Toast:', title, description);
  },
  warning: (title: string, description?: string) => {
    console.log('Warning Toast:', title, description);
  }
};
