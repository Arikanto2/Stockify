import React, { useState } from "react";

const Ajout = () => {
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: remplacer par appel API / validation avancée
    console.log("Nouvel produit:", { designation, prix, quantite });
    setDesignation("");
    setPrix("");
    setQuantite("");
  };

  return (
    <div className="my-20 flex items-center justify-center p-4">
      <div className="card w-full max-w-lg shadow-lg border border-primary">
        <div className="card-body">
          <h2 className=" text-2xl font-serif">Ajouter un produit</h2>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Désignation</span>
              </label>
              <input
                type="text"
                placeholder="Nom du produit"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="input input-bordered w-full text-xs font-serif "
                required
                aria-label="designation"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Prix (Ar)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="0"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  className="input input-bordered w-full"
                  required
                  aria-label="prix"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantité</span>
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="0"
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                  className="input input-bordered w-full"
                  required
                  aria-label="quantite"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ajout;
