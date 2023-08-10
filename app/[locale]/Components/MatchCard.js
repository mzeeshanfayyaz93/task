import FootBall from "@/public/FootBall";
import React from "react";
import { Add } from "iconsax-react";

const MatchCard = () => {
  return (
    <div className="md:flex justify-between items-center gap-2 bg-slate-200 rounded-3xl p-5 mb-5">
      <div className="title-setting flex justify-start item-center gap-2  mb-2">
        <FootBall />
        <h3 className="text-sm font-light text-black truncate line-clamp-2">
          Argentina Liga Professional{" "}
        </h3>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm pr-12">Barracas Central</h2>
        <p>VS</p>
        <h2 className="text-sm pl-12">Barracas Central</h2>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="bg-[#FC0] px-5 py-3 rounded-2xl block text-center w-24 h-16">
          <h3 className="text-sm text-black">1</h3>
          <h3 className="text-sm text-black">5.3</h3>
        </div>
        <div className="bg-black text-white px-5 py-3 rounded-2xl block text-center  w-24 h-16">
          <h3 className="text-sm">draw</h3>
          <h3 className="text-smk">1.7</h3>
        </div>
        <div className="bg-black text-white px-5 py-3 rounded-2xl block text-center  w-24 h-16">
          <h3 className="text-sm">1</h3>
          <h3 className="text-sm">3.3</h3>
        </div>
        <div className="bg-black text-white px-5 py-3 rounded-2xl text-center  w-24 h-16">
          <h3 className="text-sm flex justify-center">
            <Add />
          </h3>
          <h3 className="text-sm">5.3</h3>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
