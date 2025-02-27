
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InteractiveMap } from '@/components/opportunities/InteractiveMap';
import { OpportunityDetails } from '@/components/opportunities/OpportunityDetails';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export type FilterOptions = {
  sector: string;
  minInvestment: number;
  maxInvestment: number;
  minReturn: number;
};

export type Opportunity = {
  id: string;
  title: string;
  sector: string;
  investment: number;
  expectedReturn: number;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  documents: {
    name: string;
    url: string;
  }[];
};

const Opportunities = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    sector: '',
    minInvestment: 0,
    maxInvestment: 0,
    minReturn: 0
  });

  // نموذج بيانات للفرص الاستثمارية
  const opportunities: Opportunity[] = [
    {
      id: '1',
      title: 'مشروع زراعي في ولاية الجزيرة',
      sector: 'زراعة',
      investment: 500000,
      expectedReturn: 25,
      description: 'مشروع زراعي متكامل لإنتاج المحاصيل الاستراتيجية',
      location: {
        lat: 14.8437,
        lng: 33.4344,
        address: 'ولاية الجزيرة، السودان'
      },
      documents: [
        { name: 'دراسة الجدوى', url: '/docs/feasibility-1.pdf' },
        { name: 'الوثائق القانونية', url: '/docs/legal-1.pdf' }
      ]
    },
    {
      id: '2',
      title: 'مشروع صناعي في ولاية البحر الأحمر',
      sector: 'صناعة',
      investment: 1200000,
      expectedReturn: 30,
      description: 'مجمع صناعي لتصنيع المواد الغذائية والتعبئة والتغليف',
      location: {
        lat: 19.6162,
        lng: 37.2161,
        address: 'ولاية البحر الأحمر، السودان'
      },
      documents: [
        { name: 'دراسة الجدوى', url: '/docs/feasibility-2.pdf' },
        { name: 'الوثائق القانونية', url: '/docs/legal-2.pdf' }
      ]
    },
    {
      id: '3',
      title: 'مشروع سياحي في ولاية نهر النيل',
      sector: 'سياحة',
      investment: 800000,
      expectedReturn: 28,
      description: 'منتجع سياحي متكامل على ضفاف النيل',
      location: {
        lat: 16.9089,
        lng: 33.9128,
        address: 'ولاية نهر النيل، السودان'
      },
      documents: [
        { name: 'دراسة الجدوى', url: '/docs/feasibility-3.pdf' },
        { name: 'الوثائق القانونية', url: '/docs/legal-3.pdf' }
      ]
    },
    {
      id: '4',
      title: 'مشروع تعديني في ولاية شمال دارفور',
      sector: 'تعدين',
      investment: 2000000,
      expectedReturn: 35,
      description: 'استخراج وتنقية المعادن النفيسة',
      location: {
        lat: 13.6188,
        lng: 25.3547,
        address: 'ولاية شمال دارفور، السودان'
      },
      documents: [
        { name: 'دراسة الجدوى', url: '/docs/feasibility-4.pdf' },
        { name: 'الوثائق القانونية', url: '/docs/legal-4.pdf' }
      ]
    },
    {
      id: '5',
      title: 'مشروع طاقة متجددة في ولاية الخرطوم',
      sector: 'طاقة',
      investment: 1500000,
      expectedReturn: 32,
      description: 'محطة توليد الطاقة الشمسية',
      location: {
        lat: 15.5007,
        lng: 32.5599,
        address: 'ولاية الخرطوم، السودان'
      },
      documents: [
        { name: 'دراسة الجدوى', url: '/docs/feasibility-5.pdf' },
        { name: 'الوثائق القانونية', url: '/docs/legal-5.pdf' }
      ]
    },
    {
      id: '6',
      title: 'مشروع تجاري في ولاية كسلا',
      sector: 'تجارة',
      investment: 700000,
      expectedReturn: 27,
      description: 'مركز تجاري حديث متعدد الاستخدامات',
      location: {
        lat: 15.4517,
        lng: 36.4049,
        address: 'ولاية كسلا، السودان'
      },
      documents: [
        { name: 'دراسة الجدوى', url: '/docs/feasibility-6.pdf' },
        { name: 'الوثائق القانونية', url: '/docs/legal-6.pdf' }
      ]
    }
  ];

  const filteredOpportunities = opportunities.filter(opp =>
    opp.title.includes(searchQuery) ||
    opp.sector.includes(searchQuery) ||
    opp.description.includes(searchQuery)
  );

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <div className="h-52 bg-[#003979] relative overflow-hidden mt-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230055b3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }} />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">الفرص الاستثمارية</h1>
        </div>
      </div>

      <main className="flex-1 -mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-10 mb-16 max-w-2xl mx-auto">
            <div className="relative">
              <Input
                placeholder="ابحث عن الفرص الاستثمارية..."
                className="h-14 pr-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute top-4 right-4 w-6 h-6 text-gray-400" />
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden mb-8">
            <InteractiveMap
              opportunities={filteredOpportunities}
              onSelectOpportunity={setSelectedOpportunity}
            />
          </div>

          {selectedOpportunity && (
            <OpportunityDetails
              opportunity={selectedOpportunity}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOpportunities.map((opp) => (
              <OpportunityDetails
                key={opp.id}
                opportunity={opp}
                compact
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Opportunities;
