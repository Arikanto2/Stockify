const express = require("express");
const router = express.Router();
const produitCtrl = require("./produitsController");

router.post("/", produitCtrl.ajouter);
router.get("/", produitCtrl.lister);
router.put("/:id", produitCtrl.modifier);
router.delete("/:id", produitCtrl.supprimer);
router.get("/bilan", produitCtrl.getBilan);

module.exports = router;
