
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Edit3, PenTool, TrendingUp, Users, Globe, Zap, Clock, Heart, MapPin, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
      description: "نقدم خدمات تصوير فيديو وصور فوتوغرافية عالية الجودة، تلتقط جوهر رسالتك وتبرز تميزك."
    },
    {
      icon: Edit3,
      title: "مونتاج إبداعي",
      description: "فريقنا يحول المواد الخام إلى قصص بصرية جذابة ومحتوى ديناميكي يبهر جمهورك."
    },
    {
      icon: PenTool,
      title: "سرد قصصي ومحتوى",
      description: "نبني لك السرد القصصي المقنع ونصنع المحتوى الكتابي الذي يلامس القلوب ويحقق الأهداف."
    },
    {
      icon: Star,
      title: "بناء العلامات التجارية",
      description: "سواء لشركتك أو لعلامتك الشخصية، نصمم ونطور محتوى يعكس هويتك ويجذب جمهورك المستهدف."
    },
    {
      icon: TrendingUp,
      title: "حلول للعلامات التجارية",
      description: "نخدم جميع أنواع العلامات التجارية: ملابس، خدمات، وحتى الخدمات الرقمية (SaaS وغيرها)."
    },
    {
      icon: Users,
      title: "إدارة العلامة الشخصية",
      description: "نساعد الأفراد على بناء وتطوير حضورهم الرقمي وعلاماتهم الشخصية في الفضاء الرقمي."
    }
  ];

  const portfolio = [
    { title: "حملة إعلانية لشركة ملابس", category: "مشروع فيديو 1" },
    { title: "تصوير فوتوغرافي لخدمات مالية", category: "تصوير منتجات 2" },
    { title: "فيديو تعريفي لمنصة SaaS", category: "مونتاج إبداعي 3" },
    { title: "بناء علامة شخصية لمدرب حياة", category: "سرد قصصي 4" },
    { title: "حملة محتوى لمنتجات تجميل", category: "محتوى تسويقي 5" },
    { title: "تطوير هوية بصرية لمقهى", category: "تصميم بصري 6" }
  ];

  const features = [
    {
      icon: Zap,
      title: "تقنيات حديثة",
      description: "نستخدم أحدث التقنيات والأدوات في صناعة المحتوى لضمان جودة استثنائية وسرعة في الإنجاز."
    },
    {
      icon: Clock,
      title: "فعالية وتوفير",
      description: "نضمن لك محتوى عالي الجودة بتكلفة أقل ووقت أسرع، مما يزيد من فعالية استثماراتك."
    },
    {
      icon: Sparkles,
      title: "فريق مبدع",
      description: "لدينا فريق من المبدعين والمحترفين الشغوفين، جاهزون لتولي مشاريعك بكل اهتمام وعناية."
    },
    {
      icon: MapPin,
      title: "خبرة تونسية",
      description: "نحن نفهم السوق التونسي جيدا ونجيد صناعة المحتوى الذي يلامس الجمهور المحلي."
    },
    {
      icon: Heart,
      title: "عناية شخصية",
      description: "نتعامل مع كل عميل باهتمام شخصي، ونحرص على أن تشعر وكأنك الوحيد لدينا."
    },
    {
      icon: Globe,
      title: "تألق عالمي",
      description: "نصنع لك محتوى يساعدك على تحقيق أهدافك ليس فقط محلياً، بل لتتألق في الكون الرقمي الأوسع."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sirus
            </div>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="hover:text-purple-400 transition-colors">من نحن</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">خدماتنا</a>
              <a href="#portfolio" className="hover:text-purple-400 transition-colors">معرض أعمالنا</a>
              <a href="#why-us" className="hover:text-purple-400 transition-colors">لماذا Sirus؟</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">تواصل معنا</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-purple-950/20 to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Sirus: النجم الذي يضيء علامتك في الكون الرقمي
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              نحن "Sirus"، ألمع نجم في سماء صناعة المحتوى. من الفكرة إلى التنفيذ، نقدم حلولاً متكاملة لصناعة المحتوى الرقمي. 
              تصوير، مونتاج، وسرد قصصي احترافي لبناء علامتك الشخصية أو التجارية وجعلها تتألق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                دعنا نضيء مشروعك
              </Button>
              <div className="flex items-center text-gray-300">
                <Users className="ml-2 h-5 w-5" />
                <span>Creative Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              من نحن: الخبرة والإبداع معًا
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              نحن في Sirus، وكالة إبداع محتوى رائدة بخبرة تمتد لسنوات، متخصصون في تحويل أفكارك إلى محتوى رقمي جذاب ومؤثر. 
              يضم فريقنا مجموعة من المبدعين والمحترفين الشغوفين، ملتزمون بتحقيق أهدافك الرقمية.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6">
              سواء كنت تسعى لبناء علامتك الشخصية أو تعزيز حضور علامتك التجارية، فإننا نأخذ على عاتقنا كل تفاصيل مشروعك، 
              من الألف إلى الياء، لضمان نتائج تتجاوز توقعاتك وتجعلك تبرز في السوق التونسي والعالم الرقمي.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              خدماتنا الشاملة: نصنع محتواك من الألف إلى الياء
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full ml-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              معرض أعمالنا: مشاريعنا تتحدث عنا
            </h2>
            <p className="text-xl text-gray-300">
              نقدم لك لمحة عن بعض من مشاريعنا التي أضاءت علامات عملائنا في الكون الرقمي. كل عمل فني يروي قصة نجاح.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden group">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-purple-300 font-semibold">{project.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              لماذا تختار Sirus؟ تألق بذكاء، تألق بسرعة
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full ml-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                هل أنت مستعد للتألق؟ تواصل معنا اليوم!
              </h2>
              <p className="text-xl text-gray-300">
                دع "Sirus" يكون شريكك في رحلة النجاح الرقمي. املأ النموذج أدناه وسنتواصل معك قريباً.
              </p>
            </div>
            
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">الاسم الكامل:</label>
                    <Input
                      type="text"
                      placeholder="اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني:</label>
                    <Input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">رسالتك:</label>
                    <Textarea
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 min-h-32"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg rounded-full transition-all duration-300">
                    أرسل رسالتك
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Sirus
            </div>
            <p className="text-gray-400 mb-6">© 2025 Sirus. جميع الحقوق محفوظة.</p>
            <div className="flex justify-center space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">فيسبوك</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">إنستغرام</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">لينكدإن</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
