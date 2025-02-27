
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, AlertCircle } from "lucide-react";

type DocumentsStepProps = {
  form: UseFormReturn<any>;
};

export const DocumentsStep = ({ form }: DocumentsStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">المستندات المطلوبة</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">دراسة الجدوى</h4>
                <p className="text-sm text-gray-500">PDF أو Word</p>
              </div>
            </div>
            <Button className="w-full gap-2">
              <Upload className="w-4 h-4" />
              رفع الملف
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">التصاميم الهندسية</h4>
                <p className="text-sm text-gray-500">PDF أو AutoCAD</p>
              </div>
            </div>
            <Button className="w-full gap-2">
              <Upload className="w-4 h-4" />
              رفع الملف
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">دراسة الأثر البيئي</h4>
                <p className="text-sm text-gray-500">PDF</p>
              </div>
            </div>
            <Button className="w-full gap-2">
              <Upload className="w-4 h-4" />
              رفع الملف
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">خطة السلامة المهنية</h4>
                <p className="text-sm text-gray-500">PDF</p>
              </div>
            </div>
            <Button className="w-full gap-2">
              <Upload className="w-4 h-4" />
              رفع الملف
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
        <div>
          <h4 className="font-medium text-yellow-800">ملاحظات هامة</h4>
          <ul className="mt-1 text-sm text-yellow-700 space-y-1">
            <li>• يجب أن تكون جميع المستندات حديثة وسارية المفعول</li>
            <li>• الحد الأقصى لحجم كل ملف 10 ميجابايت</li>
            <li>• يجب أن تكون المستندات باللغة العربية أو مترجمة ترجمة معتمدة</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
