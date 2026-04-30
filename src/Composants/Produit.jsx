// ...existing code...
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const initialProducts = [
  { id: "P001", name: "Stylo Bleu", price: 1.5, qty: 120 },
  { id: "P002", name: "Cahier 96p", price: 2.3, qty: 75 },
  { id: "P003", name: "Gomme", price: 0.5, qty: 250 },
];

const Produit = () => {
  const [products, setProducts] = useState(initialProducts);
  const [query, setQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selected, setSelected] = useState({});

  // edits: { [id]: { name?: string, price?: string, qty?: string } }
  const [edits, setEdits] = useState({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.id.toLowerCase().includes(q) || p.name.toLowerCase().includes(q),
    );
  }, [products, query]);

  const toggleSelect = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelectAll = () => {
    const allSelected = filtered.length > 0 && filtered.every((p) => selected[p.id]);
    if (allSelected) {
      const next = { ...selected };
      filtered.forEach((p) => {
        delete next[p.id];
      });
      setSelected(next);
    } else {
      const next = { ...selected };
      filtered.forEach((p) => {
        next[p.id] = true;
      });
      setSelected(next);
    }
  };

  const handleDeleteSelected = () => {
    const ids = Object.keys(selected).filter((k) => selected[k]);
    if (!ids.length) return;
    if (!confirm(`Supprimer ${ids.length} produit(s) ?`)) return;
    setProducts((prev) => prev.filter((p) => !ids.includes(p.id)));
    setEdits((prev) => {
      const next = { ...prev };
      ids.forEach((id) => delete next[id]);
      return next;
    });
    setSelected({});
    setIsEditing(false);
  };

  const handleCellChange = (id, field, value) => {
    setEdits((prev) => {
      const prevRow = prev[id] || {};
      return { ...prev, [id]: { ...prevRow, [field]: value } };
    });
  };

  const computeModifications = () => {
    const modifications = [];
    for (const id of Object.keys(edits)) {
      const original = products.find((p) => p.id === id);
      if (!original) continue;
      const rowEdit = edits[id];
      const changedFields = {};
      if (rowEdit.name !== undefined && rowEdit.name !== original.name) {
        changedFields.name = rowEdit.name;
      }
      if (rowEdit.price !== undefined) {
        const priceNum = Number(rowEdit.price);
        if (!Number.isNaN(priceNum) && priceNum !== original.price) {
          changedFields.price = priceNum;
        }
      }
      if (rowEdit.qty !== undefined) {
        const qtyNum = Number(rowEdit.qty);
        if (!Number.isNaN(qtyNum) && qtyNum !== original.qty) {
          changedFields.qty = qtyNum;
        }
      }
      if (Object.keys(changedFields).length > 0) {
        modifications.push({ id, ...changedFields });
      }
    }
    return modifications;
  };

  const handleSave = () => {
    const modifications = computeModifications();
    if (modifications.length === 0) {
      alert("Aucune modification à enregistrer");
      setIsEditing(false);
      setEdits({});
      return;
    }

    // Simulation d'envoi au serveur — remplacer par appel API réel si besoin
    console.log("Envoi au serveur (simulation) :", modifications);

    // Appliquer localement pour la simulation
    setProducts((prev) =>
      prev.map((p) => {
        const m = modifications.find((x) => x.id === p.id);
        if (!m) return p;
        return {
          ...p,
          ...(m.name !== undefined ? { name: m.name } : {}),
          ...(m.price !== undefined ? { price: m.price } : {}),
          ...(m.qty !== undefined ? { qty: m.qty } : {}),
        };
      }),
    );

    alert("Modifications envoyées (simulation)");
    setEdits({});
    setIsEditing(false);
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      if (Object.keys(edits).length > 0) {
        if (!confirm("Vous avez des modifications non enregistrées. Les perdre ?")) {
          return;
        }
      }
      setIsEditing(false);
      setEdits({});
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="p-6">
      <p className="text-2xl font-serif mb-4">Liste des produits</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 ">
          <label className="input input-sm flex items-center gap-2 w-64 border-2 border-primary rounded-sm">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow p-0 text-xs"
              placeholder="Rechercher par code ou désignetion"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/ajout" className="btn btn-xs btn-primary flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>

          <button
            onClick={handleToggleEdit}
            className="btn  btn-xs flex items-center gap-2"
            title="Basculer en mode édition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
              />
            </svg>
          </button>

          {isEditing && (
            <>
              <button onClick={handleDeleteSelected} className="btn btn-xs btn-error">
                Supprimer
              </button>
              <button onClick={handleSave} className="btn btn-xs btn-accent">
                Enregistrer
              </button>
            </>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="w-12">
                {isEditing && (
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={toggleSelectAll}
                    checked={
                      filtered.length > 0 && filtered.every((p) => selected[p.id])
                    }
                  />
                )}
              </th>
              <th className="text-base font-bold">Code</th>
              <th className="text-base font-bold">Désignation</th>
              <th className="text-base font-bold">Prix</th>
              <th className="text-base font-bold">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  Aucun produit trouvé
                </td>
              </tr>
            )}

            {filtered.map((p) => {
              const rowEdit = edits[p.id] || {};
              return (
                <tr key={p.id}>
                  <td>
                    {isEditing ? (
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={!!selected[p.id]}
                        onChange={() => toggleSelect(p.id)}
                      />
                    ) : null}
                  </td>
                  <td className="font-mono">{p.id}</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        className="input input-xs w-full"
                        value={rowEdit.name !== undefined ? rowEdit.name : p.name}
                        onChange={(e) => handleCellChange(p.id, "name", e.target.value)}
                      />
                    ) : (
                      p.name
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        step="0.01"
                        className="input input-xs w-24"
                        value={rowEdit.price !== undefined ? rowEdit.price : p.price.toFixed(2)}
                        onChange={(e) => handleCellChange(p.id, "price", e.target.value)}
                      />
                    ) : (
                      `${p.price.toFixed(2)} €`
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        step="1"
                        className="input input-xs w-20"
                        value={rowEdit.qty !== undefined ? rowEdit.qty : String(p.qty)}
                        onChange={(e) => handleCellChange(p.id, "qty", e.target.value)}
                      />
                    ) : (
                      p.qty
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produit;
// ...existing code...