import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import YoutubeMockup from "@/components/YoutubeMockup";

const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log(formData);
        toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
        setFormData({ name: '', email: '', message: '' });
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
            thumbnailUrl: 'https://placehold.co/360x640/8b5cf6/ffffff?text=شهادة+عميل+1',
            description: 'كانت تجربتنا مع Sirus رائعة! لقد ساعدونا في الوصول إلى جمهور جديد وتحقيق نتائج مذهلة.',
            author: 'سارة، مديرة تسويق'
        },
        {
            thumbnailUrl: 'https://placehold.co/360x640/8b5cf6/ffffff?text=شهادة+عميل+2',
            description: 'فريق مبدع ومحترف. لقد فهموا رؤيتنا تمامًا وترجموها إلى محتوى بصري جذاب.',
            author: 'أحمد، مؤسس شركة ناشئة'
        },
        {
            thumbnailUrl: 'https://placehold.co/360x640/8b5cf6/ffffff?text=شهادة+عميل+3',
            description: 'الجودة والالتزام بالمواعيد هما ما يميز Sirus. أنصح بهم بشدة!',
            author: 'فاطمة، صاحبة علامة تجارية'
        }
    ];

    return (
        <div className="text-right">
            {/* Header Section */}
            <header className="bg-[#1a083d] shadow-lg py-4 sticky top-0 z-20">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="text-4xl font-extrabold text-white rounded-lg p-2 transform hover:scale-105 transition-transform duration-300">Sirus</a>
                    <nav>
                        <ul className="flex space-x-6 space-x-reverse">
                            <li><a href="#about" className="text-gray-300 hover:text-purple-400 font-medium rounded-lg p-2">من نحن</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-purple-400 font-medium rounded-lg p-2">خدماتنا</a></li>
                            <li><Link to="/portfolio" className="text-gray-300 hover:text-purple-400 font-medium rounded-lg p-2">معرض أعمالنا</Link></li>
                            <li><a href="#why-us" className="text-gray-300 hover:text-purple-400 font-medium rounded-lg p-2">لماذا Sirus؟</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-purple-400 font-medium rounded-lg p-2">تواصل معنا</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center rounded-b-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
                    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" alt="Futuristic technology background" className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.4] grayscale-[0.2]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight rounded-lg drop-shadow-lg font-tajawal">
                        <span className="text-gradient">Sirus:</span> النجم الذي يضيء علامتك في الكون الرقمي
                    </h1>
                    <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto rounded-lg font-light opacity-90 font-tajawal">
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
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light opacity-90">
                        تعرف على الشغف والإبداع خلف Sirus. هذا الفيديو يلقي نظرة على من نحن وما الذي يدفعنا لمساعدتك على النجاح.
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <YoutubeMockup thumbnailUrl="https://placehold.co/1280x720/8b5cf6/ffffff?text=فريق+Sirus" />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-16 md:py-24 bg-main-gradient rounded-xl mx-4 my-8 card-glow text-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="https://placehold.co/600x400/8b5cf6/ffffff?text=فريق+Sirus+المبدع" alt="Creative Team" className="rounded-xl shadow-2xl w-full h-auto object-cover border-2 border-purple-500" />
                    </div>
                    <div className="md:w-1/2 md:pr-12 text-right">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gradient">من نحن: <br /> الخبرة والإبداع معًا</h2>
                        <p className="text-gray-300 text-lg mb-4 font-light">
                            في Sirus، نحن وكالة إبداع محتوى بخبرة سنوات، نحول أفكارك إلى محتوى رقمي جذاب ومؤثر. فريقنا من المبدعين والمحترفين ملتزم بتحقيق أهدافك.
                        </p>
                        <p className="text-gray-300 text-lg font-light">
                            نتولى كل تفاصيل مشروعك لضمان نتائج تتجاوز توقعاتك، ونجعلك تبرز في السوق التونسي والعالم الرقمي.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-24 bg-[#1a083d] rounded-xl mx-4 my-8 card-glow text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">خدماتنا الشاملة: نصنع محتواك من الألف إلى الياء</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-purple-400 text-5xl mb-6">🎬</div>
                            <h3 className="text-xl font-bold text-white mb-4">تصوير احترافي</h3>
                            <p className="text-gray-300 font-light">نقدم تصوير فيديو وصور فوتوغرافية عالية الجودة، لبروز رسالتك.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-purple-400 text-5xl mb-6">✂️</div>
                            <h3 className="text-xl font-bold text-white mb-4">مونتاج إبداعي</h3>
                            <p className="text-gray-300 font-light">نحول المواد الخام إلى قصص بصرية جذابة ومحتوى ديناميكي.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-purple-400 text-5xl mb-6">✍️</div>
                            <h3 className="text-xl font-bold text-white mb-4">سرد قصصي ومحتوى</h3>
                            <p className="text-gray-300 font-light">نبني السرد القصصي المقنع ونصنع المحتوى الكتابي الفعال.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-purple-400 text-5xl mb-6">💡</div>
                            <h3 className="text-xl font-bold text-white mb-4">بناء العلامات التجارية</h3>
                            <p className="text-gray-300 font-light">نصمم محتوى يعكس هويتك ويجذب جمهورك المستهدف.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-purple-400 text-5xl mb-6">📈</div>
                            <h3 className="text-xl font-bold text-white mb-4">حلول للعلامات التجارية</h3>
                            <p className="text-gray-300 font-light">نخدم جميع أنواع العلامات التجارية لضمان محتوى فعال ومميز.</p>
                        </div>
                        <div className="bg-main-gradient p-8 rounded-xl shadow-lg card-glow text-right">
                            <div className="text-purple-400 text-5xl mb-6">🌟</div>
                            <h3 className="text-xl font-bold text-white mb-4">إدارة العلامة الشخصية</h3>
                            <p className="text-gray-300 font-light">نساعد الأفراد على بناء وتطوير حضورهم الرقمي.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 md:py-24 text-white">
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
                                    <p className="text-gray-300 text-lg font-light italic">"{testimonial.description}"</p>
                                    <cite className="block mt-2 font-bold not-italic text-purple-300">- {testimonial.author}</cite>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="py-16 md:py-24 bg-main-gradient rounded-xl mx-4 my-8 card-glow text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">لماذا تختار Sirus؟</h2>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light opacity-90">
                        نجمع بين الإبداع، الخبرة المحلية، وأحدث التقنيات لنضمن تألق علامتك التجارية.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center space-y-3 transform hover:scale-110 transition-transform duration-300">
                                <div className="text-5xl">{benefit.icon}</div>
                                <h3 className="text-lg font-bold text-white text-center">{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-purple-800 to-indigo-900 text-white rounded-xl mx-4 my-8 card-glow">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">هل أنت مستعد للتألق؟ تواصل معنا اليوم!</h2>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light opacity-90">
                        دع "Sirus" يكون شريكك في رحلة النجاح الرقمي. املأ النموذج أدناه وسنتواصل معك قريباً.
                    </p>
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#1a083d] p-8 rounded-xl shadow-2xl text-right border border-purple-600">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">الاسم الكامل:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="shadow-inner appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="اسمك الكامل" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">البريد الإلكتروني:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="shadow-inner appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="بريدك الإلكتروني" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-200 text-sm font-bold mb-2">رسالتك:</label>
                            <textarea id="message" name="message" rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="shadow-inner appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="اكتب رسالتك هنا..." required></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">أرسل رسالتك</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#0b061e] text-gray-400 py-8 mt-12 rounded-t-3xl border-t border-purple-900">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 Sirus. جميع الحقوق محفوظة.</p>
                    <div className="flex justify-center space-x-6 space-x-reverse mt-4">
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">فيسبوك</a>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">إنستغرام</a>
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">لينكدإن</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
