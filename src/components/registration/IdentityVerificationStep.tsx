
import { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUploader } from "@/components/services/FileUploader";
import { Camera, Upload, Check, AlertCircle, Calendar, Flag, CreditCard, User } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import { UseFormReturn } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface PersonalInfoStepProps {
  form: UseFormReturn<any>;
  goToNextStep: () => void;
  onBack: () => void;
}

export const PersonalInfoStep = ({ form, goToNextStep, onBack }: PersonalInfoStepProps) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  
  // تشغيل الكاميرا
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error("خطأ في الوصول إلى الكاميرا:", err);
      toast.error("لا يمكن الوصول إلى الكاميرا");
    }
  };

  // التقاط الصورة
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // ضبط أبعاد الصورة المقتطعة
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // رسم الصورة على الكانفاس
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // تحويل الصورة إلى URL
      const imageDataURL = canvas.toDataURL('image/png');
      setCapturedImage(imageDataURL);
      
      // تحويل الصورة إلى ملف
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "identity-document.png", { type: "image/png" });
          setUploadedFile(file);
        }
      });

      // إيقاف الكاميرا
      stopCamera();
    }
  };

  // إيقاف الكاميرا
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
    }
  };

  // التعامل مع الملفات المرفوعة
  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      setUploadedFile(files[0]);
      
      // تحويل الملف إلى URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // تحليل البيانات من الصورة (OCR)
  const analyzeIdentity = async () => {
    setIsAnalyzing(true);
    
    try {
      // محاكاة عملية التحليل
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // بيانات مستخرجة (هذه بيانات وهمية)
      const extractedData = {
        fullName: "محمد أحمد عبدالله",
        nationality: "سوداني",
        idNumber: "1234567890",
        birthDate: "1990-01-15"
      };
      
      // تحديث نموذج البيانات
      form.setValue("fullName", extractedData.fullName);
      form.setValue("nationality", extractedData.nationality);
      form.setValue("idNumber", extractedData.idNumber);
      form.setValue("birthDate", extractedData.birthDate);
      
      toast.success("تم استخراج البيانات بنجاح");
      setIsAnalyzed(true);
    } catch (error) {
      toast.error("حدث خطأ أثناء تحليل الهوية");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAnalyzed) {
      toast.error("يرجى التقاط صورة وتحليل البيانات أولاً");
      return;
    }
    
    form.trigger(['fullName', 'idNumber', 'birthDate']).then(isValid => {
      if (isValid) {
        goToNextStep();
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">البيانات الشخصية</h2>
      
      <Alert variant="default" className="bg-blue-50 border-blue-200 text-blue-800 mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          قم بالتقاط صورة للبطاقة الشخصية أو جواز السفر الخاصة بك أو إرفاق صورة واضحة لها.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4 space-y-4">
          <h3 className="font-semibold">التقاط صورة</h3>
          
          {cameraActive ? (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 aspect-video">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                <Button onClick={captureImage} type="button">
                  التقاط الصورة
                </Button>
                <Button onClick={stopCamera} type="button" variant="outline">
                  إلغاء
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button onClick={startCamera} className="gap-2" type="button">
                <Camera className="w-4 h-4" />
                فتح الكاميرا
              </Button>
            </div>
          )}
        </Card>

        <Card className="p-4 space-y-4">
          <h3 className="font-semibold">إرفاق صورة</h3>
          <FileUploader 
            onUpload={handleFileUpload} 
            accept="image/*"
            multiple={false}
          />
        </Card>
      </div>

      {capturedImage && (
        <div className="mt-8">
          <h3 className="font-semibold mb-4">معاينة الصورة</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative rounded-lg overflow-hidden border border-gray-200 w-full md:w-1/2 aspect-video">
              <img 
                src={capturedImage} 
                alt="صورة الهوية" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <div className="space-y-4 w-full md:w-1/2">
              {isAnalyzed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5" />
                    <h4 className="font-semibold">تم استخراج البيانات بنجاح</h4>
                  </div>
                  <p className="text-sm">تم استخراج البيانات من صورة الهوية وتعبئتها تلقائياً في النموذج.</p>
                </div>
              ) : (
                <Button 
                  onClick={analyzeIdentity} 
                  className="w-full" 
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "جاري التحليل..." : "تحليل البيانات"}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* كانفاس مخفي للتعامل مع الصورة */}
      <canvas ref={canvasRef} className="hidden" />
      
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">البيانات المستخرجة</h3>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم الكامل<span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="سيتم استخراجه من الصورة"
                          className={`pr-10 ${isAnalyzed ? 'bg-gray-100' : ''}`}
                          readOnly={isAnalyzed}
                          disabled={!isAnalyzed}
                          {...field}
                          required
                        />
                        <User className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الجنسية</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="سيتم استخراجه من الصورة"
                          className={`pr-10 ${isAnalyzed ? 'bg-gray-100' : ''}`}
                          readOnly={isAnalyzed}
                          disabled={!isAnalyzed}
                          {...field}
                        />
                        <Flag className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الهوية/الجواز<span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="سيتم استخراجه من الصورة"
                          className={`pr-10 ${isAnalyzed ? 'bg-gray-100' : ''}`}
                          readOnly={isAnalyzed}
                          disabled={!isAnalyzed}
                          {...field}
                          required
                        />
                        <CreditCard className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الميلاد<span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="date"
                          placeholder="سيتم استخراجه من الصورة"
                          className={`pr-10 ${isAnalyzed ? 'bg-gray-100' : ''}`}
                          readOnly={isAnalyzed}
                          disabled={!isAnalyzed}
                          {...field}
                          required
                        />
                        <Calendar className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
            >
              رجوع
            </Button>
            <Button type="submit">استمر</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
