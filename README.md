# DATSheetsN8N - Google Apps Script Project

Dự án Google Apps Script để tự động tạo và quản lý Google Sheets thông qua API.

## 📌 Chức năng chính
- Xử lý POST request với token bảo mật
- Tạo sheet mới trong Google Sheets dựa trên thông tin từ request
- Trả về response JSON với thông tin sheet được tạo
- Xác thực request bằng secret token
- Xử lý lỗi và trả về thông báo chi tiết

## 🏗️ Cấu trúc dự án
- `.clasp.json`: Cấu hình Google Apps Script project
- `appsscript.json`: Cấu hình runtime và webapp
- `doPost.js`: Logic chính xử lý request

## 🔐 Yêu cầu đầu vào
Request phải chứa:
1. Token bảo mật (trùng với SECRET_TOKEN trong code)
2. ID của Google Sheet đích (sheetsid)
3. ID fanpage Facebook (idfanpage)

## 📤 Ví dụ Request
```json
{
  "token": "FB_2024!Secure#Token",
  "sheetsid": "1aBcDeFgHiJkLmNoPqRsTuVwXyZ",
  "idfanpage": "123456789"
}
```

## 📥 Ví dụ Response (Thành công)
```json
{
  "success": true,
  "sheetName": "FacebookPost_123456789",
  "sheetUrl": "https://docs.google.com/spreadsheets/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ#gid=123456"
}
```

## ❌ Ví dụ Response (Lỗi)
```json
{
  "success": false,
  "message": "Lỗi: Token không hợp lệ"
}
```

## 🛠️ Cài đặt & Triển khai
1. Clone dự án bằng clasp:
```bash
clasp clone 1iyqeCepbYLlgTlbaAz1RnSmuyE321p2RBFJ4YlKKa9IIXlyhXh_lm2ly
```

2. Chỉnh sửa file `doPost.js` nếu cần:
- Thay đổi SECRET_TOKEN
- Điều chỉnh logic xử lý

3. Deploy lại script sau khi thay đổi:
```bash
clasp push
clasp deploy
```

## ⚠️ Lưu ý
- Không chia sẻ SECRET_TOKEN trong code
- Đảm bảo Google Sheet đích đã được chia sẻ quyền chỉnh sửa
