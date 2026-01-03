# 🎯 Cursor 中使用本地伺服器指南

## ✅ 好消息：Cursor 可以使用 Live Server！

Cursor 是基於 VS Code 的編輯器，**完全支援 VS Code 的擴充功能**，包括 Live Server！

---

## 📦 在 Cursor 中安裝 Live Server

### 方法 1：透過擴充功能市場（與 VS Code 相同）

1. **開啟 Cursor**
2. **開啟擴充功能面板**：
   - 按 `Ctrl + Shift + X`（Windows/Linux）
   - 或 `Cmd + Shift + X`（Mac）
   - 或點擊左側工具列的「擴充功能」圖示

3. **搜尋 Live Server**：
   - 在搜尋框輸入：`Live Server`
   - 找到由 **Ritwick Dey** 開發的擴充功能

4. **安裝**：
   - 點擊「安裝」按鈕
   - 等待安裝完成

5. **確認**：
   - 安裝後，Cursor 右下角會出現「Go Live」按鈕

---

## 🚀 在 Cursor 中使用 Live Server

### 使用方式（與 VS Code 完全相同）

1. **開啟專案資料夾**：
   - `檔案` → `開啟資料夾`
   - 選擇：`C:\Users\user\Desktop\my-first-web`

2. **開啟 HTML 檔案**：
   - 開啟 `admin.html` 或任何 HTML 檔案

3. **啟動 Live Server**：
   - 點擊 Cursor **右下角的「Go Live」按鈕**
   - 或右鍵點擊 HTML 檔案 → 選擇「Open with Live Server」

4. **瀏覽器會自動開啟**：
   - 網址：`http://127.0.0.1:5500/admin.html`

---

## 🔧 替代方案：使用 Cursor 內建終端機

如果不想安裝擴充功能，也可以使用終端機啟動本地伺服器：

### 方法 1：Python 伺服器

1. **開啟 Cursor 終端機**：
   - 按 `` Ctrl + ` ``（反引號）
   - 或 `終端機` → `新增終端機`

2. **確認在專案資料夾**：
   ```bash
   cd C:\Users\user\Desktop\my-first-web
   ```

3. **啟動 Python 伺服器**：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # 或 Python 2
   python -m SimpleHTTPServer 8000
   ```

4. **在瀏覽器開啟**：
   ```
   http://localhost:8000/admin.html
   ```

### 方法 2：Node.js http-server

1. **安裝 http-server**（如果還沒安裝）：
   ```bash
   npm install -g http-server
   ```

2. **在終端機執行**：
   ```bash
   cd C:\Users\user\Desktop\my-first-web
   http-server
   ```

3. **在瀏覽器開啟**：
   ```
   http://localhost:8080/admin.html
   ```

---

## 💡 Cursor 專屬功能

### 使用 Cursor 的 AI 終端機

Cursor 有 AI 終端機功能，可以直接詢問：

1. **開啟 AI 終端機**：
   - 按 `Ctrl + L` 或點擊 AI 圖示

2. **輸入指令**：
   ```
   幫我啟動一個本地伺服器來預覽網站
   ```

3. **Cursor 會自動執行**：
   - 自動啟動 Python 或 Node.js 伺服器
   - 提供正確的網址

---

## 📋 快速對比

| 功能 | Live Server 擴充功能 | Python 伺服器 | Node.js http-server |
|------|---------------------|--------------|-------------------|
| 安裝難度 | ⭐⭐ 簡單 | ⭐ 很簡單 | ⭐⭐ 需要安裝 |
| 自動重新載入 | ✅ 是 | ❌ 否 | ❌ 否 |
| 一鍵啟動 | ✅ 是 | ❌ 否 | ❌ 否 |
| 需要 Python | ❌ 否 | ✅ 是 | ❌ 否 |
| 需要 Node.js | ❌ 否 | ❌ 否 | ✅ 是 |

**推薦**：使用 Live Server 擴充功能（最方便）

---

## 🎯 推薦工作流程

### 使用 Live Server（最簡單）

1. ✅ 在 Cursor 中安裝 Live Server 擴充功能
2. ✅ 開啟 `admin.html`
3. ✅ 點擊「Go Live」
4. ✅ 開始使用後台系統

### 使用終端機（如果不想安裝擴充功能）

1. ✅ 開啟 Cursor 終端機（`` Ctrl + ` ``）
2. ✅ 執行：`python -m http.server 8000`
3. ✅ 在瀏覽器開啟：`http://localhost:8000/admin.html`

---

## 🔍 驗證是否正常運作

### 檢查清單

- [ ] 使用 `http://localhost:xxxx` 或 `http://127.0.0.1:xxxx` 開啟
- [ ] 不是 `file:///` 路徑
- [ ] 瀏覽器 Console（F12）沒有 CORS 錯誤
- [ ] 後台系統可以正常載入物件列表

### 測試步驟

1. 開啟 `admin.html` 並啟動伺服器
2. 開啟瀏覽器開發者工具（F12）
3. 查看 Console 標籤
4. 應該**沒有** CORS 錯誤
5. 物件列表應該正常顯示

---

## ⚠️ 常見問題

### Q1：Cursor 中找不到 Live Server？

**解決方法**：
- 確認 Cursor 版本是最新的
- 嘗試重新啟動 Cursor
- 確認已開啟 HTML 檔案

### Q2：點擊「Go Live」沒有反應？

**解決方法**：
- 確認已開啟 HTML 檔案
- 檢查終端機是否有錯誤訊息
- 嘗試使用右鍵選單：「Open with Live Server」

### Q3：端口被占用？

**解決方法**：
- 更改 Live Server 的端口設定
- 或使用終端機手動指定其他端口

---

## 🎉 總結

**Cursor 完全可以使用 Live Server！**

- ✅ 安裝方式與 VS Code 完全相同
- ✅ 功能完全一樣
- ✅ 使用方式也一樣
- ✅ 如果不想安裝，也可以使用終端機

**推薦使用 Live Server 擴充功能**，因為：
- 一鍵啟動
- 自動重新載入
- 最方便快捷

---

**需要幫助？** 如果遇到任何問題，請：
1. 檢查 Cursor 是否為最新版本
2. 確認擴充功能是否正確安裝
3. 查看瀏覽器 Console 的錯誤訊息










