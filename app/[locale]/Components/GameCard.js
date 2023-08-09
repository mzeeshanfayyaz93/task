import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const GameCard = () => {
  const t = useTranslations("Index");
  return (
    <div className="relative w-52 group cursor-pointer">
      <Image
        className="rounded-3xl"
        src="/game1.jpg"
        alt="game1"
        width="208"
        height="250"
      />
      <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black to-transparent rounded-b-3xl opacity-1 group-hover:top-1 group-hover:transition-all group-hover:delay-300">
        <h3 className="text-xl text-white font-bold group-hover:text-[#FCCC00]">
          Sweet Bonanza
        </h3>
        <p className="text-sm text-white">Pragmatic Play</p>
      </div>
      <div className="absolute invisible group-hover:visible group-hover:bottom-0 py-4 group-hover:left-4 group-hover:right-0">
        <button className="btn-primary flex items-center justify-center gap-1 rounded-xl bg-[#FF7A00] p-3 mb-2 text-base font-normal uppercase text-black">
          {" "}
          {t("title")}
        </button>
        <button className="btn-primary flex items-center justify-center gap-1 rounded-xl bg-[#FCCC00] p-3 text-base font-normal uppercase text-black">
          {" "}
          {t("playFun")}
        </button>
      </div>
    </div>
  );
};

export default GameCard;
