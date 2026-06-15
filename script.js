document.addEventListener('DOMContentLoaded', () => {
    // 콘텐츠 데이터 (정적). 내용을 수정하려면 이 객체를 편집한 뒤 git push 하세요.
    const siteData = {
        profile: {
            name: "서동원 | Dongwon Seo",
            english_name: "Dongwon Seo",
            affiliation: "<span style=\"letter-spacing: -0.32px;\">기계공학과 석사과정 | 국립금오공과대학교(Kumoh nation institute of Tech.)</span>",
            body: "<span style=\"letter-spacing: -0.32px;\">마찰공학(Tribology)과 마찰전기 나노발전기(TENG)를 핵심 연구 주제로 석사과정을 밟고 있습니다. 특히, 금속 유기 구조체(MOFs)의 표면및 계면에서의 적용을 융합하여 에너지 하베스팅 및 표면 공학 분야의 새로운 가능성을 탐구하고자 합니다.</span>",
            avatar: "https://i.imgur.com/KgP09Ww.jpeg",
            cv_link: "https://docs.google.com/document/d/1MrrJcx1AyQza365NH_VbZWDxZ9KKSMT5rCL-xOnv7WM/edit?usp=sharing",
            google_scholar: "https://scholar.google.com/citations?user=bJknXM0AAAAJ&hl=ko",
            email: "sdw2051@kumoh.ac.kr",
            linkedin: "#"
        },
        publications: [
            { title: "Scott–Russel linkage-based triboelectric self-powered sensor for contact material-independent force sensing and tactile recognition", authors: "<strong> Dongwon Seo </strong>, Jimin Kong, and Jihoon Chung*", journal: "<em> Small </em> (2023 IF: 13.0, JCR Top 10%) ", year: "2024", link_text: "DOI", link_url: "https://onlinelibrary.wiley.com/doi/10.1002/smll.202403394" },
            { title: "Vertical Contact/Separation Triboelectric Generator Utilizing Surface Characteristics of Metal-Organic Frameworks", authors: "<strong> Kyoung-Hwan Kim</strong>, Jimin Kong, <strong>Dongwon Seo</strong>, and Jihoon Chung*", journal: "<em> Journal of the Korean Society of Manufacturing Process Engineers (KCI) </em>", year: "2025", link_text: "", link_url: "" },
            { title: "Capacitive Structure-based Acoustic Triboelectric Nanogenerator for Advanced Warning Sound Recognition", authors: "<strong>Giyoung Son</strong>, <strong>Dongwon Seo</strong>, Dongjun Kim, Seokjin Kim, Jimin Kong, Kyounghwan Kim, and Jihoon Chung *", journal: "<em>Advanced Engineering Materials </em> (2023 IF: 3.4, JCR Top 50%)", year: "2025", link_text: "DOI", link_url: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adem.202402442?af=R" },
            { title: "Systematic Design Improvement of Spinning Disk-Based Triboelectric Nanogenerators for Enhancing Electrical Output", authors: "<strong>Dongwon Seo†, Seokjin Kim†, Jimin Kong†,</strong> Wonhyung Lee*, and Jihoon Chung*", journal: "<em> International Journal of Precision Engineering and Manufacturing-Green Technology </em> (2023 IF: 5.3, JCR Top 10%) ", year: "2025", link_text: "DOI", link_url: "https://link.springer.com/article/10.1007/s40684-025-00740-1" },
            { title: "Particulate Static Effect Induced Electricity Generation Inspired by Tesla Turbine", authors: "<strong>Seh-Hoon Chung†,  Dongwon Seo†</strong>, Hyungseok Yong, Sunghan Kim, Zong-Hong Lin, Sangmin Lee*, and Jihoon Chung*", journal: "<em> Advanced Energy Materials </em> (2024 IF: 26.0, JCR Top 2.5%)  ", year: "2025", link_text: "DOI", link_url: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/aenm.202506275" },
            { title: "UiO-66-NH2 Enabled Dry Solid Lubrication for Enhancing the Mechanical Stability and Electrical Output of a Triboelectric Nanogenerator", authors: "<strong>Kyunghwan Kim</strong>, <strong>Dongwon Seo</strong>,  Hee Jae Hwang*, and Jihoon Chung*", journal: "<em> Applied surface science </em> (2024 IF: 6.9, JCR Top 10%)", year: "2025 ", link_text: "DOI", link_url: "https://www.sciencedirect.com/science/article/abs/pii/S0169433226004551" },
            { title: "Smart Thrust Bearing with Integrated Discharge-Based Energy Harvesting and Deep-Learning Fault Detection", authors: "Jimin Kong†, Dongwon Seo†, Seokjin Kim, Giyoung Son, Kyunghwan Kim, Jang-Woo Han, Hee Jae Hwang*, and Jihoon Chung*", journal: "<em> Chemical Engineering Journal </em> (2024 IF: 13.2, JCR Top 3%)", year: "2026", link_text: "DOI", link_url: "https://www.sciencedirect.com/science/article/abs/pii/S1385894726045705" }
        ],
        conferences: [
            { title: "Pantograph Structure based Self-powered Force Sensor", description: "SPIE in Los Angeles 2024" },
            { title: "Optimized Spinning-Wheel Design for Enhanced Electrical Output", description: "KSMPE Fall Conference 2024" },
            { title: "The study of composite friction reduction utilizing Al(OH)3 and UIO-66-NH2", description: "KSCM fall Conference 2025" }
        ],
        education: [
            { title: "M.S. in Mechanical Engineering", description: "Kumoh National Institute of Technology, 2024 - Present" },
            { title: "B.S. in Mechanical Engineering", description: "Kumoh National Institute of Technology, 2018 - 2024" },
            { title: "Exchange student ", description: "Heilbronn university of applied sciences, Germany" }
        ],
        awards: [
            { title: "Best Paper award (우수논문상)", description: "The Korean Society of Manufacturing Process Engineers(KSMPE)Fall Conference " },
            { title: "Nation President Scholarship for Graduated Student (대학원 대통령 과학 장학금)", description: "Korea Ministry of Science and ICT (MIST) 2025~2026 " }
        ]
    };

    function renderAll() {
        renderProfile(siteData.profile);
        renderPublications(siteData.publications);
        renderList('conferences-list', siteData.conferences);
        renderList('education-list', siteData.education);
        renderList('awards-list', siteData.awards);
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    function renderProfile(data) {
        const container = document.getElementById('about');
        if (!container || !data) return;
        container.innerHTML = `
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-xl shadow-lg">
                <div class="md:w-auto md:flex-shrink-0">
                    <div id="profile-image-wrapper" class="profile-image-wrapper mx-auto">
                        <img id="profile-avatar" src="${data.avatar}" alt="프로필 사진">
                    </div>
                </div>
                <div class="md:w-2/3">
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 text-center md:text-left">${data.name}</h1>
                    <p class="text-xl text-indigo-600 font-semibold mb-5 text-center md:text-left">${data.affiliation}</p>
                    <p class="mb-6 text-base leading-relaxed text-gray-600">${data.body}</p>
                    <div class="flex items-center justify-center md:justify-start space-x-5">
                        <a href="${data.cv_link}" target="_blank" rel="noopener noreferrer" class="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 shadow-md transition-all">CV 다운로드</a>
                        <a href="mailto:${data.email}" title="Email" class="social-icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        </a>
                        <a href="${data.google_scholar}" target="_blank" rel="noopener noreferrer" title="Google Scholar" class="social-icon-link">
                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5s-5.548 1.748-6.758 4.269zM12 10.9c-1.39 0-2.583.52-3.483 1.343l3.483 2.829l3.483-2.829C14.583 11.42 13.39 10.9 12 10.9z"/></svg>
                        </a>
                    </div>
                </div>
            </div>`;
        document.getElementById('nav-logo').innerHTML = data.english_name;
        document.getElementById('footer-name').innerHTML = data.english_name;
    }

    function renderPublications(data) {
        const container = document.getElementById('publications-container');
        if (!container) return;
        container.innerHTML = (data || []).map((item) => {
            const styledJournal = item.journal.replace(/<em>(.*?)<\/em>/g, '<span class="journal-name">$1</span>');
            return `
            <div class="publication-card relative">
                <div>
                    <p class="publication-title">${item.title}</p>
                    <p class="publication-authors">${item.authors}</p>
                    <p class="publication-journal">${styledJournal}</p>
                </div>
                <div class="publication-meta">
                    <span class="publication-year">${item.year}</span>
                    <div>
                        ${item.link_url && item.link_text ? `<a href="${item.link_url}" target="_blank" rel="noopener noreferrer" class="publication-link">${item.link_text}</a>` : ''}
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    function renderList(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        if (!Array.isArray(data)) { data = []; }
        container.innerHTML = data.map((item) => `
            <li class="flex items-start gap-4 py-3">
                <div class="flex-grow">
                    <span class="font-bold text-gray-800">${item.title}</span>
                    <p class="text-gray-500 mt-1">${item.description}</p>
                </div>
            </li>`).join('');
    }

    renderAll();

    const reveals = document.querySelectorAll('.reveal');
    function revealSections() {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();
});
