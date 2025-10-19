'use server';

import { createClient } from "@/supabase/server";

export const login = async (email: string, password: string) => {

  const supabase = createClient();
  const { data, error } = await (await supabase).auth.signInWithPassword({
    email, password
  })

  if (error) throw error;
  return data;
};

export const signup = async (email: string, password: string) => {
  const supabase = createClient();
  try {
    const { data, error } = await (await supabase).auth.signUp({ email, password })
    if (error) throw error;

    return data;

  } catch (error) {
    console.error(error);
  }
}

export const logout = async () => {
  try {
    const supabase = createClient();
    const { error } = await (await supabase).auth.signOut();

    if (error) throw error;

  } catch (error) {
    console.log("Erreur de logout: ", error);
    throw (error);
  }
};

export const getUser = async () => {
  try {
    const supabase = createClient();
    const { data, error } = await (await supabase).auth.getUser();

    if (error) throw error;
    if (!data || !data?.user) return null

    return data.user;

  } catch (error) {

  }
}