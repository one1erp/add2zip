const fs = require('fs');
const AdmZip = require('adm-zip');

let addToZip = (zipFileName, file) => {
    let zip = null;
    if (fs.existsSync(zipFileName)) {
      zip = new AdmZip(zipFileName);
    } else {
      zip = new AdmZip();
    }
    
    zip.addLocalFile(file);
    zip.writeZip(zipFileName);
}

module.exports = addToZip