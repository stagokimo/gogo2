import FolderZip from 'folder-zip-sync';
import * as fs from 'fs';
import * as path from 'path';

// 壓縮的資料夾路徑 (例如 dist 資料夾)
const folderToZip = path.join(__dirname, 'dist');

// 輸出的 WAR 檔案名
const outputWar = path.join(__dirname, 'output', 'app.war');

// 確保輸出目錄存在
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 使用 folder-zip-sync 壓縮資料夾
const zip = new FolderZip();
zip.zipFolder(folderToZip);

// 儲存壓縮檔，並將其副檔名更改為 .war
zip.writeToFileSync(outputWar);

console.log(`WAR 檔案已成功生成: ${outputWar}`);
