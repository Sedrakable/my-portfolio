const fs = require("fs");
const path = require("path");

function renameFilesInDirectory(dir, oldExt, newExt) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const fileExt = path.extname(file);

    if (fs.statSync(filePath).isDirectory()) {
      renameFilesInDirectory(filePath, oldExt, newExt);
    } else if (fileExt === oldExt) {
      fs.renameSync(
        filePath,
        path.join(dir, `${path.basename(file, oldExt)}${newExt}`)
      );
    }
  });
}

// Call the function with the directory, old extension, and new extension
renameFilesInDirectory("./src", ".js", ".tsx");
