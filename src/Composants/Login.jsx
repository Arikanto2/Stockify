import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../assets/user.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplacer par logique d'authentification réelle
    console.log("Login:", { username, password });
    // Après connexion simulée, rediriger vers l'accueil
    navigate("/accueil");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md shadow-xl border border-primary">
        <div className="card-body items-center text-center">
          {/* icône utilisateur ronde */}
          <div className="avatar">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-primary/10 flex items-center justify-center">
              <img src={user} alt="User Avatar" />
            </div>
          </div>

          <p className=" text-3xl mt-2 font-serif">Connexion</p>

          <form className="w-[80%] mt-4" onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-serif underline text-sm">
                  Nom d'utilisateur
                </span>
              </label>
              <input
                type="text"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full text-xs font-serif"
                required
              />
            </div>

            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-serif underline text-sm ">
                  Mot de passe
                </span>
              </label>
              <input
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
