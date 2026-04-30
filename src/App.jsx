import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./Composants/Login.jsx";
import Home from "./Composants/Home.jsx";
import Menu from "./Composants/Menu.jsx";
import Ajout from "./Composants/Ajout.jsx";
import Produit from "./Composants/Produit.jsx";
import ThemeCombo from "./Composants/ThemeCombo.jsx";
import Bilan from "./Composants/Bilan.jsx";

const AppLayout = () => (
  <>
    <Menu />
    <Outlet />
  </>
);

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Routes>
          {/* public routes (no Menu) */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* protected/app routes with Menu */}
          <Route element={<AppLayout />}>
            <Route path="/ajout" element={<Ajout />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/stock" element={<Produit />} />
            <Route path="/bilan" element={<Bilan />} />
          </Route>
        </Routes>

        <div className="fixed bottom-4 right-4 z-50">
          <ThemeCombo />
        </div>
      </div>
    </>
  );
}

export default App;
