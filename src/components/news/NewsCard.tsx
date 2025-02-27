
import { NewsItem } from "@/types/news";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { NewsDialog } from "./NewsDialog";

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export const NewsCard = ({ news, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[16/9] md:aspect-auto md:h-full overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 justify-end">
              <Calendar className="w-4 h-4" />
              <span>{news.date}</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                {news.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-right">{news.title}</h2>
            <p className="text-gray-600 mb-6 text-right">{news.summary}</p>
            <NewsDialog news={news} />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6 text-right">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 justify-end">
          <Calendar className="w-4 h-4" />
          <span>{news.date}</span>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
            {news.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
        <p className="text-gray-600 mb-4">{news.summary}</p>
        <NewsDialog news={news} />
      </CardContent>
    </Card>
  );
};
