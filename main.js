// ============================================
// 日本不動產網站 - 主要 JavaScript
// ============================================

// 配置資料
let siteConfig = {};
let contentData = {};
let propertiesData = {};

// 載入配置檔案
async function loadConfig() {
    try {
        const [configRes, contentRes, propertiesRes] = await Promise.all([
            fetch('config/site-config.json'),
            fetch('config/content.json'),
            fetch('config/properties.json')
        ]);
        
        siteConfig = await configRes.json();
        contentData = await contentRes.json();
        propertiesData = await propertiesRes.json();
        
        // 初始化頁面
        initPage();
    } catch (error) {
        console.error('載入配置失敗:', error);
    }
}

// 初始化頁面
function initPage() {
    // 更新網站標題
    if (siteConfig.site) {
        document.title = siteConfig.site.title || document.title;
    }
    
    // 初始化導航列
    initNavigation();
    
    // 初始化 CTA 按鈕
    initCTAs();
    
    // 載入頁面特定內容
    const pageName = getPageName();
    if (pageName === 'index') {
        initHomePage();
    } else if (pageName === 'properties') {
        initPropertiesPage();
    } else if (pageName === 'property-detail') {
        initPropertyDetailPage();
    } else if (pageName === 'about') {
        initAboutPage();
    } else if (pageName === 'services') {
        initServicesPage();
    } else if (pageName === 'faq') {
        initFAQPage();
    }
}

// 取得頁面名稱
function getPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    return filename.replace('.html', '');
}

// 初始化導航列
function initNavigation() {
    // 可以根據配置動態生成導航選單
}

// 初始化 CTA 按鈕
function initCTAs() {
    // 為所有 CTA 按鈕添加事件
    document.querySelectorAll('.btn-line, .btn-cta, [data-cta="line"]').forEach(btn => {
        btn.addEventListener('click', handleLineCTA);
    });
    
    // 建立固定浮動 CTA
    createFloatingCTA();
}

// 處理 Line CTA 點擊
function handleLineCTA(e) {
    e.preventDefault();
    const lineUrl = siteConfig.contact?.lineUrl || 'https://line.me/ti/p/@japanproperty';
    
    // 開啟 Line 連結
    window.open(lineUrl, '_blank');
    
    // 可以加入追蹤事件
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': 'Line Contact'
        });
    }
}

// 建立固定浮動 CTA
function createFloatingCTA() {
    // 檢查是否已存在
    if (document.getElementById('floating-cta')) {
        return;
    }
    
    const ctaText = siteConfig.cta?.lineText || '加入 Line 聯絡業務';
    const floatingCTA = document.createElement('a');
    floatingCTA.id = 'floating-cta';
    floatingCTA.href = siteConfig.contact?.lineUrl || '#';
    floatingCTA.className = 'btn btn-primary floating-cta';
    floatingCTA.textContent = ctaText;
    floatingCTA.onclick = handleLineCTA;
    
    document.body.appendChild(floatingCTA);
}

// 初始化首頁
function initHomePage() {
    if (!contentData.home) return;
    
    // 更新 Hero Section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && contentData.home.hero) {
        heroTitle.textContent = contentData.home.hero.title;
    }
    if (heroSubtitle && contentData.home.hero) {
        heroSubtitle.textContent = contentData.home.hero.subtitle;
    }
    
    // 載入精選物件
    loadFeaturedProperties();
    
    // 載入功能特色
    loadFeatures();
    
    // 載入客戶見證
    loadTestimonials();
}

// 在載入精選物件時加入除錯訊息
function loadFeaturedProperties() {
    const container = document.getElementById('featured-properties');
    if (!container || !propertiesData.properties) {
        console.error('精選物件容器或資料不存在');
        return;
    }

    // 取前 6 個物件
    const featured = propertiesData.properties.slice(0, 6);
    console.log('載入的精選物件:', featured);

    container.innerHTML = featured.map(property => `
        <div class="property-card">
            <img src="${property.image}" alt="${property.title}" class="property-image" onerror="this.src='https://via.placeholder.com/400x300?text=物件圖片'">
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-meta">
                    <span>📍 ${property.location}</span>
                    <span>🏠 ${property.type}</span>
                    <span>📐 ${property.area}</span>
                </div>
                <a href="property-detail.html?id=${property.id}" class="btn btn-outline property-cta">查看詳情</a>
            </div>
        </div>
    `).join('');

    // 檢查容器內容
    console.log('容器內容:', container.innerHTML);
}

// 載入功能特色
function loadFeatures() {
    const container = document.getElementById('features');
    if (!container || !contentData.home.features) return;
    
    const features = contentData.home.features.items || [];
    
    container.innerHTML = features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <div class="feature-title">${feature.title}</div>
            <div class="feature-text">${feature.description}</div>
        </div>
    `).join('');
}

// 載入客戶見證
function loadTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container || !contentData.home.testimonials) return;
    
    const testimonials = contentData.home.testimonials.items || [];
    
    container.innerHTML = testimonials.map(testimonial => `
        <div class="card">
            <div class="card-body">
                <p class="card-text">"${testimonial.comment}"</p>
                <div class="card-title">${testimonial.name}</div>
                <div class="card-text" style="font-size: 0.9rem; color: var(--text-light);">${testimonial.property}</div>
            </div>
        </div>
    `).join('');
}

// 初始化物件列表頁
function initPropertiesPage() {
    console.log('初始化物件頁面');

    // 確認資料是否正確載入
    if (!propertiesData || !propertiesData.properties) {
        console.error('物件資料未正確載入');
        return;
    }

    // 課長注意：原本這裡是 loadFeaturedProperties()，我已改為 loadAllProperties()
    // 這樣在「物件列表」頁面才會顯示全部物件，而不只是精選的前6個
    loadAllProperties(); 
    initFilters();
}

// 載入所有物件
function loadAllProperties() {
    // 注意：請確認您的 HTML 中物件列表容器 ID 是否為 'properties-list' 或是 'featured-properties'
    // 如果列表頁抓不到，請檢查 HTML 檔案中的 ID
    const container = document.getElementById('properties-list') || document.getElementById('featured-properties');
    
    if (!container || !propertiesData.properties) {
         console.error('找不到物件列表容器 (properties-list)');
         return;
    }
    
    container.innerHTML = propertiesData.properties.map(property => `
        <div class="property-card">
            <img src="${property.image}" alt="${property.title}" class="property-image" onerror="this.src='https://via.placeholder.com/400x300?text=物件圖片'">
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-meta">
                    <span>📍 ${property.location}</span>
                    <span>🏠 ${property.type}</span>
                    <span>📐 ${property.area}</span>
                    <span>🛏️ ${property.rooms}</span>
                </div>
                <p class="card-text" style="margin-bottom: 1rem;">${property.description}</p>
                <div style="display: flex; gap: 0.5rem;">
                    <a href="property-detail.html?id=${property.id}" class="btn btn-outline" style="flex: 1;">查看詳情</a>
                    <button class="btn btn-primary" data-cta="line" style="flex: 1;">立即諮詢</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // 重新綁定 CTA 事件
    initCTAs();
}

// 初始化篩選器
function initFilters() {
    // 篩選功能可以後續擴充
    console.log('篩選器初始化');
}

// 初始化物件詳情頁
function initPropertyDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    if (!propertyId || !propertiesData.properties) return;
    
    const property = propertiesData.properties.find(p => p.id === propertyId);
    if (!property) return;
    
    loadPropertyDetail(property);
}

// 載入物件詳情
function loadPropertyDetail(property) {
    // 更新頁面內容
    const titleEl = document.querySelector('.property-detail-title');
    const priceEl = document.querySelector('.property-detail-price');
    const imageEl = document.querySelector('.property-detail-image');
    
    if (titleEl) titleEl.textContent = property.title;
    if (priceEl) priceEl.textContent = property.price;
    if (imageEl) {
        imageEl.src = property.image;
        imageEl.alt = property.title;
    }
    
    // 載入詳細資訊
    const detailContainer = document.getElementById('property-details');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="property-info-section">
                <h3>基本資訊</h3>
                <div class="property-meta">
                    <span>📍 地點：${property.location}</span>
                    <span>🏠 類型：${property.type}</span>
                    <span>📐 面積：${property.area}</span>
                    <span>🛏️ 格局：${property.rooms}</span>
                    <span>📅 建成年份：${property.year}</span>
                </div>
            </div>
            <div class="property-info-section">
                <h3>物件描述</h3>
                <p>${property.description}</p>
            </div>
            <div class="property-info-section">
                <h3>特色</h3>
                <ul>
                    ${property.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="property-info-section">
                <h3>交通資訊</h3>
                <p>${property.transport}</p>
            </div>
        `;
    }
}

// 初始化關於我們頁
function initAboutPage() {
    if (!contentData.about) return;
    
    // 更新頁面內容
    const titleEl = document.querySelector('.page-title');
    if (titleEl && contentData.about.title) {
        titleEl.textContent = contentData.about.title;
    }
}

// 初始化服務流程頁
function initServicesPage() {
    if (!contentData.services) return;
    
    const container = document.getElementById('services-steps');
    if (!container) return;
    
    const steps = contentData.services.steps || [];
    
    container.innerHTML = steps.map(step => `
        <div class="service-step">
            <div class="step-number">${step.number}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');
}

// 初始化 FAQ 頁
function initFAQPage() {
    if (!contentData.faq) return;
    
    const container = document.getElementById('faq-list');
    if (!container) return;
    
    const categories = contentData.faq.categories || [];
    
    container.innerHTML = categories.map(category => `
        <div class="faq-category">
            <h3>${category.category}</h3>
            ${category.questions.map((qa, index) => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        <span>${qa.q}</span>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>${qa.a}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// 切換 FAQ 展開/收合
function toggleFAQ(element) {
    const item = element.parentElement;
    const answer = item.querySelector('.faq-answer');
    const toggle = element.querySelector('.faq-toggle');
    
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        toggle.textContent = '−';
    } else {
        answer.style.maxHeight = '0';
        toggle.textContent = '+';
    }
}

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', loadConfig);