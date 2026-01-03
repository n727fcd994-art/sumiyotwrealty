# 📦 如何安裝 VS Code Live Server 擴充功能

## 🎯 什麼是 Live Server？

Live Server 是一個 VS Code 擴充功能，可以：
- 自動啟動本地網頁伺服器
- 當您修改檔案時自動重新載入瀏覽器
- 解決 CORS 問題，讓網站正常運作

---

## 📋 安裝步驟

### 方法 1：透過 VS Code 擴充功能市場安裝（推薦）

#### 步驟 1：開啟 VS Code

1. 開啟 Visual Studio Code
2. 如果還沒有安裝，請先下載：https://code.visualstudio.com/

#### 步驟 2：開啟擴充功能面板

有兩種方式：

**方式 A：使用快捷鍵**
- 按 `Ctrl + Shift + X`（Windows/Linux）
- 或 `Cmd + Shift + X`（Mac）

**方式 B：使用選單**
- 點擊左側工具列的「擴充功能」圖示（四個方塊的圖案）
- 或點擊選單：`檢視` → `擴充功能`

#### 步驟 3：搜尋 Live Server

1. 在擴充功能面板的搜尋框中輸入：`Live Server`
2. 找到由 **Ritwick Dey** 開發的「Live Server」擴充功能
3. 確認圖示是：一個藍色圓圈中間有「Go Live」字樣

#### 步驟 4：安裝

1. 點擊「Live Server」擴充功能
2. 點擊右側的「**安裝**」按鈕
3. 等待安裝完成（通常幾秒鐘）

#### 步驟 5：確認安裝成功

安裝完成後，您會看到：
- 「安裝」按鈕變成「已安裝」或「設定」
- VS Code 右下角會出現「Go Live」按鈕

---

## 🚀 如何使用 Live Server

### 啟動 Live Server

#### 方法 1：使用右下角按鈕（最簡單）

1. 在 VS Code 中開啟您的專案資料夾
2. 開啟任何 HTML 檔案（例如 `index.html` 或 `admin.html`）
3. 點擊 VS Code **右下角的「Go Live」按鈕**
4. 瀏覽器會自動開啟，網址通常是：`http://127.0.0.1:5500/檔案名稱.html`

#### 方法 2：使用右鍵選單

1. 在檔案總管中，**右鍵點擊**任何 HTML 檔案
2. 選擇「**Open with Live Server**」
3. 瀏覽器會自動開啟

#### 方法 3：使用命令面板

1. 按 `Ctrl + Shift + P`（Windows/Linux）或 `Cmd + Shift + P`（Mac）
2. 輸入：`Live Server: Open with Live Server`
3. 按 Enter

---

## 🛑 停止 Live Server

有兩種方式：

1. **點擊右下角的「Port: 5500」**，選擇「Stop Server」
2. **使用命令面板**：`Ctrl + Shift + P` → 輸入 `Live Server: Stop`

---

## ⚙️ Live Server 設定（可選）

### 更改預設端口

如果 5500 端口被占用，可以更改：

1. 按 `Ctrl + ,` 開啟設定
2. 搜尋「Live Server」
3. 找到「Live Server › Settings: Port」
4. 更改為其他端口（例如：8000）

### 自動開啟瀏覽器

1. 在設定中搜尋「Live Server」
2. 找到「Live Server › Settings: Custom Browser」
3. 選擇您偏好的瀏覽器

---

## 📝 使用範例

### 開啟後台管理系統

1. 在 VS Code 中開啟專案資料夾：`C:\Users\user\Desktop\my-first-web`
2. 開啟 `admin.html`
3. 點擊右下角「Go Live」
4. 瀏覽器會開啟：`http://127.0.0.1:5500/admin.html`
5. 現在可以正常使用後台系統了！

### 開啟網站首頁

1. 開啟 `index.html`
2. 點擊「Go Live」
3. 瀏覽器會開啟：`http://127.0.0.1:5500/index.html`

---

## ✅ 驗證是否正常運作

### 檢查清單

- [ ] Live Server 已安裝
- [ ] 右下角顯示「Go Live」按鈕
- [ ] 點擊後瀏覽器自動開啟
- [ ] 網址是 `http://127.0.0.1:5500/` 開頭
- [ ] 後台系統可以正常載入物件列表
- [ ] 瀏覽器 Console 沒有 CORS 錯誤

### 測試步驟

1. 開啟 `admin.html` 並啟動 Live Server
2. 開啟瀏覽器開發者工具（F12）
3. 查看 Console 標籤
4. 應該**沒有** CORS 錯誤
5. 物件列表應該正常顯示

---

## 🔧 常見問題

### Q1：找不到「Go Live」按鈕？

**解決方法**：
- 確認已安裝 Live Server
- 確認已開啟 HTML 檔案
- 重新啟動 VS Code

### Q2：端口被占用？

**錯誤訊息**：`Port 5500 is in use`

**解決方法**：
1. 更改 Live Server 的端口設定
2. 或關閉占用端口的其他程式

### Q3：瀏覽器沒有自動開啟？

**解決方法**：
1. 檢查 Live Server 設定中的「Custom Browser」選項
2. 或手動在瀏覽器輸入：`http://127.0.0.1:5500/檔案名稱.html`

### Q4：修改檔案後沒有自動重新載入？

**解決方法**：
- 確認檔案已儲存（Ctrl+S）
- 確認 Live Server 正在運行（右下角顯示端口號）
- 檢查瀏覽器是否已開啟對應頁面

---

## 💡 提示

1. **保持 Live Server 運行**：編輯檔案時保持 Live Server 運行，可以即時看到變更
2. **多個檔案**：可以同時開啟多個 HTML 檔案，Live Server 會為每個檔案建立對應的網址
3. **自動重新載入**：修改並儲存 HTML、CSS、JS 檔案後，瀏覽器會自動重新載入
4. **網路存取**：Live Server 只在本地運行，其他人無法透過網路存取

---

## 🎉 完成！

安裝完成後，您就可以：
- ✅ 正常使用後台管理系統
- ✅ 看到新增的物件
- ✅ 即時預覽網站變更
- ✅ 解決所有 CORS 問題

---

**需要幫助？** 如果遇到任何問題，請檢查：
1. VS Code 是否為最新版本
2. 擴充功能是否正確安裝
3. 瀏覽器 Console 的錯誤訊息










