import { UsersProps } from "../models/users";
import supabase from "./supabase";

export async function getAuthenticatedUser() {
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  return { data, error };
}

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");

  return {
    users: data as UsersProps[],
    error,
  };
}

export async function getUserByEmail(email: string) {
  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return { user: users, error };
}
