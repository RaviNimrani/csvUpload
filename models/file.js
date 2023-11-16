const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const FILE_PATH = path.join("/uploads/files");

/** ------------------ IMPORTING MONGOOSE ------------------ **/

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: {
      options: { timeZone: "Asia/Kolkata" },
    },
  }
);

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", FILE_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

fileSchema.statics.uploadedFile = multer({ storage: storage }).single("file");

fileSchema.statics.filePath = FILE_PATH;

/** ------------------ MAKING MODEL ------------------ **/
const files = mongoose.model("files", fileSchema);

/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = files;
