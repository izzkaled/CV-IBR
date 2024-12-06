// انتظار تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة المتغيرات
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const skillBars = document.querySelectorAll('.progress-bar');
    const sections = document.querySelectorAll('section');
    const form = document.querySelector('.contact-form');

    // ترجمات النصوص
    const translations = {
        ar: {
            'nav-home': 'الرئيسية',
            'nav-about': 'نبذة عني',
            'nav-experience': 'الخبرات',
            'nav-skills': 'المهارات',
            'nav-certificates': 'الشهادات',
            'nav-contact': 'تواصل معي',
            'current-lang': 'EN',
            'hero-title': 'إبراهيم محمد الصقري',
            'hero-subtitle': 'مهندس كهرباء',
            'hero-description': 'متخصص في تصميم وتطوير الأنظمة الكهربائية',
            'download-cv': 'تحميل السيرة الذاتية',
            'objective-title': 'الهدف المهني',
            'objective-text': 'الاستفادة من خبرتي في الهندسة الكهربائية للمساهمة في المشاريع المبتكرة، وتحسين الأنظمة، وتحسين كفاءة الطاقة. أهدف إلى تطبيق مهاراتي التقنية في تصميم وتحليل وتنفيذ الأنظمة الكهربائية، مع التعلم المستمر والتكيف مع التقنيات الناشئة. هدفي هو دفع تطوير حلول كهربائية مستدامة وموثوقة تلبي المعايير التنظيمية والصناعية.',
            'education-title': 'التعليم',
            'education-degree': 'بكالوريوس في الهندسة الكهربائية',
            'education-institution': 'جامعة التقنية والعلوم التطبيقية',
            'education-year': '2024',
            'experience-title': 'الخبرات العملية',
            'experience-tractebel-title': 'Tractebel للتشغيل والصيانة عُمان',
            'experience-tractebel-date': '2023',
            'experience-tractebel-description': 'تدريب في مجال التشغيل والصيانة',
            'experience-tractebel-details': 'اكتسبت خبرة عملية في صيانة وتشغيل المعدات الكهربائية وأنظمة التحكم',
            'experience-mazoon-title': 'شركة مزون للكهرباء',
            'experience-mazoon-date': '2022',
            'experience-mazoon-description': 'تدريب في قسم العمليات',
            'experience-mazoon-details': 'عملت في قسم العمليات وشاركت في مراقبة وإدارة شبكات التوزيع الكهربائية',
            'skills-title': 'المهارات',
            'certificates-title': 'الشهادات والإنجازات',
            'contact-title': 'تواصل معي',
            'scroll-text': 'اسحب للأسفل',
            'contact-name': 'الاسم',
            'contact-email': 'البريد الإلكتروني',
            'contact-message': 'الرسالة',
            'contact-submit': 'إرسال',
            'footer-rights': 'جميع الحقوق محفوظة',
            'footer-designed': 'تم التصميم بواسطة',
            'skills-technical': 'المهارات التقنية',
            'skills-personal': 'المهارات الشخصية',
            'skill-design': 'تصميم الدوائر الكهربائية',
            'skill-plc': 'برمجة PLC',
            'skill-matlab': 'MATLAB',
            'skill-autocad': 'AutoCAD',
            'skill-communication': 'التواصل الفعال',
            'skill-teamwork': 'العمل الجماعي',
            'skill-problem-solving': 'حل المشكلات',
            'skill-analysis': 'التحليل والتقييم',
            'skill-time-management': 'إدارة الوقت',
            'certificate-third-place': 'المركز الثالث',
            'certificate-innovation-x': 'مسابقة مشاريع التخرج - Innovation X',
            'certificate-training': 'شهادة تدريبية',
            'certificate-ai-applications': 'تطبيقات الذكاء الاصطناعي في الهندسة',
            'certificate-workshop': 'ورشة عمل',
            'certificate-solar-systems': 'تصميم وتركيب أنظمة الطاقة الشمسية',
            'certificate-description-1': 'حصلت على المركز الثالث في مسابقة مشاريع التخرج Innovation X',
            'certificate-description-2': 'شهادة في تطبيقات الذكاء الاصطناعي في مجال الهندسة الكهربائية',
            'certificate-description-3': 'شهادة مشاركة في ورشة عمل حول تصميم وتركيب أنظمة الطاقة الشمسية',
            'footer-name': 'إبراهيم السقري',
            'footer-description': 'مهندس كهرباء متخصص في تصميم وتطوير الأنظمة الكهربائية',
            'footer-home': 'الرئيسية',
            'footer-about': 'نبذة عني',
            'footer-experience': 'الخبرات',
            'footer-skills': 'المهارات',
            'footer-certificates': 'الشهادات',
            'footer-contact': 'تواصل معي',
            'footer-email': 'البريد الإلكتروني',
            'footer-phone': 'الهاتف',
            'footer-location': 'الموقع',
            'footer-social': 'تواصل معي على'
        },
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-experience': 'Experience',
            'nav-skills': 'Skills',
            'nav-certificates': 'Certificates',
            'nav-contact': 'Contact',
            'current-lang': 'عربي',
            'hero-title': 'Ibrahim Mohammed Al-Saqri',
            'hero-subtitle': 'Electrical Engineer',
            'hero-description': 'Specialized in Electrical Systems Design and Development',
            'download-cv': 'Download CV',
            'objective-title': 'Professional Objective',
            'objective-text': 'Leveraging my expertise in electrical engineering to contribute to innovative projects, improve systems, and enhance energy efficiency. I aim to apply my technical skills in designing, analyzing, and implementing electrical systems, while continuously learning and adapting to emerging technologies. My goal is to drive the development of sustainable and reliable electrical solutions that meet regulatory and industry standards.',
            'education-title': 'Education',
            'education-degree': 'Bachelor of Electrical Engineering',
            'education-institution': 'University of Technology and Applied Sciences',
            'education-year': '2024',
            'experience-title': 'Professional Experience',
            'experience-tractebel-title': 'Tractebel O&M Oman',
            'experience-tractebel-date': '2023',
            'experience-tractebel-description': 'Operations & Maintenance Training',
            'experience-tractebel-details': 'Gained practical experience in maintenance and operation of electrical equipment and control systems',
            'experience-mazoon-title': 'Mazoon Electricity Company',
            'experience-mazoon-date': '2022',
            'experience-mazoon-description': 'Operations Department Training',
            'experience-mazoon-details': 'Worked in operations department and participated in monitoring and managing electrical distribution networks',
            'skills-title': 'Skills',
            'certificates-title': 'Certificates & Achievements',
            'contact-title': 'Contact Me',
            'scroll-text': 'Scroll Down',
            'contact-name': 'Name',
            'contact-email': 'Email',
            'contact-message': 'Message',
            'contact-submit': 'Submit',
            'footer-rights': 'All Rights Reserved',
            'footer-designed': 'Designed by',
            'skills-technical': 'Technical Skills',
            'skills-personal': 'Personal Skills',
            'skill-design': 'Electrical Circuit Design',
            'skill-plc': 'PLC Programming',
            'skill-matlab': 'MATLAB',
            'skill-autocad': 'AutoCAD',
            'skill-communication': 'Effective Communication',
            'skill-teamwork': 'Teamwork',
            'skill-problem-solving': 'Problem Solving',
            'skill-analysis': 'Analysis & Evaluation',
            'skill-time-management': 'Time Management',
            'certificate-third-place': 'Third Place',
            'certificate-innovation-x': 'Graduation Projects Competition - Innovation X',
            'certificate-training': 'Training Certificate',
            'certificate-ai-applications': 'AI Applications in Engineering',
            'certificate-workshop': 'Workshop',
            'certificate-solar-systems': 'Solar Power Systems Design and Installation',
            'certificate-description-1': 'Achieved third place in the Innovation X Graduation Projects Competition',
            'certificate-description-2': 'Certificate in AI Applications for Electrical Engineering',
            'certificate-description-3': 'Participation certificate in Solar Power Systems workshop',
            'footer-name': 'Ibrahim Al-Saqri',
            'footer-description': 'Electrical Engineer specialized in electrical systems design and development',
            'footer-home': 'Home',
            'footer-about': 'About',
            'footer-experience': 'Experience',
            'footer-skills': 'Skills',
            'footer-certificates': 'Certificates',
            'footer-contact': 'Contact',
            'footer-email': 'Email',
            'footer-phone': 'Phone',
            'footer-location': 'Location',
            'footer-social': 'Connect with me on'
        }
    };

    // الحالة الحالية للغة
    let currentLang = 'ar';

    // جعل وظيفة تبديل اللغة متاحة عالمياً
    window.toggleLanguage = function() {
        // Add transition class before changing
        document.body.classList.add('language-transition');
        
        // تبديل اللغة
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // تحديث اتجاه الصفحة
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // Reset animations
        const heroText = document.querySelector('.hero-text');
        const circuitAnimation = document.querySelector('.circuit-animation');
        
        heroText.style.animation = 'none';
        circuitAnimation.style.animation = 'none';
        
        // Force reflow
        void heroText.offsetWidth;
        void circuitAnimation.offsetWidth;
        
        // تحديث النصوص with animation
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = currentLang === 'ar' ? 'translateX(-20px)' : 'translateX(20px)';
            
            setTimeout(() => {
                const key = element.getAttribute('data-lang');
                if (translations[currentLang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[currentLang][key];
                    } else {
                        element.textContent = translations[currentLang][key];
                    }
                }
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 300);
        });
        
        // Restart animations
        heroText.style.animation = '';
        circuitAnimation.style.animation = '';
        
        // Remove transition class after animation completes
        setTimeout(() => {
            document.body.classList.remove('language-transition');
        }, 500);

        // حفظ تفضيل اللغة
        localStorage.setItem('preferred-language', currentLang);
    };

    // تحميل تفضيل اللغة عند بدء التشغيل
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }

    // التحكم في شريط التنقل عند التمرير
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // زر القائمة للأجهزة المحمولة
    let menuOpen = false;
    menuBtn?.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            navLinks.style.display = 'flex';
            navLinks.style.animation = 'slideIn 0.3s forwards';
        } else {
            menuBtn.classList.remove('open');
            navLinks.style.animation = 'slideOut 0.3s forwards';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        }
        menuOpen = !menuOpen;
    });

    // التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة في الأجهزة المحمولة
                if (menuOpen) {
                    menuBtn.click();
                }
            }
        });
    });

    // تحريك أشرطة المهارات
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    // مراقب التقاطع للتحريكات
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // تحريك أشرطة المهارات عند الوصول إلى قسم المهارات
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.2
    });

    // إضافة المراقب لجميع الأقسام
    sections.forEach(section => {
        observer.observe(section);
    });

    // معالجة نموذج الاتصال
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // جمع البيانات من النموذج
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // إظهار رسالة نجاح (يمكن تعديلها لإرسال البيانات إلى الخادم)
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح';
        submitBtn.style.background = '#4CAF50';
        
        // إعادة تعيين النموذج والزر بعد 3 ثوانٍ
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });

    // تأثيرات التحويم للبطاقات
    const cards = document.querySelectorAll('.certificate-card, .timeline-content, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // تحريك الدائرة الكهربائية
    const circuitAnimation = document.querySelector('.circuit-animation');
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        if (circuitAnimation) {
            circuitAnimation.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
    });

    // Circuit Animation
    function initCircuitAnimation() {
        const paths = document.querySelectorAll('.circuit-path');
        const nodes = document.querySelectorAll('.circuit-node');
        
        // Position circuit paths
        paths[0].style.top = '20%';
        paths[0].style.left = '10%';
        paths[0].style.width = '40%';
        paths[0].style.height = '2px';
        
        paths[1].style.top = '60%';
        paths[1].style.right = '10%';
        paths[1].style.width = '30%';
        paths[1].style.height = '2px';
        
        // Position nodes
        nodes[0].style.top = '20%';
        nodes[0].style.left = '10%';
        
        nodes[1].style.top = '60%';
        nodes[1].style.right = '40%';
        
        nodes[2].style.top = '40%';
        nodes[2].style.left = '50%';
        
        // Add random delays to animations
        nodes.forEach(node => {
            node.style.animationDelay = Math.random() * 2 + 's';
        });
    }

    // Initialize circuit animation when DOM is loaded
    initCircuitAnimation();

    // إضافة تأثيرات كتابة تدريجية للنصوص
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        typeWriter();
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Theme toggle function
    window.toggleTheme = function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class
        document.body.classList.add('theme-transition');
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        updateThemeIcon(newTheme);
        
        // Remove transition class
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 500);
    };

    // Update theme icon
    function updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
});

// تحريكات CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-100%); opacity: 0; }
    }
    
    .animate {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);
