import UserInfo from "./UserInfo/userinfo";

const Header = () => {
  return (
    <header className="p-5 bg-purple-300 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-white">Digicant</div>
        <nav className="space-x-6">
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            Servizi
          </a>
          <a href="#" className="text-white hover:underline">
            Contatti
          </a>
        </nav>
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
