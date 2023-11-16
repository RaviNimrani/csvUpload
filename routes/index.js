const express = require("express");
const router = express.Router();
const fileController = require("../controllers/file_controller");
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

router.post("/upload", fileController.upload);

router.get("/delete/:id", fileController.delete);

router.get("/view/:id", fileController.view);

module.exports = router;
