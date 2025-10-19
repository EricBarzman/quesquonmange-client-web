'use client';

import { SAISONS } from "@/constants/saisons"
import { Saison } from "@/types/recettes.types";
import { useState } from "react"

export default function SaisonsOptions() {

  const [chosenSaisons, setChosenSaisons] = useState<Saison[]>([]);

  function handleSelect(e : any) {
    setChosenSaisons([...chosenSaisons, e.target.value])
  }

  function handleDelete(e: any) {
    console.log(e.target.value);
    setChosenSaisons(chosenSaisons.filter(saison => saison !== e.target.value));
  }

  return (
    <div className='flex flex-col'>
      <label className="font-semibold">La (ou les) saisons</label>
      <div className="flex justify-between items-center">
        <ul>
          {chosenSaisons.map(saison => (
            <button
              key={saison}
              value={saison}
              className="p-2 bg-secondary-light hover:bg-secondary-dark cursor-pointer"
              onClick={handleDelete}
            >
              {saison}
            </button>
          ))}
        </ul>
        <select onChange={handleSelect}>
          {SAISONS.map(saison => (
            <option
              key={saison}
              disabled={chosenSaisons.includes(saison)}
              value={saison}
            >
              {saison}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}