import { getUsers } from "@/app/services/apiUsers";

export default async function UserInfo() {
  const { users } = await getUsers();
  const user = users[0];
  const [name, surname] = user.full_name.split(" ");
  const firstCharName = name.charAt(0).toUpperCase();
  const firstCharSurname = surname.charAt(0).toUpperCase();

  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-gray-700 text-white font-bold">
      {firstCharName}
      {firstCharSurname}
    </div>
  );
}
