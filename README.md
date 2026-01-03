# 日本不動產銷售型網站

## 📋 專案簡介

這是一個專為日本房地產銷售設計的網站系統，主要目標是引導使用者加入 Line 聯絡業務。網站採用簡約、專業、淺色系設計風格，內容語氣親切友善。

## 🎯 主要功能

- **響應式設計**：適配各種裝置（桌面、平板、手機）
- **物件展示**：完整的物件列表與詳情頁面
- **CTA 優化**：多處配置 Line 聯絡按鈕，提升轉換率
- **後台管理**：簡單的後台系統，可維護內容與物件
- **配置驅動**：所有內容透過 JSON 配置檔案管理

## 📁 專案結構

```
my-first-web/
├── index.html              # 首頁
├── properties.html         # 物件列表頁
├── property-detail.html    # 物件詳情頁
├── about.html              # 關於我們
├── services.html           # 服務流程
├── faq.html                # 常見問題
├── contact.html            # 聯絡我們
├── admin.html              # 後台管理介面
├── css/
│   └── style.css          # 共用樣式
├── js/
│   └── main.js            # 主要 JavaScript
├── config/
│   ├── site-config.json   # 網站基本設定
│   ├── content.json       # 頁面文案內容
│   └── properties.json    # 物件資料
├── images/                 # 圖片資料夾（需自行建立）
└── 網站規劃.md            # 完整規劃文檔
```

## 🚀 快速開始

### 1. 本地預覽

直接在瀏覽器開啟 `index.html` 即可預覽網站。

**注意**：由於使用 `fetch` 載入 JSON 配置檔案，建議使用本地伺服器：

```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js (需安裝 http-server)
npx http-server
```

然後在瀏覽器開啟 `http://localhost:8000`

### 2. 配置網站

編輯 `config/` 資料夾中的 JSON 檔案：

- **site-config.json**：網站基本設定、聯絡資訊、顏色配置
- **content.json**：各頁面的文案內容
- **properties.json**：物件資料

### 3. 上傳圖片

將圖片放入 `images/` 資料夾，並在配置檔案中指定正確的路徑。

## 📝 維護指南

### 📖 詳細使用指南

**請參考以下檔案獲取完整說明**：
- 📘 **使用指南.md** - 完整的使用說明（包含圖片上傳、編輯文件等）
- 📄 **快速上手指南.txt** - 快速參考指南

### 快速操作

#### 上傳物件照片
1. 將照片放入 `images/` 資料夾
2. 編輯 `config/properties.json`，更新圖片路徑

#### 新增物件
編輯 `config/properties.json`，在 `properties` 陣列中新增物件（參考 `config/properties-example.json` 範例）

#### 修改頁面文案
編輯 `config/content.json`，找到對應的頁面區塊修改文字內容

#### 更新聯絡資訊
編輯 `config/site-config.json` 中的 `contact` 區塊

## 🎨 設計特色

- **簡約風格**：乾淨的版面設計，易於閱讀
- **淺色系配色**：使用淺色背景，專業感強
- **親切語氣**：文案使用友善、親切的語調
- **CTA 優化**：多處配置 Line 聯絡按鈕，提升轉換率

## 📱 頁面說明

### 首頁 (index.html)
- Hero Section 主視覺
- 精選物件展示
- 服務優勢說明
- 客戶見證

### 物件列表頁 (properties.html)
- 所有可售物件
- 篩選功能（地區、類型、價格）
- 每個物件都有「立即諮詢」CTA

### 物件詳情頁 (property-detail.html)
- 詳細物件資訊
- 多張圖片展示
- 多處 CTA 配置

### 關於我們 (about.html)
- 公司介紹
- 核心價值
- 服務理念

### 服務流程 (services.html)
- 購買流程說明
- 各階段服務內容

### 常見問題 (faq.html)
- 分類式 FAQ
- 可展開/收合設計

### 聯絡我們 (contact.html)
- 多種聯絡方式
- Line QR Code 展示
- 聯絡表單

## 🔧 後台管理

開啟 `admin.html` 可以進行基本的內容管理：

- 網站基本設定
- 頁面內容編輯
- 物件管理
- 聯絡資訊更新

**注意**：目前後台系統為示範版本，實際儲存需要後端 API 支援。建議直接編輯 JSON 配置檔案。

## 📊 CTA 配置策略

網站在各關鍵位置配置了 Line 聯絡 CTA：

1. **首頁**：Hero Section、精選物件、服務優勢後、客戶見證後
2. **物件列表**：每個物件卡片、篩選器下方、頁面底部浮動
3. **物件詳情**：頁面頂部、資訊區塊後、投資分析後、頁面底部
4. **其他頁面**：內容區塊後、頁面底部浮動

所有頁面都有固定的浮動 CTA 按鈕，確保使用者隨時可以聯絡。

## 🌐 部署建議

1. **靜態網站託管**：可使用 GitHub Pages、Netlify、Vercel 等
2. **後端 API**：如需完整後台功能，建議建立後端 API 處理配置檔案儲存
3. **圖片 CDN**：建議使用 CDN 加速圖片載入
4. **SEO 優化**：可加入 meta 標籤、結構化資料等

## 📞 技術支援

如有問題或需要客製化，請參考 `網站規劃.md` 文檔或直接編輯配置檔案。

---

**版本**：1.0.0  
**最後更新**：2024


