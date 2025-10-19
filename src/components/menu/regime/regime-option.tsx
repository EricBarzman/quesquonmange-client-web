'use client';

import { Regime } from "@/types/recettes.types";
import { useState } from "react"

export default function RegimesOptions({ regimes }: { regimes: Regime[] }) {

  const [chosenRegimes, setChosenRegimes] = useState<Regime[]>([]);

  function handleSelect(e : any) {
    const id = parseInt(e.target.value);
    setChosenRegimes([...chosenRegimes, regimes.find(regime => regime.id === id)!])
  }

  function handleDelete(e: any) {
    const id = parseInt(e.target.value);
    setChosenRegimes(chosenRegimes.filter(regime => regime.id !== id));
  }

  return (
    <div className='flex flex-col'>
      <label className="font-semibold">Le régime</label>
      <div className="flex justify-between items-center">
        <ul>
          {chosenRegimes.map(regime => (
            <li
              key={regime.id}
              value={regime.id!}
              className="p-2 bg-secondary-light hover:bg-secondary-dark cursor-pointer"
              onClick={handleDelete}
            >
              {regime.label}
            </li>
          ))}
        </ul>
        <select onChange={handleSelect}>
          {regimes.map(regime => (
            <option
              key={regime.id}
              disabled={chosenRegimes.includes(regime)}
              value={regime.id!}
            >
              {regime.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}