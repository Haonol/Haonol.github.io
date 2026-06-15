document.addEventListener('DOMContentLoaded', () => {
    // 콘텐츠는 data.json 에 저장됩니다. 웹에서 편하게 수정하려면 Pages CMS(app.pagescms.org)를 사용하세요.
    let siteData = null;

    async function loadData() {
        try {
            // ?t= 로 캐시를 우회해 수정 후 최신 내용을 바로 반영
            const res = await fetch('data.json?t=' + Date.now());
            if (!res.ok) throw new Error('HTTP ' + res.status);
            siteData = await res.json();
        } catch (e) {
            console.error('data.json 을 불러오지 못했습니다:', e);
            return;
        }
        renderAll();
    }

    function renderAll() {
        if (!siteData) return;
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

    loadData();

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
