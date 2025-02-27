import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Camera, TreePalm, Mountain, Globe, Image } from "lucide-react";

const Tourism = () => {
  const tourismTypes = [
    {
      id: "archaeological",
      title: "السياحة الأثرية والتاريخية",
      content: (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TourismCard
            title="أهرامات مروي"
            description="من أهم المعالم الأثرية، وهي أهرامات مملكة كوش التي تفوقت على الأهرامات المصرية في العدد."
            image="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&h=600"
          />
          <TourismCard
            title="جبل البركل"
            description="موقع أثري مقدس للنوبة يحتوي على معابد ونقوش قديمة."
            image="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=600"
          />
          <TourismCard
            title="مدينة كرمة"
            description="تضم 'الديفوفة'، وهي بقايا معابد ضخمة من الحضارة النوبية."
            image="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&h=600"
          />
        </div>
      ),
    },
    {
      id: "nature",
      title: "السياحة البيئية والطبيعية",
      content: (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TourismCard
            title="جبل مرة"
            description="منطقة جبلية خلابة ذات مناخ معتدل، بها شلالات قلول وشلال سوني وبحيرة دريبات."
            image="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&h=600"
          />
          <TourismCard
            title="محمية الردوم"
            description="واحدة من أكبر المحميات في إفريقيا، تضم أنواعاً نادرة من الحيوانات البرية."
            image="https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&w=800&h=600"
          />
          <TourismCard
            title="جزيرة سنقنيب"
            description="محمية بحرية تحتوي على واحدة من أجمل الشعاب المرجانية في العالم."
            image="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=600"
          />
        </div>
      ),
    },
    {
      id: "cultural",
      title: "السياحة الثقافية",
      content: (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TourismCard
            title="أم درمان"
            description="تضم سوق أم درمان الكبير وبيت الخليفة الذي يوثق تاريخ المهدية."
            image="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&h=600"
          />
          <TourismCard
            title="الفاشر"
            description="مركز ثقافي هام يعكس تراث سلطنة دارفور."
            image="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&h=600"
          />
          <TourismCard
            title="الخرطوم"
            description="تحتوي على متحف السودان القومي ومتحف التاريخ الطبيعي ومسجد النيلين."
            image="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&h=600"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]" dir="rtl">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25">
            <img
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1920&h=1080"
              alt="السياحة في السودان"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                السياحة في السودان
              </h1>
              <p className="text-xl opacity-90">
                تنوع جغرافي وثقافي فريد يجمع بين الحضارة القديمة والطبيعة الخلابة
              </p>
            </div>
          </div>
        </section>

        {/* المميزات */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">مميزات السياحة في السودان</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: MapPin, text: "مواقع أثرية" },
                { icon: Camera, text: "مناظر طبيعية" },
                { icon: TreePalm, text: "سياحة بيئية" },
                { icon: Mountain, text: "مغامرات" },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <span className="font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* أنواع السياحة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">استكشف السياحة في السودان</h2>
            <Tabs defaultValue="archaeological" className="w-full">
              <TabsList className="w-full justify-center mb-8">
                {tourismTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id}>
                    {type.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tourismTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  {type.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* معرض الصور */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">معرض الصور</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&h=800"
                  alt="المناظر الطبيعية في السودان"
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=800"
                  alt="الحياة البرية في السودان"
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&h=800"
                  alt="التراث الثقافي في السودان"
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&h=800"
                  alt="الحياة البرية في السودان"
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* الفيديوهات */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">استكشف السودان</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/your-video-id-1"
                title="اكتشف السودان"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/your-video-id-2"
                title="جولة سياحية في السودان"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// مكون البطاقة السياحية
const TourismCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Tourism;
