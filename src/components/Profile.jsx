import React from "react";
import StatCard from "./StatCard";

export default function Profile({
  followers,
  rate,
  onFollow,
  onAddRate,
  onReset,
}) {
  return (
    <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
      <div>
        <header>
          <h2 className="text-6xl font-bold">Moniquo Nicole C. Mosende</h2>
          <p className="mt-1 text-2xl text-[#FA8112]">
            @moniquonicole-mosende20
          </p>
          <p className="mt-3 text-2xl">Front-end developer from Cebu City.</p>
        </header>
        <div className="mt-6 flex gap-6">
          <StatCard value={followers} label="Followers" />
          <StatCard value={rate} label="PHP per hour" />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
          onClick={onFollow}
        >
          Follow
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
          onClick={onAddRate}
        >
          Add rate
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}