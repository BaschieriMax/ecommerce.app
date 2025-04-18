import { getUsers } from "@/app/services/apiUsers";

export default async function UserInfo() {
  const { users } = await getUsers();
  return <div>{users?.map((item) => item.fullName)}</div>;
}
