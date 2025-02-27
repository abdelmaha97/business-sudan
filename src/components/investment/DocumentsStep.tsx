
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Upload } from "lucide-react";

type DocumentsStepProps = {
  form: UseFormReturn<any>;
};

export const DocumentsStep = ({ form }: DocumentsStepProps) => {
  const [documents, setDocuments] = useState<File[]>([]);

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-6">المستندات المطلوبة</h3>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 space-y-4">
          <h4 className="font-medium mb-2">المستندات المطلوبة للاستثمار</h4>
          <div className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary">
            <Input
              type="file"
              className="hidden"
              id="documents"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  setDocuments(Array.from(e.target.files));
                }
              }}
            />
            <label htmlFor="documents" className="cursor-pointer text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">اضغط هنا لرفع المستندات</span>
            </label>
          </div>
          {documents.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">المستندات المرفقة:</h5>
              <ul className="text-sm space-y-1">
                {documents.map((file, index) => (
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
