# DATSheetsN8N - Google Apps Script Project

Dự án Google Apps Script để tạo và quản lý Google Sheets tự động thông qua API.

## Chức năng chính
- Xử lý POST request với token bảo mật
- Tạo sheet mới trong Google Sheets dựa trên thông tin từ request
- Trả về response JSON với thông tin sheet được tạo

## Cấu trúc dự án
- `appsscript.json`: File cấu hình dự án
- `doPost.js`: Code chính xử lý request

## Cài đặt
1. Clone dự án bằng clasp:
```bash
clasp clone 1iyqeCepbYLlgTlbaAz1RnSmuyE321p2RBFJ4YlKKa9IIXlyhXh_lm2ly
```
2. Chỉnh sửa file `doPost.js` nếu cần
3. Deploy lại script sau khi thay đổi