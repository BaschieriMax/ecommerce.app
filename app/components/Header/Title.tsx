"use client";

import Image from "next/image";
import digiCartLogo from "../../img/DigicartLogo.png";
import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  const redirectToHomepage = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center space-x-2 text-2xl font-bold text-white">
      <Image
        width={125}
        priority
        src={digiCartLogo}
        alt="Digicart Logo"
        className="cursor-pointer"
        onClick={redirectToHomepage}
      />
    </div>
  );
};

export default Title;
