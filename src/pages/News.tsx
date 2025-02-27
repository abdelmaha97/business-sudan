
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Newspaper } from "lucide-react";
import { NewsCard } from "@/components/news/NewsCard";
import { ReportCard } from "@/components/news/ReportCard";
import { newsData, reportsData } from "@/data/newsData";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl">
      <Header />
      
      <main className="flex-1 pt-24">
        {/* قسم الترحيب */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">أخبار وتقارير الاستثمار</h1>
              <p className="text-gray-600">
                اطلع على آخر الأخبار والتقارير المتعلقة بالاستثمار والتنمية في السودان
              </p>
            </div>
          </div>
        </section>

        {/* المحتوى الرئيسي */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="news" className="space-y-8">
            <TabsList className="w-full justify-center">
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                <span>الأخبار</span>
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>التقارير</span>
              </TabsTrigger>
            </TabsList>

            {/* قسم الأخبار */}
            <TabsContent value="news">
              <div className="space-y-8">
                <NewsCard news={newsData[0]} featured />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {newsData.slice(1).map((item) => (
                    <NewsCard key={item.id} news={item} />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* قسم التقارير */}
            <TabsContent value="reports">
              <div className="bg-white rounded-lg shadow-sm">
                {reportsData.map((report, index) => (
                  <div
                    key={report.id}
                    className={index !== reportsData.length - 1 ? "border-b" : ""}
                  >
                    <ReportCard report={report} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
