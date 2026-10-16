import React from "react";

export default function Hire({ rate, onAddRate }) {
  return (
    <div className="px-20 pt-6">
      <div className="flex items-center justify-between rounded-xl bg-[#F5E7C6] p-6">
        <div>
          <h4 className="text-2xl font-bold">Interested in working together?</h4>
          <p className="text-lg">Current rate: ₱{rate}/hr</p>
        </div>
        <button
          className="cursor-pointer rounded-lg bg-[#222222] px-6 py-2 text-lg font-bold text-[#FAF3E1]"
          onClick={onAddRate}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}