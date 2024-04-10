import React from "react";
import { NavLink } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Products() {
  return (
    <div className="grid gap-30 justify-items-center align-center">
      <div className="flex h-screen w-screen items-center justify-center gap-8">
        <div
          className="bg-blanc/20 grid rounded-3xl h-3/4 w-1/4  justify-items-center align-center hover:translate-y-4 transition-transform duration-300 ease-in-out py-10"
          style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.05)" }}
        >
          <img src="../Assets/engre.png" alt="" className="h-40" />
          <p>Filament de base</p>

          <div className="grid m-4 gap-4">
            <div className="grid ">
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px] font-sans">
                  PLA (Acide Polylactique){" "}
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">
                  PETG (Polyéthylène Téréphtalate Glycolisé){" "}
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Nylon </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-blanc/20 grid rounded-3xl h-3/4 w-1/4  justify-items-center align-center hover:translate-y-4 transition-transform duration-300 ease-in-out py-10"
          style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.05)" }}
        >
          <img src="../Assets/engre2.png" alt="" className="h-40" />
          <p>Filaments spéciaux </p>
          <div className="grid m-4 gap-3">
            <div className="grid ">
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">
                  PVA+ (Alcool Polyvinylique)
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">
                  HIPS (Polystyrène Haute Impression)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-blanc/20 grid rounded-3xl h-3/4 w-1/4  justify-items-center align-center hover:translate-y-4 transition-transform duration-300 ease-in-out py-10"
          style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.05)" }}
        >
          <img src="../Assets/engre3.png" alt="" className="h-40" />{" "}
          <p className="w-3/4 text-center">Filaments chargés et renforcés</p>
          <div className="flex gap-6">
            <div className="grid gap-3">
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Liège</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Bois</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Cuivre</p>
              </div>
            </div>
            <div className="grid gap-3">
              {" "}
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Bronze</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Aramide (Kevlar)</p>
              </div>
              <div className="flex gap-1">
                <p className="text-[16px] ">.</p>
                <p className=" font-extralight text-[16px]">Verre (15%,30%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ctlg">
        <NavLink
          to="/Catalogue"
          className="bg-navy/90 flex items-center justify-center gap-2 py-3 transition-transform duration-300 ease-in-out px-6 font-semibold hover:translate-x-1 hover:translate-y-1 text-white s rounded-3xl"
        >
          {" "}
          Catalogue des materiaux
          <CiLocationArrow1 size={25} />
        </NavLink>
      </div>
    </div>
  );
}
