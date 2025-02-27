
import { NewsItem } from "@/types/news";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, ArrowLeft, Share2, X } from "lucide-react";

export const NewsDialog = ({ news }: { news: NewsItem }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-primary flex items-center gap-2">
          اقرأ المزيد
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 text-right">{news.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 justify-end">
            <Calendar className="w-4 h-4" />
            <span>{news.date}</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
              {news.category}
            </span>
          </div>
          <p className="text-gray-700 text-right leading-relaxed whitespace-pre-line">
            {news.content}
          </p>
          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              مشاركة
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
