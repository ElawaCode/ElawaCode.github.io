document.addEventListener("DOMContentLoaded", function () {

    const langSwitcher = document.getElementById('lang-switcher');
    
    // 1. اللغة الافتراضية هي العربية 'ar' ما لم يتم تغييرها سابقاً
    let currentLang = localStorage.getItem('lang') || 'ar'; 

    const translations = {
        'page_title': { ar: 'Mohamed Elawa | محمد عِلاوه', en: 'Mohamed Elawa | محمد عِلاوه' },
        'description': { ar: 'محمد أحمد جميل علاوه.', en: 'Mohamed Ahmed Gamil Elawa.' },
        'lang_switcher_text': { ar: 'English', en: 'العربية' },
        'logo_text': { ar: ' </> علاوه كود', en: '</> Elawa Code' },
        'nav_home': { ar: 'الرئيسية', en: 'Home' },
        'nav_about': { ar: 'عني', en: 'About' },
        'nav_skills': { ar: 'المهارات', en: 'Skills' },
        'nav_certs': { ar: 'الشهادات', en: 'Certifications' },
        'nav_articles': { ar: 'مقالاتي', en: 'Articles' },
        'nav_contact': { ar: 'التواصل', en: 'Contact' },
        'home_name': { ar: 'محمد عِلاوه', en: 'Mohamed Elawa' },
        'home_bio': {
            ar: `أنا محمد أحمد جميل علاوه، المعروف باسم محمد عِلاوه وعِلاوه كود، من الجيزة - مصر. أهتم بالتعلم المستمر وتطوير نفسي، وأشارك رحلتي وأفكاري وأعمالي مع الآخرين. هدفي أن أصبح مهندس برمجيات مستقبليًا، وأبني حلولًا رقمية مؤثرة وذات قيمة حقيقية. أتعامل مع التحديات بثقة وعقلية إيجابية، وأسعى دائمًا للنمو واكتساب مهارات جديدة تفتح لي فرصًا لصناعة فرق حقيقي.`,
            en: `I am Mohamed Ahmed Gamil Elawa, known as Mohamed Elawa and ElawaCode, from Giza - Egypt. I focus on continuous learning, sharing my journey and ideas. My goal is to become a future Software Engineer, building impactful digital solutions. I tackle challenges with a positive mindset, always seeking growth and new skills.`
        },
        'view_articles': { ar: 'رؤية مقالاتي', en: 'View Articles' },
        'contact_me': { ar: 'تواصل معي', en: 'Contact Me' },
        'about_heading': { ar: '// عني_', en: '// About_' },
        'about_name': { ar: 'محمد أحمد جميل علاوه (علاوه كود)', en: 'Mohamed Ahmed Gamil (ElawaCode)' },
        'about_desc': {
            ar: `أنا طالب من الجيزة – مصر، مهتم بالتعلم المستمر واكتساب المهارات الجديدة في مجالات متنوعة. أعشق تدوين الأفكار ومشاركة الآراء التقنية، وأؤمن بأن المعرفة تكتمل بمشاركتها مع الآخرين. بدأت بتعلم البرمجة، ومع الوقت توسعت اهتماماتي لتشمل التفكير التحليلي، حل المشكلات، وتصميم حلول رقمية فعّالة ذات قيمة حقيقية.`,
            en: `I am a student from Giza, Egypt, passionate about continuous learning. I love documenting ideas and sharing technical insights, believing that knowledge grows when shared. I started with programming and expanded into analytical thinking, problem-solving, and designing effective digital solutions.`
        },
        'about_item_1': { ar: 'أساسيات تطوير الويب', en: 'Web Development Basics' },
        'about_item_2': { ar: 'محلل نظم (تحليل احتياجات، تصميم تدفقات، تحسين واجهة وتجربة المستخدم)', en: 'System Analyst (Requirements, Design, UI/UX)' },
        'about_item_3': { ar: 'كاتب محتوى تقني ومشارك للآراء (على منصة Substack والسوشيال ميديا)', en: 'Technical Content Writer & Opinion Sharer (on Substack & Social Media)' },
        'about_item_4': { ar: 'متعلم مستمر، دائمًا أطور مهاراتي التقنية والتحليلية والفكرية', en: 'Continuous Learner, always developing my skills' },
        
        'skills_heading': { ar: '// المهارات_', en: '// Skills_' },
        'tech_skills_title': { ar: 'المهارات التقنية', en: 'Technical Skills' },
        'personal_skills_title': { ar: 'المهارات الشخصية', en: 'Soft Skills' },
        'languages_title': { ar: 'اللغات', en: 'Languages' },
        'skill_programming': { ar: 'أساسيات البرمجة', en: 'Programming Basics' },
        'skill_html_css': { ar: 'HTML & CSS أساسيات', en: 'HTML & CSS Basics' },
        'skill_git': { ar: 'Git & GitHub', en: 'Git & GitHub' },
        'skill_ui_ux': { ar: 'مبادئ واجهة وتجربة المستخدم', en: 'UI/UX Principles' },
        'skill_tech_writing': { ar: 'الكتابة التقنية (Technical Writing)', en: 'Technical Writing' },
        'skill_problem_solving': { ar: 'حل المشكلات', en: 'Problem Solving' },
        'skill_critical_thinking': { ar: 'التفكير النقدي', en: 'Critical Thinking' },
        'skill_creativity': { ar: 'الإبداع', en: 'Creativity' },
        'skill_sharing_opinions': { ar: 'مشاركة الآراء والأفكار', en: 'Opinion & Idea Sharing' },
        'skill_continuous_learning': { ar: 'التعلم المستمر', en: 'Continuous Learning' },
        'skill_communication': { ar: 'مهارات التواصل', en: 'Communication Skills' },
        'lang_arabic': { ar: 'العربية', en: 'Arabic' },
        'lang_english': { ar: 'الإنجليزية', en: 'English' },
        
        'certs_heading': { ar: '// الشهادات والدورات_', en: '// Certificates_' },
        'cert1_title': { ar: 'CS50’s Scratch – جامعة هارفارد', en: 'CS50’s Scratch – Harvard' },
        'cert1_desc': { ar: 'شهادة إتمام دورة CS50’s Scratch، مع التركيز على مفاهيم البرمجة التمهيدية.', en: 'Completion certificate for CS50’s Scratch, focusing on introductory programming.' },
        'cert2_title': { ar: 'شهادة ICDL – منصة إدراك', en: 'ICDL - Edraak' },
        'cert2_desc': { ar: 'شهادة الرخصة الدولية لقيادة الحاسوب من منصة إدراك.', en: 'International Computer Driving License from Edraak platform.' },
        'cert3_title': { ar: 'برنامج أبطال الإنترنت – جوجل', en: 'Internet Heroes - Google' },
        'cert3_desc': { ar: 'شهادة إتمام برنامج أبطال الإنترنت من جوجل.', en: 'Certificate for completing Google\'s Internet Heroes program.' },
        'cert4_title': { ar: 'أشبال مصر الرقمية', en: 'Digital Egypt Cubs' },
        'cert4_desc': { ar: 'شهادة إتمام معسكرات التدريب والمشاريع الواقعية، شملت دور قائد فريق والفوز بمشروع "أفضل مشروع تجاري".', en: 'Training camps completion, including team leadership and winning "Best Business Project".' },
        'cert5_title': { ar: 'أشبال مصر الرقمية المستوى الثالث', en: 'Digital Egypt Cubs - Lvl 3' },
        'cert5_desc': { ar: 'شهادة إتمام المستوى الثالث من المباردة والصعود الى المستوى الرابع.', en: 'Completion of level 3 and promotion to level 4.' },
        
        'articles_heading': { ar: '// مقالاتي_', en: '// Articles_' },
        'article1_title': { ar: 'كيف نجعل التكنولوجيا رفيقًا ذكيًا؟', en: 'Tech as a Smart Companion' },
        'article1_desc': { ar: 'أفكار حول استخدام التكنولوجيا بشكل فعّال لتسهيل التعلم.', en: 'Ideas on using tech effectively to facilitate learning.' },
        'article2_title': { ar: 'هل الشغف مهم فعلاً أم الانضباط أهم؟', en: 'Passion vs Discipline: Which Matters More?' },
        'article2_desc': { ar: 'أناقش الفرق بين الشغف والانضباط في التعلم والعمل.', en: 'Exploring the difference between passion and discipline in learning and work.' },
        'article3_title': { ar: 'لماذا يفشل أغلب الناس في التعلم؟', en: 'Why Do Most People Fail in Learning?' },
        'article3_desc': { ar: 'أستعرض أبرز الأسباب التي تجعل الكثير يفشلون في التعلم.', en: 'Exploring the main reasons why many people fail in their learning journey.' },
        'read_more': { ar: 'اقرأ المقال', en: 'Read More' },
        'read_more_substack': { 
            ar: 'تابع بقية آرائي ومقالاتي على Substack', 
            en: 'Follow my opinions and articles on Substack' 
        },
        'contact_heading': { ar: '// التواصل_', en: '// Contact_' },
        'contact_email': { ar: 'البريد الإلكتروني', en: 'Email' },
        'contact_linkedin': { ar: 'لينكدإن', en: 'LinkedIn' },
        'contact_github': { ar: 'جيت هب', en: 'GitHub' },
        'contact_instagram': { ar: 'انستغرام', en: 'Instagram' },
        'contact_tiktok': { ar: 'تيك توك', en: 'TikTok' },
        'contact_youtube': { ar: 'يوتيوب', en: 'YouTube' },
        'contact_facebook': { ar: 'فيسبوك', en: 'Facebook' },
        'contact_x': { ar: 'اكس (تويتر سابقاً)', en: 'X (Twitter)' },
        'contact_linktree': { ar: 'لينك تري', en: 'Linktree' },
        'footer_text': { ar: '© 2026 MohamedAhmedGamilElawa. All rights reserved.', en: '© 2026 MohamedAhmedGamilElawa. All rights reserved.' }
    };

    const switchLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'en';
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[key] && translations[key][lang]) {
                if (element.classList.contains('section-heading')) {
                    element.dataset.text = translations[key][lang];
                } else {
                    const icon = element.querySelector('i');
                    if (icon) {
                        const iconHTML = icon.outerHTML;
                        element.innerHTML = iconHTML + ' ' + translations[key][lang];
                    } else {
                        element.textContent = translations[key][lang];
                    }
                }
            }
        });
    };

    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        switchLanguage(newLang);
    });

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }

    const header = document.querySelector('header');
    window.onscroll = () => {
        if (header) header.classList.toggle('sticky', window.scrollY > 100);
        if (menuIcon) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    };

    const headingIntervals = new Map();
    function typeSectionHeading(element) {
        const text = element.dataset.text;
        if(!text) return;
        element.innerHTML = ''; 
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
    }

    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const headingElement = entry.target;
            if (entry.isIntersecting) {
                if (!headingIntervals.has(headingElement)) {
                    typeSectionHeading(headingElement);
                    const intervalId = setInterval(() => typeSectionHeading(headingElement), 5000);
                    headingIntervals.set(headingElement, intervalId);
                }
            } else {
                if (headingIntervals.has(headingElement)) {
                    clearInterval(headingIntervals.get(headingElement));
                    headingIntervals.delete(headingElement);
                    headingElement.textContent = ''; 
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-heading').forEach(heading => headingObserver.observe(heading));

    switchLanguage(currentLang);
});