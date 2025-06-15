
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Edit3, PenTool, Users, Globe, Zap, Clock, Heart, MapPin, Star, Sparkles, Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    setFormData({ name: '', email: '', message: '' });
  };

  const services = [
    {
      icon: Camera,
      title: "تصوير احترافي",
      description: "خدمات تصوير فيديو وصور عالية الجودة تبرز تميزك."
    },
    {
      icon: Edit3,
      title: "مونتاج إبداعي",
      description: "تحويل المواد الخام إلى قصص بصرية جذابة ومحتوى ديناميكي."
    },
    {
      icon: PenTool,
      title: "سرد قصصي",
      description: "محتوى كتابي مقنع يلامس القلوب ويحقق الأهداف."
    },
    {
      icon: Star,
      title: "بناء العلامات التجارية",
      description: "نصمم ونطور محتوى يعكس هويتك ويجذب جمهورك."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "تقنيات حديثة",
      description: "أحدث التقنيات لضمان جودة استثنائية."
    },
    {
      icon: Clock,
      title: "سرعة في التنفيذ",
      description: "محتوى عالي الجودة بوقت قياسي."
    },
    {
      icon: Heart,
      title: "عناية شخصية",
      description: "اهتمام شخصي بكل مشروع."
    },
    {
      icon: Globe,
      title: "تألق عالمي",
      description: "محتوى يساعدك على التألق رقمياً."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sirus
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse text-lg">
              <a href="#home" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">الرئيسية</a>
              <a href="#services" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">خدماتنا</a>
              <Link to="/portfolio" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">أعمالنا</Link>
              <a href="#contact" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">تواصل معنا</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight">
                Sirus
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                النجم الذي يضيء علامتك الرقمية
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                نحول أفكارك إلى محتوى رقمي مذهل. تصوير، مونتاج، وسرد احترافي لجعل علامتك تتألق.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  ابدأ مشروعك
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
                <Link to="/portfolio">
                  <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                    شاهد أعمالنا
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Sirus Creative Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-purple-900/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              خدماتنا
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              نقدم حلولاً متكاملة لصناعة المحتوى الرقمي
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              لماذا Sirus؟
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-900/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                تواصل معنا
              </h2>
              <p className="text-xl text-gray-300">
                هل أنت مستعد للتألق؟ دعنا نبدأ رحلة النجاح معاً
              </p>
            </div>
            
            <Card className="bg-white/5 backdrop-blur-lg border border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 text-lg py-4"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 text-lg py-4"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 min-h-32 text-lg"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    أرسل رسالتك
                    <ArrowRight className="mr-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
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

export default Index;
