import { useState } from "react";

export default function Hire({ rate }) {
  const [hours, setHours] = useState(0);

  function handleAddHour() {
    setHours((prevHours) => prevHours + 1);
  }

  function handleClear() {
    setHours(0);
  }

  const total = hours * rate;

  return (
    <div className="mt-8 flex items-center justify-between rounded-xl bg-[#FAF3E1] p-6 text-[#222222]">
      <div>
        <h3 className="text-2xl font-bold">Hire Me</h3>
        <p className="mt-1 text-lg">
          Hours: <span className="font-bold text-[#FA8112]">{hours}</span> | Total:{" "}
          <span className="font-bold text-[#FA8112]">₱{total}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#222222] px-6 py-2 text-lg font-bold text-[#FAF3E1]"
          onClick={handleAddHour}
        >
          Add Hour
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-6 py-2 text-lg font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}