import { getAllRegimes } from "@/hooks/regimes_alimentaire"
import SaisonsOptions from "./saison/saison-option"
import RegimeOptions from "./regime/regime-option";

async function MenuOptions() {

  const regimes = await getAllRegimes();
  // const types_repas = await getAllTypesDeRepas();

  return (
    <div>
      <SaisonsOptions />
      <RegimeOptions regimes={regimes}/>
      {/* <TypeDeRepas types_repas={types_repas}/> */}
    </div>
  )
}

export default MenuOptions