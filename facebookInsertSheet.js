/**
 * Hàm tạo sheet mới cho dữ liệu Facebook
 * @param {Object} data - Dữ liệu đầu vào
 * @param {string} data.sheetsid - ID của Google Sheet
 * @param {string} data.idfanpage - ID fanpage Facebook
 * @returns {Object} Thông tin sheet đã tạo
 */
function facebookInsertSheet(data) {
  // Mở spreadsheet theo ID
  const spreadsheet = SpreadsheetApp.openById(data.sheetsid);
  
  // Tạo sheet mới với tên theo định dạng Facebook_[idfanpage]
  const newSheet = spreadsheet.insertSheet(`Facebook_${data.idfanpage}`);
  
  // Thiết lập các header cơ bản
  const headers = [
    'Post ID', 
    'Nội dung', 
    'Lượt thích', 
    'Lượt chia sẻ', 
    'Lượt bình luận',
    'Ngày đăng',
    'Link bài viết'
  ];
  
  // Ghi headers vào dòng đầu tiên
  newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Định dạng header
  const headerRange = newSheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#1877f2') // Màu xanh Facebook
            .setFontColor('white')
            .setFontWeight('bold');
  
  // Trả về thông tin sheet
  return {
    sheetName: newSheet.getName(),
    sheetUrl: spreadsheet.getUrl() + "#gid=" + newSheet.getSheetId()
  };
}
