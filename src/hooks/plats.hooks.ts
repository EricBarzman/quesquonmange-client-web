'use server';

import { createClient } from "@/supabase/client";
import { Criterias } from "@/types/criterias.types";
import { IngredientWithQuantityAndUnity, PlatComplet } from "@/types/recettes.types";

// export const getAllPlats = async (): Promise<PlatSimple[]> => {
//   const supabase = createClient();

//   const { data, error } = await (await supabase)
//     .from('plat')
//     .select('*')

//   if (error) throw new Error(`Error fetching items: ${error}`);
//   return data || [];
// };

export const getPlatById = async (criterias : Criterias) : Promise<PlatComplet> => {
  const supabase = createClient();

  const { data, error } = await (await supabase)
    .from('plat')
    .select(`
      id,
      created_at,
      label,
      slug,
      cuisson,
      saison,
      type_plat (id, label, created_at),
      repas (id, label),
      couleurs_plat:couleur_plat (id, label),
      regimes_alimentaire:regime_alimentaire (id, label),
      ustensils:ustensil (id, label),
      saveurs:saveur (id, label),
      ingredients:plat_has_ingredients!inner(ingredient(id, label), "quantité", "unité")
    `) // rename plat_has_ingredients to ingredients, inner join, do some magic to join ingredient as well
    .in('cuisson', criterias.cuissons)
    .single()

  if (error) throw new Error('Error fetching item: ', error);

  if (data === null || data === undefined)
    throw new Error(`Error fetching item`)

  return data as unknown as PlatComplet;
};