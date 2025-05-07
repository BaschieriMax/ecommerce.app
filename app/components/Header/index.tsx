import UserInfo from "./UserInfo/userinfo";

const Header = () => {
  return (
    <header className="p-4 bg-gray-600 shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Digicant</div>
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
