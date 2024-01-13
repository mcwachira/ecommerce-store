import React from "react";
import { Billboard as BillboardType } from "../types";

interface BillboardProps {
  data: BillboardType;
}

const BillBoard = ({ data }: BillboardProps) => {
  return (
    <div
      className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
    >
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {data.label}
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
