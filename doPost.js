const SECRET_TOKEN = "FB_2024!Secure#Token";

function doPost(e) {
  try {
    // Kiểm tra request body
    if (!e.postData || !e.postData.contents) {
      throw new Error("Request body không hợp lệ");
    }

    // Parse JSON từ body
    const requestBody = JSON.parse(e.postData.contents);
    const { action, data, token: receivedToken } = requestBody;
    
    // Import hàm từ file riêng
    const { facebookInsertSheet } = require('./facebookInsertSheet');

    // Validate token
    if (receivedToken !== SECRET_TOKEN) {
      throw new Error("Token không hợp lệ");
    }

    // Validate required fields
    if (!requestBody.data || !requestBody.data.sheetsid || !requestBody.data.idfanpage) {
        throw new Error("Thiếu data.sheetsid hoặc data.idfanpage");
    }

    // Xử lý action
    let result;
    switch(action) {
      case 'createHeadersWebsite':
        result = createHeadersWebsite(data);
        break;
      case 'facebookInsertSheet':
        result = facebookInsertSheet(data);
        break;
      case 'websiteInsertSheets':
        result = websiteInsertSheets(data);
        break;
      default:
        throw new Error('Action không hợp lệ');
    }

    // Response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        sheetName: result.sheetName,
        sheetUrl: result.sheetUrl
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


function websiteInsertSheets(data) {
  const spreadsheet = SpreadsheetApp.openById(data.sheetsid);
  const newSheet = spreadsheet.insertSheet(`Website_${data.idfanpage}`);
  return {
    sheetName: newSheet.getName(),
    sheetUrl: spreadsheet.getUrl() + "#gid=" + newSheet.getSheetId()
  };
}
