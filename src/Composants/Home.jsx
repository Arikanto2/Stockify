import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col my-40 items-center justify-center ">
      <p className="text-6xl font-mono mb-4">Bienvenue sur Stockify</p>
      <p className="text-lg font-serif text-center max-w-md">
        Gérez facilement votre stock avec notre application intuitive.
      </p>
      <div className="mt-6 flex gap-6">
        <Link
          to="/ajout"
          className="group w-48 p-4 rounded-lg bg-base-100 border border-transparent hover:border-primary hover:shadow-lg transition flex flex-col items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
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
          <span className="font-semibold">Ajouter un produit</span>
          <span className="text-sm text-muted">Créer un nouvel article</span>
        </Link>

        <Link
          to="/stock"
          className="group w-48 p-4 rounded-lg bg-base-100 border border-transparent hover:border-primary hover:shadow-lg transition flex flex-col items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7h18M3 12h18M3 17h18"
            />
          </svg>
          <span className="font-semibold">Voir le stock</span>
          <span className="text-sm text-muted">Consulter les articles</span>
        </Link>

        <Link
          to="/bilan"
          className="group w-48 p-4 rounded-lg bg-base-100 border border-transparent hover:border-primary hover:shadow-lg transition flex flex-col items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 11V3m0 8a4 4 0 100 8 4 4 0 000-8zM21 21H3"
            />
          </svg>
          <span className="font-semibold">Statistiques</span>
          <span className="text-sm text-muted">Voir les bilans</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
