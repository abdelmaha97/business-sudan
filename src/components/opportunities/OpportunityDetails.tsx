
import { Download, MapPin, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import type { Opportunity } from '@/pages/Opportunities';

interface OpportunityDetailsProps {
  opportunity: Opportunity;
  compact?: boolean;
}

export const OpportunityDetails = ({ opportunity, compact = false }: OpportunityDetailsProps) => {
  return (
    <Card>
      <CardContent className={compact ? "p-4" : "p-6"}>
        <div className="space-y-4">
          <div>
            <h3 className={`font-bold ${compact ? "text-lg" : "text-2xl"} mb-2`}>
              {opportunity.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{opportunity.location.address}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">المبلغ المطلوب</div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="font-semibold">
                  {opportunity.investment.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">العائد المتوقع</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="font-semibold">٪{opportunity.expectedReturn}</span>
              </div>
            </div>
          </div>

          {!compact && (
            <>
              <div>
                <h4 className="font-semibold mb-2">وصف المشروع</h4>
                <p className="text-gray-600">{opportunity.description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">المستندات المتاحة</h4>
                <div className="space-y-2">
                  {opportunity.documents.map((doc) => (
                    <Button
                      key={doc.name}
                      variant="outline"
                      className="w-full justify-start gap-2"
                      asChild
                    >
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" />
                        <span>{doc.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link to="/opportunities/investment-request">تقديم طلب استثمار</Link>
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
