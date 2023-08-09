import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Banner from "./Components/Banner";
import SelectBoxCard from "./Components/SelectCard";
import Circle from "@/public/Circle";
import GameCard from "./Components/GameCard";
import MatchCard from "./Components/MatchCard";
import Image from "next/image";
import { UserAdd } from "iconsax-react";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="py-1 bg-[#F0C419]">
        <div className="max-w-6xl m-auto flex items-center justify-end gap-5">
          <details className="dropdown ">
            <summary className="bg-[#F0C419] cursor-pointer border-0">Eng</summary>
            <ul className="shadow menu dropdown-content z-[1] bg-white w-24">
              <li className="mb-2">
                <Link
                  href="/"
                  locale="en"
                  className="flex justify-start items-center p-0 hover:bg-inherit focus:bg-inherit active:bg-inherit"
                >
                  <Image src="/Flag.png" alt="Eng" width="30" height="18" /> Eng
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  locale="fi"
                  className="flex justify-start items-center p-0 hover:bg-inherit focus:bg-inherit active:bg-inherit"
                >
                  <Image src="/Flag1.png" alt="Eng" width="30" height="18" />{" "}
                  Fre
                </Link>
              </li>
            </ul>
          </details>
          <button className="bg-white rounded-xl uppercase text-base font-normal text-black p-3">
            Login
          </button>
          <button className=" bg-[#0D353A] text-white rounded-xl font-normal  btn-primary p-3 uppercase text-base flex items-center justify-center gap-1">
            {" "}
            <UserAdd /> Sign Up
          </button>
        </div>
      </div>

      <main className="max-w-6xl m-auto">
      <Banner />
      <SelectBoxCard />

      <div className="gamelist bg-black p-4 flex justify-between items-center rounded-t-3xl rounded-tr-3xl mb-4">
        <h2 className="flex justify-start items-top text-white gap-5 text-xl">
          <Circle className="mt-2" />
          POPULAR SLOTS
        </h2>
        <button className="bg-white rounded-xl uppercase text-base font-normal text-black p-3">
          View All
        </button>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-4">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <GameCard />
          ))}
      </div>

      <div className="gamelist bg-black p-4 flex justify-between items-center rounded-t-3xl rounded-tr-3xl mt-8 mb-4">
        <h2 className="flex justify-start items-top text-white gap-5 text-xl">
          <Circle className="mt-2" />
          POPULAR SLOTS
        </h2>
        <button className="bg-white rounded-xl uppercase text-base font-normal text-black p-3">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <MatchCard />
          ))}
      </div>
    </main>
    </>
  );
}
