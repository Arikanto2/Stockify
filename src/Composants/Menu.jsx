import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
import off from "../assets/turn-off.png";

const Menu = () => {
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm ">
        <div className="navbar-start">
          <div className="flex-none">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border border-primary font-serif"
              >
                <li>
                  <Link to="/accueil">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1V9.75z"
                      />
                    </svg>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/ajout">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 inline-block"
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
                    Ajout
                  </Link>
                </li>
                <li>
                  <Link to="/stock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 inline-block"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 16V8a2 2 0 00-1-1.732l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.732l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 7v10"
                      />
                    </svg>
                    Produits
                  </Link>
                </li>
                <li>
                  <Link to="/bilan">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3v18h18"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17V9m6 8V5"
                      />
                    </svg>
                    Bilan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <Link to="/accueil" className="btn btn-ghost text-lg font-serif ">
              Stockify
            </Link>
          </div>
        </div>

        {/* Dropdown: avatar triggers a dropdown-content menu with the off button */}
        <div className="navbar-end">
          <div className=" dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user} alt="User avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-0 bg-transparent shadow-none mt-2 w-auto"
            >
              <li className="m-0">
                <Link to="/login" className="m-0">
                  <button className="btn btn-ghost btn-circle border">
                    <div className="w-8">
                      <img src={off} alt="Log out" />
                    </div>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
