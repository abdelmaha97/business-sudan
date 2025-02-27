
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import type { FilterOptions } from '@/pages/Opportunities';

interface AdvancedFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const AdvancedFilter = ({ filters, onFilterChange }: AdvancedFilterProps) => {
  const sectors = [
    'الكل',
    'زراعة',
    'صناعة',
    'تكنولوجيا',
    'عقارات',
    'سياحة',
    'تعدين',
    'خدمات'
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>القطاع</Label>
            <Select
              value={filters.sector}
              onValueChange={(value) => onFilterChange({ ...filters, sector: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر القطاع" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector.toLowerCase()}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>المبلغ الاستثماري (بالدولار)</Label>
            <div className="pt-2">
              <Slider
                min={0}
                max={1000000}
                step={10000}
                value={[filters.minInvestment, filters.maxInvestment]}
                onValueChange={([min, max]) => 
                  onFilterChange({ ...filters, minInvestment: min, maxInvestment: max })}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{filters.minInvestment.toLocaleString()} $</span>
                <span>{filters.maxInvestment.toLocaleString()} $</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>العائد المتوقع (٪)</Label>
            <div className="pt-2">
              <Slider
                min={0}
                max={100}
                step={5}
                value={[filters.minReturn]}
                onValueChange={([value]) => 
                  onFilterChange({ ...filters, minReturn: value })}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>٪{filters.minReturn}</span>
                <span>٪100</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
