import { CriteresWithIds } from "@/types/criterias.types";
import { PlatComplet } from "@/types/recettes.types";


/**
 * Trouver les recettes correspondant aux critères demandés
 */
export default function trouverPlatsSelonCriteres({
  criteres,
  listPlats
}: {
  criteres: CriteresWithIds,
  listPlats: PlatComplet[]
}) {


  // Filtre les plats selon les critères de cuisson
  if (criteres.cuissons.length > 0) {
    listPlats = listPlats.filter((plat) =>
      criteres.cuissons.some((critCuisson) => plat.cuisson.includes(critCuisson))
    )
  };

  // Filtre les plats selon la ou les couleurs recherchées
  if (criteres.couleurs_platIds.length > 0) {
    // Je ne garde que les plats pour lesquels l'une des couleurs du plat est inclus dans les critères
    listPlats = listPlats.filter(plat =>
      plat.couleurs_plat.some(couleurPlat =>
        criteres.couleurs_platIds.includes(couleurPlat.id!))
    );
  }

  // Filtrer les régimes alimentaires
  if (criteres.regimes_alimentaireIds.length > 0) {
    // Je ne garde que les plats pour lesquels l'un des régimes du plat est inclus dans les critères
    listPlats = listPlats.filter(plat =>
      plat.regimes_alimentaire.some(regime =>
        criteres.regimes_alimentaireIds.includes(regime.id!))
    );
  }

  // Filtrer les saisons
  if (criteres.saisons.length > 0) {
    // Je ne garde que les plats pour lesquels l'une des couleurs du plat est inclus dans les critères
    listPlats = listPlats.filter(plat =>
      plat.saison.some(season =>
        criteres.saisons.includes(season))
    );
  }

  // Filtrer le type de plat (entrée, dessert etc)
  if (criteres.type_platId !== null) {
    // Je ne garde que les plats dont l'id du type de plat est le même que celui des critères
    listPlats = listPlats.filter(
      (plat) => plat.type_plat.id === criteres.type_platId
    );
  }

  // Tout au dessus est bon

  return listPlats;

}