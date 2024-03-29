import "../App.css";
import Navbar from "../Components/Navbar";
import Acceuil from "../Components/Acceuil";
import Footer from "../Components/Footer";
import Products from "../Components/Products";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-20">
        {" "}
        <Acceuil></Acceuil>
      </div>
      <div className="mb-80">
        <Products></Products>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
