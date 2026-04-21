const Produit = require("./Produit");

exports.ajouter = async (req, res) => {
  try {
    await Produit.create(req.body);
    res.status(201).json({ message: "Insertion réussie" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "L'insertion a échouée" });
  }
};

exports.lister = (req, res) => {
  try {
    Produit.findAll().then((produits) => {
      res.json(produits);
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des produits" });
  }
};
exports.modifier = (req, res) => {
  try {
    const id = req.params.id;
    Produit.update(req.body, { where: { id } }).then((updated) => {
      if (updated[0] === 1) {
        res.json({ message: "Mise à jour réussie" });
      } else {
        res.status(404).json({ message: "Produit non trouvé" });
      }
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du produit" });
  }
};
exports.supprimer = (req, res) => {
  try {
    const id = req.params.id;
    Produit.destroy({ where: { id } }).then((deleted) => {
      if (deleted === 1) {
        res.json({ message: "Suppression réussie" });
      } else {
        res.status(404).json({ message: "Produit non trouvé" });
      }
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du produit" });
  }
};
exports.getBilan = (req, res) => {};
