import { UsersProps } from "../models/users";
import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");

  return {
    users: data as UsersProps[],
    error,
  };
}

export async function getUserById() {
  // const { data, error } = await supabase.from("users").select("*");
  // return data?.filter((user) => user.id === id);
}
