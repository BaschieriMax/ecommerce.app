import { login, signUp } from "@/app/login/action";
import digiCartLogo from "../../img/DigicartLogo.png";
import Image from "next/image"; // se usi Next.js

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Benvenuto</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4 pt-2">
              <button
                formAction={login}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Log in
              </button>
              <button
                formAction={signUp}
                className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-black">
        <Image
          width={250}
          priority
          src={digiCartLogo}
          alt="Digicart Logo"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
