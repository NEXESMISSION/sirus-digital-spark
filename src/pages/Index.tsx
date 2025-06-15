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

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            description: 'ساعدونا في الوصول إلى جمهور جديد وتحقيق نتائج رائعة.',
            author: 'سارة، مديرة تسويق'
        },
        {
            thumbnailUrl: 'https://placehold.co/360x640/1a365d/00d4ff?text=شهادة+عميل+2',
            description: 'فهموا رؤيتنا تمامًا وترجموها إلى محتوى جذاب.',
            author: 'أحمد، مؤسس شركة ناشئة'
        },
        {
            thumbnailUrl: 'https://placehold.co/360x640/1a365d/00d4ff?text=شهادة+عميل+3',
            description: 'الجودة والالتزام بالمواعيد هما ما يميز Sirus.',
            author: 'فاطمة، صاحبة علامة تجارية'
        }
    ];

    const trustedLogos = [
        {
            name: 'Apple',
            url: 'https://logo.clearbit.com/apple.com',
            alt: 'Apple Logo'
        },
        {
            name: 'Microsoft',
            url: 'https://logo.clearbit.com/microsoft.com',
            alt: 'Microsoft Logo'
        },
        {
            name: 'Google',
            url: 'https://logo.clearbit.com/google.com',
            alt: 'Google Logo'
        },
        {
            name: 'Netflix',
            url: 'https://logo.clearbit.com/netflix.com',
            alt: 'Netflix Logo'
        },
        {
            name: 'Amazon',
            url: 'https://logo.clearbit.com/amazon.com',
            alt: 'Amazon Logo'
        },
        {
            name: 'Meta',
            url: 'https://logo.clearbit.com/meta.com',
            alt: 'Meta Logo'
        }
    ];

    return (
        <div className="text-right bg-background text-foreground">
            {/* Header Section with Mobile Menu */}
            <header className="bg-card shadow-lg py-3 sm:py-4 sticky top-0 z-20 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <a href="#" className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cairo text-gradient rounded-lg p-2 transform hover:scale-105 transition-transform duration-300">Sirus</a>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-4 xl:space-x-6 space-x-reverse">
                            <li><a href="#services" className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">خدماتنا</a></li>
                            <li><Link to="/portfolio" className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">معرض أعمالنا</Link></li>
                            <li><a href="#why-us" className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">لماذا Sirus؟</a></li>
                            <li><a href="#contact" className="text-sm xl:text-base text-muted-foreground hover:text-primary font-medium rounded-lg p-2 transition-colors">تواصل معنا</a></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-card border-t border-border">
                        <nav className="container mx-auto px-4 py-4">
                            <ul className="space-y-3">
                                <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary font-medium py-2 transition-colors">خدماتنا</a></li>
                                <li><Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary font-medium py-2 transition-colors">معرض أعمالنا</Link></li>
                                <li><a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary font-medium py-2 transition-colors">لماذا Sirus؟</a></li>
                                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary font-medium py-2 transition-colors">تواصل معنا</a></li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section with Mobile Optimization */}
            <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center text-center rounded-b-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
                    <img src="https://quickframe.com/wp-content/uploads/2024/07/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg" alt="Futuristic technology background" className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.3]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient opacity-80 z-0"></div>
                    <FlickeringStars numberOfStars={mobileMenuOpen ? 50 : 100} />
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
                    <h1 className="font-extrabold mb-4 sm:mb-6 leading-tight rounded-lg drop-shadow-lg" 
                        style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}>
                        <span className="text-gradient bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Sirus:</span> النجم الذي يضيء علامتك الرقمية
                    </h1>
                    <p className="mb-6 sm:mb-10 max-w-2xl mx-auto rounded-lg font-light opacity-90"
                       style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                        نصنع المحتوى الذي يحقق أهدافك ويجعلك تبرز.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4">
                        <a href="#contact" className="btn-primary inline-block w-full sm:w-auto text-center">ابدأ مشروعك</a>
                        <Link to="/portfolio" className="btn-secondary inline-block w-full sm:w-auto text-center">شاهد أعمالنا</Link>
                    </div>
                </div>
            </section>

            {/* Trusted By Section with Mobile Grid */}
            <section id="trusted-by" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-card rounded-xl mx-2 sm:mx-4 my-4 sm:my-8 card-glow border border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-bold mb-8 sm:mb-12 text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>يثق بنا</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
                        {trustedLogos.map((logo, index) => (
                            <div key={index} className="flex items-center justify-center p-2 sm:p-3 lg:p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50">
                                <img 
                                    src={logo.url} 
                                    alt={logo.alt}
                                    className="h-4 sm:h-6 lg:h-8 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Video Section */}
            <section id="intro-video" className="py-8 sm:py-12 lg:py-16 xl:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-bold mb-4 sm:mb-8 text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>تعرف على فريقنا</h2>
                    <p className="mb-8 sm:mb-12 max-w-2xl mx-auto font-light text-muted-foreground"
                       style={{ fontSize: 'clamp(0.9rem, 2vw, 1.25rem)' }}>
                        اكتشف الشغف والإبداع خلف Sirus.
                    </p>
                    <div className="max-w-4xl mx-auto px-2 sm:px-0">
                        <YoutubeMockup thumbnailUrl="https://placehold.co/1280x720/1a365d/00d4ff?text=فريق+Sirus" />
                    </div>
                </div>
            </section>

            {/* Services Section with Mobile Grid */}
            <section id="services" className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-card rounded-xl mx-2 sm:mx-4 my-4 sm:my-8 card-glow border border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-bold mb-8 sm:mb-12 text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>خدماتنا</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Service Cards */}
                        <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6">🎬</div>
                            <h3 className="font-bold text-foreground mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>تصوير احترافي</h3>
                            <p className="text-muted-foreground font-light" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>فيديو وصور عالية الجودة لبروز رسالتك.</p>
                        </div>
                        <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6">✂️</div>
                            <h3 className="font-bold text-foreground mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>مونتاج إبداعي</h3>
                            <p className="text-muted-foreground font-light" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>نحول المواد الخام إلى قصص بصرية جذابة.</p>
                        </div>
                        <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6">✍️</div>
                            <h3 className="font-bold text-foreground mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>محتوى وسرد</h3>
                            <p className="text-muted-foreground font-light" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>سرد مقنع ومحتوى كتابي فعال.</p>
                        </div>
                        <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6">💡</div>
                            <h3 className="font-bold text-foreground mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>بناء العلامة التجارية</h3>
                            <p className="text-muted-foreground font-light" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>محتوى يعكس هويتك ويجذب جمهورك.</p>
                        </div>
                        <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6">📈</div>
                            <h3 className="font-bold text-foreground mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>حلول شاملة</h3>
                            <p className="text-muted-foreground font-light" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>نخدم جميع العلامات التجارية بمحتوى مميز.</p>
                        </div>
                        <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-accent text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6">🌟</div>
                            <h3 className="font-bold text-foreground mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>العلامة الشخصية</h3>
                            <p className="text-muted-foreground font-light" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>نساعدك على بناء حضورك الرقمي.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section with Mobile Carousel-like Layout */}
            <section id="testimonials" className="py-8 sm:py-12 lg:py-16 xl:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-bold mb-8 sm:mb-12 text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>ماذا يقول عملاؤنا؟</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                                <YoutubeMockup 
                                    thumbnailUrl={testimonial.thumbnailUrl}
                                    className="w-full max-w-[240px] sm:max-w-[280px]"
                                    aspectRatio="aspect-[9/16]"
                                />
                                <blockquote className="mt-4 sm:mt-6 max-w-[240px] sm:max-w-[280px]">
                                    <p className="text-muted-foreground font-light italic" style={{ fontSize: 'clamp(0.85rem, 2vw, 1.125rem)' }}>"{testimonial.description}"</p>
                                    <cite className="block mt-2 font-bold not-italic text-primary" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}>- {testimonial.author}</cite>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section with Mobile Grid */}
            <section id="why-us" className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-main-gradient rounded-xl mx-2 sm:mx-4 my-4 sm:my-8 card-glow">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-bold mb-8 sm:mb-12 text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>لماذا تختار Sirus؟</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-3 lg:p-4 transform hover:scale-110 transition-transform duration-300">
                                <div className="text-2xl sm:text-3xl">{benefit.icon}</div>
                                <h3 className="font-bold text-foreground text-center" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)' }}>{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section with Mobile Form Layout */}
            <section id="contact" className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-card rounded-xl mx-2 sm:mx-4 my-4 sm:my-8 card-glow border border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-bold mb-4 sm:mb-6 text-gradient" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>تواصل معنا</h2>
                    <p className="mb-6 sm:mb-10 max-w-2xl mx-auto font-light text-muted-foreground"
                       style={{ fontSize: 'clamp(0.9rem, 2vw, 1.25rem)' }}>
                        استشارة مجانية لمشروعك الرقمي
                    </p>
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-background p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl text-right border border-border">
                        <div className="mb-4 sm:mb-6">
                            <label htmlFor="name" className="block text-foreground font-bold mb-2" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>الاسم:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="shadow-inner appearance-none border border-input rounded-lg w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base" placeholder="اسمك" required />
                        </div>
                        <div className="mb-4 sm:mb-6">
                            <label htmlFor="email" className="block text-foreground font-bold mb-2" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>البريد الإلكتروني:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="shadow-inner appearance-none border border-input rounded-lg w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base" placeholder="بريدك الإلكتروني" required />
                        </div>
                        <div className="mb-4 sm:mb-6">
                            <label htmlFor="phone" className="block text-foreground font-bold mb-2" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>رقم الهاتف:</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="shadow-inner appearance-none border border-input rounded-lg w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base" placeholder="رقم هاتفك" />
                        </div>
                        <div className="mb-4 sm:mb-6">
                            <label htmlFor="message" className="block text-foreground font-bold mb-2" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>رسالتك:</label>
                            <textarea id="message" name="message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="shadow-inner appearance-none border border-input rounded-lg w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base" placeholder="رسالتك..." required></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">أرسل</button>
                    </form>

                    <div className="mt-12 sm:mt-16 lg:mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                            {/* WhatsApp Card */}
                            <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right flex flex-col">
                                <h4 className="font-bold text-foreground mb-2" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>واتساب</h4>
                                <p className="text-muted-foreground mb-4" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>تواصل فوري</p>
                                <div className="flex-grow">
                                  <p className="font-mono text-primary" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.125rem)' }}>+216 58 415 520</p>
                                  <p className="text-muted-foreground my-1" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>أو</p>
                                  <p className="font-mono text-primary mb-4 sm:mb-6" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.125rem)' }}>+216 58 415 501</p>
                                </div>
                                <a href="https://wa.me/21658415520" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                                    ابدأ المحادثة
                                </a>
                            </div>

                            {/* Instagram Card */}
                            <div className="bg-main-gradient p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg card-glow text-right flex flex-col">
                                <h4 className="font-bold text-foreground mb-2" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>انستغرام</h4>
                                <p className="text-muted-foreground mb-4" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>شاهد أعمالنا</p>
                                <div className="flex-grow">
                                    <p className="font-mono text-primary mb-4 sm:mb-6" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.125rem)' }}>@Sirus_Tn</p>
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
            <footer className="bg-card text-muted-foreground py-6 sm:py-8 mt-8 sm:mt-12 rounded-t-3xl border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <p style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}>&copy; 2025 Sirus. جميع الحقوق محفوظة.</p>
                    <div className="flex justify-center space-x-4 sm:space-x-6 space-x-reverse mt-3 sm:mt-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>فيسبوك</a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>إنستغرام</a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)' }}>لينكدإن</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
