import { useTranslations } from "next-intl";
import React from "react";

const SelectBoxCard = () => {
    const t = useTranslations("Index")
  return (
    <div className="my-4 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      <div className="my-4 flex h-80 items-center justify-start rounded-3xl bg-black bg-cover px-5 md:px-12 bg-[url('/option1.png')]">
        <div>
          <h1 className="mb-2 text-6xl font-normal text-[#FCCC00]">{t("bSport")}</h1>
          <h2 className="mb-4 text-6xl font-normal text-white">{t("sport")}</h2>

          <button className="btn-primary flex items-center justify-center gap-1 rounded-xl bg-[#FCCC00] p-3 text-base font-normal uppercase text-black">
            {" "}
            {t("register")}
          </button>
        </div>
      </div>
      <div className="my-4 flex h-80 items-center justify-start rounded-3xl bg-black bg-cover px-5 md:px-12 bg-[url('/option2.png')]">
        <div>
          <h1 className="mb-2 text-6xl font-normal text-[#FCCC00]">{t("pCurenct")}</h1>
          <h2 className="mb-4 text-6xl font-normal text-white">{t("curenct")}</h2>

          <button className="btn-primary flex items-center justify-center gap-1 rounded-xl bg-[#FCCC00] p-3 text-base font-normal uppercase text-black">
            {" "}
            {t("register")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectBoxCard;
