import React from "react";
import { NavLink } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";

// Données des produits
const products = [
  {
    id: 1,
    name: "PLA",
    image: "../Assets/engre.png",
    description:
      "Le PLA (Acide Polylactique) est fabriqué à partir de ressources renouvelables telles que le maïs ou la canne à sucre, il est connu pour sa facilité d'impression, sa faible déformation et son absence d'émissions toxiques lors de l'impression.",
    weight: "750 g , 1 kg , 2 kg , 2.3 kg , 4.5 kg , 8 kg.",
    colors: [
      "#000000",
      "#808080",
      "#fcfcfc",
      "#FFFF00",
      "#FFA500",
      "#FF0000",
      "#FF00FF",
      "#800080",
      "#0000FF",
      "#A52A2A",
      "#008000",
      "#D2B48C",
      "#FFD700",
      "#CD7F32",
      "#C0C0C0",
    ],
  },
  {
    id: 2,
    name: "PRO1",
    image: "../Assets/engre2.png",
    description:
      "Le filament PRO1 est une nouvelle génération de filament d'impression 3D conçu pour répondre aux besoins des utilisateurs professionnels. Fabriqué à partir de matériaux de haute qualité, le PRO1 offre une excellente stabilité dimensionnelle, une résistance supérieure et une qualité de surface exceptionnelle.",
    weight: "750 g , 2.5 kg",
    colors: ["#000000", "#C0C0C0"],
  },
  {
    id: 3,
    name: "PLA N",
    image: "../Assets/engre3.png",
    description:
      "Le PLA N est une variante améliorée du PLA standard, spécialement conçue pour répondre à des besoins spécifiques dans le domaine de l'impression 3D.",
    weight: "1 kg , 4.5 kg , 7.5 kg",
    colors: ["#6B6BFF", "#FF6B6B", "#FFD166"],
  },
];

export default function Materiel() {
  return (
    <div className="grid gap-30 justify-items-start align-center mx-10 w-screen">
      {products.map((product) => (
        <div key={product.id} className="grid gap-6">
          <div className="flex items-start w-screen justify-start gap-4 relative">
            <div className="grid w-1/5 justify-items-center align-start">
              <img src={product.image} alt={product.name} className="h-40" />
              <p>{product.name}</p>
            </div>
            <div className="grid w-3/4 gap-3">
              <div className="description">
                <p className="text-lg font-bold">Description:</p>
                <p className="font-light text-[16px]">{product.description}</p>
              </div>
              <div className="poids">
                <p className="text-lg font-bold">Poids de la bobine:</p>
                <p className="font-light text-[16px] ">{product.weight}</p>
              </div>
              <div className="clr">
                <p className="text-lg">Couleurs:</p>{" "}
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="w-[90vw] bg-black border rounded-3xl " />
        </div>
      ))}
    </div>
  );
}
