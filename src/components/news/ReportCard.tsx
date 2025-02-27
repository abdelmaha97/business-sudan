
import { Report } from "@/types/news";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText } from "lucide-react";

export const ReportCard = ({ report }: { report: Report }) => {
  return (
    <div className="flex items-center justify-between p-6">
      <Button variant="ghost" className="flex items-center gap-2">
        <Download className="w-4 h-4" />
        تحميل
      </Button>
      <div className="flex items-center gap-4">
        <div>
          <h3 className="font-semibold mb-1 text-right">{report.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 justify-end">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {report.date}
            </span>
            <span>{report.size}</span>
            <span className="text-primary">{report.type}</span>
          </div>
        </div>
        <div className="p-3 bg-primary/10 text-primary rounded-lg">
          <FileText className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
