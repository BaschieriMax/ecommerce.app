import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");
  console.log("Data:", data);

  return {
    users: data,
    error,
  };
}
