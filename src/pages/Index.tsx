
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import YoutubeMockup from "@/components/YoutubeMockup";
import FlickeringStars from "@/components/FlickeringStars";

const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const benefits = [
        { icon: '🚀', title: 'تقنيات حديثة' },
        { icon: '⏱️', title: 'فعالية وسرعة' },
        { icon: '✨', title: 'فريق مبدع' },
        { icon: '🇹🇳', title: 'خبرة محلية' },
        { icon: '💖', title: 'عناية شخصية' },
        { icon: '🌐', title: 'رؤية عالمية' },
    ];

    const testimonials = [
        {
            thumbnailUrl: 'https://placehold.co/360x640/1a365d/00d4ff?text=شهادة+عميل+1',
            description: 'كانت تجربتنا مع Sirus رائعة! لقد ساعدونا في الوصول إلى جمهور جديد وتحقيق نتائج مذهلة.',
            author: 'سارة، مديرة تسويق'
        },
        {
            thumbnailUrl: 'https://placehold.co/360x640/1a365d/00d4ff?text=شهادة+عميل+2',
            description: 'فريق مبدع ومحترف. لقد فهموا رؤيتنا تمامًا وترجموها إلى محتوى بصري جذاب.',
            author: 'أحمد، مؤسس شركة ناشئة'
        },
        {
            thumbnailUrl: 'https://placehold.co/360x640/1a365d/00d4ff?text=شهادة+عميل+3',
            description: 'الجودة والالتزام بالمواعيد هما ما يميز Sirus. أنصح بهم بشدة!',
            author: 'فاطمة، صاحبة علامة تجارية'
        }
    ];

    return (
        <div className="text-right bg-background text-foreground">
            {/* Header Section */}
            <header className="bg-card shadow-lg py-4 sticky top-0 z-20 border-b border-border">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-4xl font-bold font-cairo text-gradient rounded-lg p-2 transform hover:scale-105 transition-transform duration-300">Sirus</a>
                    <nav>
                        <ul className="flex space-x-6 space-x-reverse">
                            <li><a href="#about" className="text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">من نحن</a></li>
                            <li><a href="#services" className="text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">خدماتنا</a></li>
                            <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">معرض أعمالنا</Link></li>
                            <li><a href="#why-us" className="text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">لماذا Sirus؟</a></li>
                            <li><a href="#contact" className="text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">تواصل معنا</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center rounded-b-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
                    <img src="https://quickframe.com/wp-content/uploads/2024/07/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg" alt="Futuristic technology background" className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.3]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient opacity-80 z-0"></div>
                    <FlickeringStars numberOfStars={100} />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight rounded-lg drop-shadow-lg">
                        <span className="text-gradient bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Sirus:</span> النجم الذي يضيء علامتك في الكون الرقمي
                    </h1>
                    <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto rounded-lg font-light opacity-90">
                        من الفكرة إلى التألق: نصنع المحتوى الذي يحقق أهدافك ويجعلك تبرز.
                    </p>
                    <div className="flex justify-center space-x-4 space-x-reverse">
                        <a href="#contact" className="btn-primary inline-block">دعنا نضيء مشروعك</a>
                        <Link to="/portfolio" className="btn-secondary inline-block">شاهد أعمالنا</Link>
                    </div>
                </div>
            </section>

            {/* Social Media Video Section */}
            <section id="intro-video" className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">فيديو تعريفي بفريقنا</h2>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light text-muted-foreground">
                        تعرف على الشغف والإبداع خلف Sirus. هذا الفيديو يلقي نظرة على من نحن وما الذي يدفعنا لمساعدتك على النجاح.
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <YoutubeMockup thumbnailUrl="https://placehold.co/1280x720/1a365d/00d4ff?text=فريق+Sirus" />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-16 md:py-24 bg-main-gradient rounded-xl mx-4 my-8 card-glow">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="https://placehold.co/600x400/1a365d/00d4ff?text=فريق+Sirus+المبدع" alt="Creative Team" className="rounded-xl shadow-2xl w-full h-auto object-cover border-2 border-accent" />
                    </div>
                    <div className="md:w-1/2 md:pr-12 text-right">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gradient">من نحن: <br /> الخبرة والإبداع معًا</h2>
                        <p className="text-muted-foreground text-lg mb-4 font-light">
                            في Sirus، نحن وكالة إبداع محتوى بخبرة سنوات، نحول أفكارك إلى محتوى رقمي جذاب ومؤثر. فريقنا من المبدعين والمحترفين ملتزم بتحقيق أهدافك.
                        </p>
                        <p className="text-muted-foreground text-lg font-light">
                            نتولى كل تفاصيل مشروعك لضمان نتائج تتجاوز توقعاتك، ونجعلك تبرز في السوق التونسي والعالم الرقمي.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-24 bg-card rounded-xl mx-4 my-8 card-glow border border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">خدماتنا الشاملة: نصنع محتواك من الألف إلى الياء</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-5xl mb-6">🎬</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">تصوير احترافي</h3>
                            <p className="text-muted-foreground font-light">نقدم تصوير فيديو وصور فوتوغرافية عالية الجودة، لبروز رسالتك.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-5xl mb-6">✂️</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">مونتاج إبداعي</h3>
                            <p className="text-muted-foreground font-light">نحول المواد الخام إلى قصص بصرية جذابة ومحتوى ديناميكي.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-5xl mb-6">✍️</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">سرد قصصي ومحتوى</h3>
                            <p className="text-muted-foreground font-light">نبني السرد القصصي المقنع ونصنع المحتوى الكتابي الفعال.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-5xl mb-6">💡</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">بناء العلامات التجارية</h3>
                            <p className="text-muted-foreground font-light">نصمم محتوى يعكس هويتك ويجذب جمهورك المستهدف.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-5xl mb-6">📈</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">حلول للعلامات التجارية</h3>
                            <p className="text-muted-foreground font-light">نخدم جميع أنواع العلامات التجارية لضمان محتوى فعال ومميز.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-5xl mb-6">🌟</div>
                            <h3 className="text-xl font-bold text-foreground mb-4">إدارة العلامة الشخصية</h3>
                            <p className="text-muted-foreground font-light">نساعد الأفراد على بناء وتطوير حضورهم الرقمي.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">ماذا يقول عملاؤنا؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                                <YoutubeMockup 
                                    thumbnailUrl={testimonial.thumbnailUrl}
                                    className="w-full max-w-[280px]"
                                    aspectRatio="aspect-[9/16]"
                                />
                                <blockquote className="mt-6 max-w-[280px]">
                                    <p className="text-muted-foreground text-lg font-light italic">"{testimonial.description}"</p>
                                    <cite className="block mt-2 font-bold not-italic text-primary">- {testimonial.author}</cite>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="py-16 md:py-24 bg-main-gradient rounded-xl mx-4 my-8 card-glow">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">لماذا تختار Sirus؟</h2>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light text-muted-foreground">
                        نجمع بين الإبداع، الخبرة المحلية، وأحدث التقنيات لنضمن تألق علامتك التجارية.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto px-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2 p-4 transform hover:scale-110 transition-transform duration-300">
                                <div className="text-3xl">{benefit.icon}</div>
                                <h3 className="text-sm font-bold text-foreground text-center">{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 bg-card rounded-xl mx-4 my-8 card-glow border border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">هل أنت مستعد للتألق؟ تواصل معنا اليوم!</h2>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light text-muted-foreground">
                        دع "Sirus" يكون شريكك في رحلة النجاح الرقمي. املأ النموذج أدناه وسنتواصل معك قريباً.
                    </p>
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-background p-8 rounded-xl shadow-2xl text-right border border-border">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-foreground text-sm font-bold mb-2">الاسم الكامل:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="shadow-inner appearance-none border border-input rounded-lg w-full py-3 px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring" placeholder="اسمك الكامل" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2">البريد الإلكتروني:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="shadow-inner appearance-none border border-input rounded-lg w-full py-3 px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring" placeholder="بريدك الإلكتروني" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-foreground text-sm font-bold mb-2">رقم الهاتف:</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="shadow-inner appearance-none border border-input rounded-lg w-full py-3 px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring" placeholder="رقم هاتفك (اختياري)" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-foreground text-sm font-bold mb-2">رسالتك:</label>
                            <textarea id="message" name="message" rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="shadow-inner appearance-none border border-input rounded-lg w-full py-3 px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring" placeholder="اكتب رسالتك هنا..." required></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">أرسل رسالتك</button>
                    </form>

                    <div className="mt-20">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">تواصل معنا الآن</h3>
                        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light text-muted-foreground">
                            اختر الطريقة المناسبة للتواصل معنا والحصول على استشارة مجانية
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* WhatsApp Card */}
                            <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right flex flex-col">
                                <h4 className="text-2xl font-bold text-foreground mb-2">واتساب</h4>
                                <p className="text-muted-foreground mb-4">تواصل فوري ومباشر</p>
                                <div className="flex-grow">
                                  <p className="font-mono text-lg text-primary">+216 58 415 520</p>
                                  <p className="text-muted-foreground my-1">أو</p>
                                  <p className="font-mono text-lg text-primary mb-6">+216 58 415 501</p>
                                </div>
                                <a href="https://wa.me/21658415520" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                                    ابدأ المحادثة
                                </a>
                            </div>

                            {/* Instagram Card */}
                            <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right flex flex-col">
                                <h4 className="text-2xl font-bold text-foreground mb-2">انستغرام</h4>
                                <p className="text-muted-foreground mb-4">شاهد أعمالنا ومشاريعنا</p>
                                <div className="flex-grow">
                                    <p className="font-mono text-lg text-primary mb-6">@Sirus_Tn</p>
                                </div>
                                <a href="https://instagram.com/Sirus_Tn" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                                    زر صفحتنا
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-card text-muted-foreground py-8 mt-12 rounded-t-3xl border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 Sirus. جميع الحقوق محفوظة.</p>
                    <div className="flex justify-center space-x-6 space-x-reverse mt-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">فيسبوك</a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">إنستغرام</a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">لينكدإن</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
