
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface AdvisorChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdvisorChat({ open, onOpenChange }: AdvisorChatProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("سيتم إطلاق خدمة المستشار قريباً", {
      description: "نعمل على تطوير هذه الخدمة لتقديم أفضل تجربة استشارية لكم",
      duration: 5000,
    });
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">مستشار الاستثمار</DialogTitle>
          <p className="text-center text-gray-600">يمكنك طرح استفساراتك المتعلقة بالاستثمار في السودان</p>
        </DialogHeader>
        <div className="mt-6">
          <div className="bg-muted rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600">
              مرحباً بك! أنا مستشار الاستثمار الخاص بنافذة التنمية والاستثمار. كيف يمكنني مساعدتك اليوم؟
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="اكتب سؤالك هنا..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] resize-none"
              dir="rtl"
            />
            <Button 
              type="submit" 
              className="w-full gap-2"
            >
              <Send className="w-4 h-4" />
              إرسال السؤال
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
