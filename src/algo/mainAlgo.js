// import { CriteresWithIds } from "@/types/criterias.types";

const plats = [
  {
    label: "poulet basquaise",
    cuisson: ["cuit"],
    saison: ['été'],
    regimes_alimentaire: [
      {
        id: 3,
        label: "carnassier"
      }
    ],
    couleurs_plat: [
      {
        label: "jaune",
        id: 1,
      },
      {
        label: "rouge",
        id: 2,
      },
    ],
    type_plat: {
      id: 1,
      label: "plat principal",
    },
  },

  {
    label: "tomate farci",
    cuisson: ["cuit"],
    saison: ['automne'], 
    regimes_alimentaire: [
      {
        id: 3,
        label: "carnassier"
      }
    ],
    couleurs_plat: [
      {
        label: "rouge",
        id: 2,
      },
    ],
    type_plat: {
      id: 1,
      label: "plat principal",
    },
  },

  {
    label: "salade concombre",
    cuisson: ["cru"],
    regimes_alimentaire: [
      {
        id: 1,
        label: "vegan"
      }
    ],
    saison: ['été'], 
    couleurs_plat: [
      {
        label: "vert",
        id: 3,
      },
    ],
    type_plat: {
      id: 0,
      label: "entrée",
    },
  },

  {
    label: "salade endive",
    regimes_alimentaire: [
      {
        id: 1,
        label: "vegan"
      },
      {
        id: 2,
        label: "vegetarien"
      }
    ],
    cuisson: ["cru"],
    saison: ['hiver'], 
    couleurs_plat: [
      {
        label: "jaune",
        id: 1,
      },
    ],
    type_plat: {
      id: 0,
      label: "entrée",
    },
  },
];

const criteres = {
  cuissons: [],
  saisons: ["hiver"],
  type_platId: null,
  ingredientsIds: [],
  repasId: 0,
  couleurs_platIds: [],
  regimes_alimentaireIds: [2, 3],
  saveursIds: [],
  ustensilsIds: [],
};

/**
 * Trouver une recette selon les critères demandés
 */
export default function mainAlgo({ criteres, listPlats }) {
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
        criteres.couleurs_platIds.includes(couleurPlat.id))
    );
  }

  // Filtrer les régimes alimentaires
  if (criteres.regimes_alimentaireIds.length > 0) {
    // Je ne garde que les plats pour lesquels l'un des régimes du plat est inclus dans les critères
    listPlats = listPlats.filter(plat =>
      plat.regimes_alimentaire.some(regime =>
        criteres.regimes_alimentaireIds.includes(regime.id))
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

  return listPlats;
}

console.log(mainAlgo({ criteres, listPlats: plats }));
