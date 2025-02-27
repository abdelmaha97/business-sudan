
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Upload } from "lucide-react";

type DocumentsStepProps = {
  form: UseFormReturn<any>;
};

export const DocumentsStep = ({ form }: DocumentsStepProps) => {
  const [idDocuments, setIdDocuments] = useState<File[]>([]);
  const [companyDocuments, setCompanyDocuments] = useState<File[]>([]);

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-6">المستندات المطلوبة</h3>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 space-y-4">
          <h4 className="font-medium mb-2">صور إثبات الهوية للشركاء/المؤسسين</h4>
          <div className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary">
            <Input
              type="file"
              className="hidden"
              id="id-documents"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  setIdDocuments(Array.from(e.target.files));
                }
              }}
            />
            <label htmlFor="id-documents" className="cursor-pointer text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">اضغط هنا لرفع المستندات</span>
            </label>
          </div>
          {idDocuments.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">المستندات المرفقة:</h5>
              <ul className="text-sm space-y-1">
                {idDocuments.map((file, index) => (
                  <li key={index} className="text-gray-600">{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <h4 className="font-medium mb-2">عقد التأسيس والنظام الأساسي للشركة</h4>
          <div className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary">
            <Input
              type="file"
              className="hidden"
              id="company-documents"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  setCompanyDocuments(Array.from(e.target.files));
                }
              }}
            />
            <label htmlFor="company-documents" className="cursor-pointer text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">اضغط هنا لرفع المستندات</span>
            </label>
          </div>
          {companyDocuments.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">المستندات المرفقة:</h5>
              <ul className="text-sm space-y-1">
                {companyDocuments.map((file, index) => (
                  <li key={index} className="text-gray-600">{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
