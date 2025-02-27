
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface Guide {
  title: string;
  icon: LucideIcon;
  description: string;
}

interface HelpGuidesProps {
  guides: Guide[];
}

export const HelpGuides = ({ guides }: HelpGuidesProps) => {
  return (
    <div className="max-w-6xl mx-auto mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">أدلة المساعدة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <guide.icon className="w-10 h-10 text-primary" />
                <h3 className="font-semibold text-lg w-full">{guide.title}</h3>
                <p className="text-gray-600 text-sm w-full">{guide.description}</p>
                <Button variant="outline" className="w-full">استكشف</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
