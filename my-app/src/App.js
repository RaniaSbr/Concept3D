import Formulaire from "./Pages/formulaire";
import Catalogue from "./Pages/Catalogue.js";
import Acceuil from "./Pages/Accueil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />}></Route>
        <Route path="/Devis" element={<Formulaire />}></Route>
        <Route path="/Catalogue" element={<Catalogue />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
