const SECRET_TOKEN = "FB_2024!Secure#Token";

function doPost(e) {
  try {
    // Kiểm tra request body
    if (!e.postData || !e.postData.contents) {
      throw new Error("Request body không hợp lệ");
    }

    // Parse JSON từ body
    const requestBody = JSON.parse(e.postData.contents);
    const receivedToken = requestBody.token || e.parameter.token;

    // Validate token
    if (receivedToken !== SECRET_TOKEN) {
      throw new Error("Token không hợp lệ");
    }

    // Validate required fields
    if (!requestBody.sheetsid || !requestBody.idfanpage) {
      throw new Error("Thiếu sheetsid hoặc idfanpage");
    }

    // Tạo sheet
    const sheetId = requestBody.sheetsid;
    const sheetName = `FacebookPost_${requestBody.idfanpage}`;
    const spreadsheet = SpreadsheetApp.openById(sheetId);
    const newSheet = spreadsheet.insertSheet(sheetName);

    // Response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        sheetName: sheetName,
        sheetUrl: spreadsheet.getUrl() + "#gid=" + newSheet.getSheetId()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Lỗi: " + error.message
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}