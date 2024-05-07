import Navbar from "../Components/Navbar";
import Acceuil from "../Components/Acceuil";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Us from "../Components/Us";
import Services from "../Components/Services";

function App() {
  return (
    <div className="grid  ">
      <Navbar></Navbar>

      <div className="bg-whitie/90">
        {" "}
        <Acceuil></Acceuil>
      </div>
      <Us></Us>
      <Services></Services>
      <div className="grid gap-5">
        <Products></Products> <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
