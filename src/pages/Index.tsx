
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Menu, X, Play, ArrowRight, Star, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            icon: <Play className="w-8 h-8" />,
            title: "إنتاج الفيديو",
            description: "فيديوهات احترافية عالية الجودة تحكي قصة علامتك التجارية"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "المونتاج الإبداعي",
            description: "مونتاج متقن يحول المحتوى العادي إلى تحف فنية"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "التصوير الفوتوغرافي",
            description: "صور استثنائية تعكس جمال وقوة رسالتك"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "إدارة المحتوى",
            description: "استراتيجية محتوى شاملة لبناء حضور قوي"
        }
    ];

    const achievements = [
        { icon: <Award className="w-6 h-6" />, number: "5+", text: "سنوات خبرة" },
        { icon: <Users className="w-6 h-6" />, number: "100+", text: "عميل راضٍ" },
        { icon: <Star className="w-6 h-6" />, number: "100%", text: "جودة استثنائية" },
        { icon: <Zap className="w-6 h-6" />, number: "24h", text: "تسليم سريع" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-right">
            {/* Header */}
            <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-lg">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                        Sirus
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">خدماتنا</a>
                        <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">أعمالنا</Link>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">من نحن</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">تواصل معنا</a>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                            ابدأ مشروعك
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                        <nav className="container mx-auto px-4 py-4 space-y-3">
                            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">خدماتنا</a>
                            <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">أعمالنا</Link>
                            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">من نحن</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">تواصل معنا</a>
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                                ابدأ مشروعك
                            </Button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section - Increased height and spacing */}
            <section 
                className="pt-32 pb-32 px-4 min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(30, 58, 138, 0.5)), url('https://www.socialinsider.io/blog/content/images/2024/05/social-media-content-guide.webp')`,
                    filter: 'saturate(0.7)'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/60"></div>
                <div className="container mx-auto text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100 bg-clip-text text-transparent">
                                نضيء علامتك الرقمية
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed drop-shadow-lg">
                            نحن نصنع المحتوى البصري الذي يحكي قصتك ويجذب جمهورك بطريقة استثنائية
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all">
                                ابدأ مشروعك الآن
                                <ArrowRight className="w-6 h-6 mr-3" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-xl px-10 py-6 border-3 border-white text-white hover:bg-white hover:text-gray-900 shadow-2xl backdrop-blur-sm bg-white/10 hover:bg-white/90 transition-all">
                                شاهد أعمالنا
                                <Play className="w-6 h-6 mr-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section - More compact */}
            <section className="py-12 bg-white relative -mt-16 mx-4 rounded-2xl shadow-2xl z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 mb-3 group-hover:scale-110 transition-transform shadow-lg">
                                    {achievement.icon}
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 drop-shadow-sm">{achievement.number}</div>
                                <div className="text-gray-600 font-medium text-sm">{achievement.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                            خدماتنا المتميزة
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                            نقدم حلولاً إبداعية شاملة لجميع احتياجاتك الرقمية
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                                <CardContent className="p-8 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-800 drop-shadow-sm">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                                لماذا تختار Sirus؟
                            </h2>
                            <p className="text-xl mb-8 leading-relaxed opacity-90 drop-shadow-sm">
                                نحن فريق من المبدعين المتخصصين في صناعة المحتوى البصري الذي يترك أثراً لا يُنسى. نجمع بين الخبرة التقنية والرؤية الإبداعية لنحقق أهدافك.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                                        <Star className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg drop-shadow-sm">جودة استثنائية في كل تفصيلة</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg drop-shadow-sm">تسليم سريع والتزام بالمواعيد</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg drop-shadow-sm">فريق محترف ومتفهم</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl">
                                <div className="text-center">
                                    <div className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">100+</div>
                                    <div className="text-xl drop-shadow-sm">مشروع ناجح</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                                ابدأ مشروعك معنا
                            </h2>
                            <p className="text-xl text-gray-700 font-medium">
                                تواصل معنا اليوم واحصل على استشارة مجانية
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <Card className="border-0 shadow-2xl">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                                الاسم الكامل
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                                placeholder="أدخل اسمك الكامل"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                                البريد الإلكتروني
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                                placeholder="البريد الإلكتروني"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                                رسالتك
                                            </label>
                                            <textarea
                                                rows={5}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                                                placeholder="أخبرنا عن مشروعك..."
                                            />
                                        </div>
                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg shadow-lg">
                                            إرسال الرسالة
                                            <ArrowRight className="w-5 h-5 mr-2" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Contact Info */}
                            <div className="space-y-8">
                                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800 drop-shadow-sm">تواصل مباشر</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="font-medium text-gray-800 mb-1">واتساب</div>
                                                <a href="https://wa.me/21658415520" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                                                    +216 58 415 520
                                                </a>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-800 mb-1">إنستغرام</div>
                                                <a href="https://instagram.com/Sirus_Tn" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                                                    @Sirus_Tn
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800 drop-shadow-sm">لماذا نحن مختلفون؟</h3>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-center gap-3">
                                                <Star className="w-5 h-5 text-yellow-500 drop-shadow-sm" />
                                                <span className="font-medium">جودة عالمية بأسعار محلية</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Zap className="w-5 h-5 text-blue-500 drop-shadow-sm" />
                                                <span className="font-medium">تسليم سريع ومضمون</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Users className="w-5 h-5 text-green-500 drop-shadow-sm" />
                                                <span className="font-medium">دعم مستمر بعد التسليم</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                            Sirus
                        </div>
                        <p className="text-gray-400 mb-6 drop-shadow-sm">نضيء طريق نجاحك الرقمي</p>
                        <div className="flex justify-center gap-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">فيسبوك</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">إنستغرام</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">لينكدإن</a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
                            © 2025 Sirus. جميع الحقوق محفوظة.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
