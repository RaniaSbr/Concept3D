import React from "react";
import { NavLink } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import Propos from "./A_propos";

export default function Products() {
  return (
    <div className="grid gap-10">
      <Propos texte="Catalogue des produits" couleur="#f2f2f2"></Propos>
      <div className="grid gap-14 justify-items-center align-center">
        <div className="grid gap-6 md:flex  w-screen items-center justify-center md:gap-6 lg:gap-8">
          <div
            className="bg-blanc/20 grid rounded-3xl md:h-[80vh]  w-auto  md:w-1/4 py-10 px-3 justify-items-center align-center hover:translate-y-4 transition-transform duration-300 ease-in-out "
            style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.05)" }}
          >
            <img src="../Assets/engre.png" alt="" className="  h-40" />{" "}
            <p className="md:text-[17px] lg:text-md  ">Filaments de base</p>
            <div className="grid m-4 gap-3">
              <div className="grid gap-4">
                <div className="flex gap-1">
                  <p className="text-[16px] ">.</p>
                  <p className=" font-normal text-sm  md:text-[16px] font-sans">
                    PLA (Acide Polylactique){" "}
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="text-[16px] ">.</p>
                  <p className=" font-normal text-sm  md:text-[16px]">
                    PETG (Polyéthylène Téréphtalate Glycolisé ){" "}
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="text-[16px] ">.</p>
                  <p className=" font-normal text-[16px]">Nylon </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-blanc/20 grid rounded-3xl md:h-[80vh]  w-auto  md:w-1/4 py-10 px-3 justify-items-center align-center hover:translate-y-4 transition-transform duration-300 ease-in-out "
            style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.05)" }}
          >
            <img src="../Assets/engre2.png" alt="" className="h-40" />{" "}
            <p className="text-center">Filaments spéciaux </p>
            <div className="grid m-4 gap-3">
              <div className="grid ">
                <div className="flex gap-1">
                  <p className="text-[16px] ">.</p>
                  <p className=" font-normal text-[16px]">
                    PVA+ (Alcool Polyvinylique)
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="text-[16px] ">.</p>
                  <p className=" font-normal text-[16px]">
                    HIPS (Polystyrène Haute Impression)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-blanc/20 grid rounded-3xl md:h-[80vh]  w-auto  md:w-1/4 py-10 px-3 justify-items-center align-center hover:translate-y-4 transition-transform duration-300 ease-in-out "
            style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.05)" }}
          >
            <img src="../Assets/engre3.png" alt="" className="h-40" />{" "}
            <p className="md:text-[17px] text-center w-[90%] lg:text-md  ">
              Filaments chargés et renforcés
            </p>
            <div className="grid-cols-2 grid w-4/5  gap-x-14 justify-items-start align-center ">
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-normal text-[16px]">Liège</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-normal text-[16px]">Bois</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-normal text-[16px]">Cuivre</p>
              </div>{" "}
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-normal text-[16px]">Bronze</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-normal text-[16px]">Aramide</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-normal text-[16px]">Verre</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <NavLink
            to="/Catalogue"
            className="bg-bleu flex items-center justify-center gap-2 py-3 transition-transform duration-300 ease-in-out px-6 font-semibold hover:translate-x-1 hover:translate-y-1 text-white s rounded-3xl"
          >
            {" "}
            Catalogue des materiaux
            <CiLocationArrow1 size={25} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
