import LoginBtn from "@/app/ui/LoginBtn";
import Title from "./Title";
import { getAuthenticatedUser } from "@/app/services/apiUsers";

export default async function Header() {
  const { data } = await getAuthenticatedUser();
  console.log(data);
  return (
    <header className="p-4 bg-black shadow-md">
      <div className="flex items-center justify-between">
        <Title />
        {data.user?.aud === "authenticated" && <LoginBtn />}
      </div>
    </header>
  );
}
