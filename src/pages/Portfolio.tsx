import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Play, Camera, Video, PenTool, Star, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل', icon: Star },
    { id: 'video', name: 'إنتاج فيديو', icon: Video },
    { id: 'photography', name: 'تصوير فوتوغرافي', icon: Camera },
    { id: 'content', name: 'محتوى رقمي', icon: PenTool },
    { id: 'branding', name: 'هوية تجارية', icon: Users }
  ];

  const projects = [
    {
      id: 1,
      title: "حملة إعلانية - ملابس عصرية",
      category: "video",
      type: "فيديو إعلاني",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Video+Project+1",
      description: "حملة إعلانية متكاملة لعلامة تجارية للملابس العصرية"
    },
    {
      id: 2,
      title: "تصوير منتجات - مجوهرات فاخرة",
      category: "photography",
      type: "تصوير منتجات",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Photography+1",
      description: "جلسة تصوير احترافية لمجموعة مجوهرات فاخرة"
    },
    {
      id: 3,
      title: "فيديو تعريفي - منصة تقنية",
      category: "video",
      type: "فيديو تعريفي",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Video+Project+2",
      description: "فيديو تعريفي لمنصة تقنية ناشئة في السوق التونسي"
    },
    {
      id: 4,
      title: "بناء هوية - مقهى تراثي",
      category: "branding",
      type: "هوية تجارية",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Branding+1",
      description: "تطوير هوية بصرية متكاملة لمقهى تراثي في المدينة العتيقة"
    },
    {
      id: 5,
      title: "محتوى رقمي - مدرب حياة",
      category: "content",
      type: "محتوى تسويقي",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Content+1",
      description: "استراتيجية محتوى رقمي شاملة لمدرب تطوير شخصي"
    },
    {
      id: 6,
      title: "تصوير فعاليات - مؤتمر تقني",
      category: "photography",
      type: "تصوير فعاليات",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Photography+2",
      description: "تغطية شاملة لمؤتمر تقني دولي في تونس"
    },
    {
      id: 7,
      title: "إعلان تجاري - مطعم عائلي",
      category: "video",
      type: "إعلان تجاري",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Video+Project+3",
      description: "إعلان تجاري مؤثر لمطعم عائلي يقدم الأكل التونسي الأصيل"
    },
    {
      id: 8,
      title: "حملة رقمية - منتجات تجميل",
      category: "content",
      type: "حملة رقمية",
      imageUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Digital+Campaign+1",
      description: "حملة تسويقية رقمية متكاملة لخط منتجات تجميل طبيعية"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-main-gradient text-white font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sirus
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                <ArrowLeft className="ml-2 h-4 w-4" />
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              معرض أعمالنا
            </h1>
            <p className="text-2xl text-gray-300 mb-8 font-light">
              مشاريع حقيقية، نتائج استثنائية، وقصص نجاح ملهمة
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 border ${
                  activeCategory === category.id
                    ? 'bg-cyan-400 border-cyan-400 text-slate-900 shadow-lg'
                    : 'border-white/20 bg-transparent text-gray-300 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <category.icon className="ml-2 h-5 w-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(72,187,255,0.5)] hover:scale-[1.03] group">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {project.category === 'video' ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="bg-red-600/90 h-12 w-20 rounded-lg flex items-center justify-center cursor-pointer group-hover:bg-red-500 transition-colors">
                                <Play className="h-8 w-8 text-white" fill="white" />
                            </div>
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                                <Play className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    )}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-900/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              هل أعجبك ما رأيت؟
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              دعنا نبدأ العمل على مشروعك القادم وننشئ شيئاً استثنائياً معاً
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  ابدأ مشروعك الآن
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                  تعرف علينا أكثر
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sirus
            </div>
            <p className="text-gray-400 mb-6">© 2025 Sirus. جميع الحقوق محفوظة.</p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">فيسبوك</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">إنستغرام</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg">لينكدإن</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
