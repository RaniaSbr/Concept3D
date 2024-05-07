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
    colors: [
      "#FFFFFF",
      "#000000",
      "#FFFF00",
      "#FF0000",
      "#6699CC",
      "#FFA500",
      "#008000",
    ],
  },
  {
    id: 4,
    name: "PETG",
    image: "../Assets/engre3.png",
    description:
      "Le PETG est le copolymère le plus connu et le plus utilisé dans le monde de l'impression 3D. Son apparition est due à la combinaison du PET et du glycol, ce qui améliore les propriétés intéressantes du PET avec un processus de glycol.",
    weight: "1 kg , 4.54 kg ",
    colors: ["#000000", "#FF0000"],
    mat: ["+ naturel."],
  },
  {
    id: 5,
    name: "Nylon",
    image: "../Assets/engre2.png",
    description:
      "Le nylon est un polymère synthétique appartenant à la famille des polyamides. Il est largement utilisé dans de nombreux domaines en raison de ses excellentes propriétés mécaniques, de sa résistance à l'usure, de sa durabilité et de sa polyvalence. ",
    weight: "1 kg , 4.54 kg ",
    colors: ["#000000", "#FF0000"],
    mat: ["+ naturel."],
  },
  {
    id: 6,
    name: "ASA",
    image: "../Assets/engre.png",
    description:
      "L'acrylonitrile styrène acrylate (ASA) est un terpolymère opaque thermoplastique2 qui fait partie de la vaste famille des polymères styréniques. L’ASA est un copolymère styrène-acrylonitrile (SAN) modifié avec des élastomères acryliques greffés.",
    weight: "1 kg , 4.5 kg , 7.5 kg",
    colors: ["#000000", "#FFFFFF", "#808080", "#0000FF", "#FF0000"],
    mat: ["+ naturel."],
  },
  {
    id: 7,
    name: "FLEXIFIL ,FLEX 45, FELX 60",
    image: "../Assets/engre2.png",
    description:
      " FLEXIFIL est un filament flexible conçu pour l'impression 3D. Il est fabriqué à partir de matériaux élastomères qui lui confèrent une certaine souplesse et une résistance à la déformation. Ce filament est idéal pour créer des pièces nécessitant une certaine flexibilité, telles que des joints, des soufflets, des protège-câbles et des pièces d'amortissement.",
    weight: "500 kg , 1 kg , 2.3 kg ",
    colors: ["#000000", "#FFFFFF", "#808080", "#0000FF", "#FF0000"],
    mat: ["+ naturel."],
  },
  {
    id: 8,
    name: " PVA +",
    image: "../Assets/engre2.png",
    description:
      "Le PVA, ou alcool polyvinylique, est un matériau largement utilisé dans l’industrie de l’impression 3D en raison de sa capacité à se dissoudre dans l’eau. En particulier, il est utilisé pour la création de supports d’impression lors de l’utilisation de machines à double extrudeur FDM.",
    weight: "300 kg , 2.3 kg ",
    colors: [
      "#FFFFFF",
      "#0000FF",
      "#FF0000",
      "#000000",
      "#6495ED",
      "#008000",
      "#FFA500",
      "#FFC0CB",
      "#DC143C",
      "#C0C0C0",
      "#FFFF00",
    ],
    mat: ["Naturel."],
  },
  {
    id: 9,
    name: "HIPS",
    image: "../Assets/engre.png",
    description:
      "Le polystyrène dit Hips, pour High Impact PolyStyrene, est un polystyrène spécifique en raison de son opacité et surtout, de sa résistance aux chocs. On l'appelle d'ailleurs également le polystyrène-choc (SB). Le styrène est l'élément de base de la fabrication du polystyrène",
    weight: "750 kg , 4.5 kg , 8 kg ",
    colors: ["#FFFFFF"],
  },
  {
    id: 10,
    name: "Filaments chargés de liège / bois ",
    image: "../Assets/engre2.png",
    description:
      " FLEXIFIL est un filament flexible conçu pour l'impression 3D. Il est fabriqué à partir de matériaux élastomères qui lui confèrent une certaine souplesse et une résistance à la déformation. Ce filament est idéal pour créer des pièces nécessitant une certaine flexibilité, telles que des joints, des soufflets, des protège-câbles et des pièces d'amortissement.",
    weight: "500 kg , 2.3 kg ",
    colors: [],
    mat: ["foncé ,", "clair ,", "ébène ,", "pin , ", "cèdre ", " et olive"],
  },
  {
    id: 11,
    name: "PLA chargé cuivre/ bronze",
    image: "../Assets/engre3.png",
    description:
      " FLEXIFIL est un filament flexible conçu pour l'impression 3D. Il est fabriqué à partir de matériaux élastomères qui lui confèrent une certaine souplesse et une résistance à la déformation. Ce filament est idéal pour créer des pièces nécessitant une certaine flexibilité, telles que des joints, des soufflets, des protège-câbles et des pièces d'amortissement.",
    weight: "750 kg , 2.3 kg ",
    colors: [],
    mat: ["cuivre et", "bronze "],
  },
  {
    id: 12,
    name: "Filament chargé de carbonne",
    image: "../Assets/engre2.png",
    description:
      " FLEXIFIL est un filament flexible conçu pour l'impression 3D. Il est fabriqué à partir de matériaux élastomères qui lui confèrent une certaine souplesse et une résistance à la déformation. Ce filament est idéal pour créer des pièces nécessitant une certaine flexibilité, telles que des joints, des soufflets, des protège-câbles et des pièces d'amortissement.",
    weight: "500 kg , 2.3 kg ",
    colors: ["#000000"],
  },
  {
    id: 13,
    name: "Filament aramide kevlar",
    image: "../Assets/engre2.png",
    description:
      "L'ABS renforcé de fibres d'aramide (Kevlar®) offre des performances améliorées pour les pièces imprimées, en évitant les risques d'obturation de la buse et en réduisant considérablement l'abrasion du matériau d'impression.",
    weight: "900 kg , 2kg ",
    colors: [],
    mat: ["Neutre"],
  },
  {
    id: 14,
    name: "Le filament fibre de verre 15%",
    image: "../Assets/engre2.png",
    description:
      "Le filament renforcé de fibre de verre à 15% est conçu pour offrir une résistance et une rigidité accrues aux pièces imprimées en 3D. En incorporant 15% de fibre de verre dans le matériau, il renforce la structure de la pièce tout en conservant une certaine souplesse pour une variété d'applications.",
    weight: "900 kg , 2kg ",
    colors: [],
    mat: ["Neutre"],
  },
  {
    id: 15,
    name: "Le filament fibre de verre 30%",
    image: "../Assets/engre2.png",
    description:
      "Le filament renforcé de fibre de verre à 30% est spécialement formulé pour offrir une résistance exceptionnelle et une rigidité supérieure aux pièces imprimées en 3D. Avec une concentration plus élevée de 30% de fibre de verre, ce matériau garantit une plus grande robustesse et une meilleure performance mécanique, idéal pour les applications nécessitant une résistance accrue.",
    weight: "900 kg , 2kg ",
    colors: [],
    mat: ["Neutre"],
  },
];

export default function Materiel() {
  return (
    <div className="grid justify-items-center align-center  w-screen">
      <div className="md:grid  hidden gap-6 justify-items-center  align-center mb-10 w-screen">
        {" "}
        <div className="flex items-center gap-1 h-auto">
          {" "}
          <p className="text-2xl">Catalogue des matériaux </p>
        </div>
        <div className="flex text-center  text-[20px] w-4/5 gap-0">
          {" "}
          <span className="font-bold text-gray-700"> Concept3D</span>
          <p className="font-normal text-gray-700/80">
            propose une large gamme de matériaux, comprenant des plastiques, des
            métaux, ainsi qu'une variété de finitions et de couleurs pour
            chacun.
          </p>
        </div>
      </div>
      <hr className="w-[90vw] bg-black border hidden md:flex rounded-3xl hr-center" />

      {products.map((product) => (
        <div
          key={product.id}
          className="grid px-4   justify-items-center align-center"
        >
          <div className="grid md:flex   items-center w-screen md:justify-start justify-center gap-6 py-5 ">
            <div className="grid md:w-1/5 justify-items-center align-center  md:align-start ">
              {/* <img src={product.image} alt={product.name} className="h-40" /> */}
              <p className="text-center pl-4 text-2xl">{product.name}</p>
            </div>
            <div className="grid w-[90vw] md:w-[65vw] gap-3  justify-items-start align-center">
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
                <div className="flex gap-2 ">
                  {product.colors.map((color, index) => (
                    <div>
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-black/20 border"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  ))}
                  <p className=" font-extralight text-sm">{product.mat}</p>
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
