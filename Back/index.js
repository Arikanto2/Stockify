const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const produitRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/produits", produitRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.error("❌ Erreur de connexion :", err);
  });
