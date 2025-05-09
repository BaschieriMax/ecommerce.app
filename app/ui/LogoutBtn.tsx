"use client";
import React from "react";
import Button from "../components/Button/Button";
import { signOut } from "../login/action";
import { CiLogout } from "react-icons/ci";

const LogoutBtn = () => {
  return (
    <Button
      type="logout"
      title="Logout"
      icon={<CiLogout className="text-2xl" />}
      onClick={() => signOut()}
    />
  );
};

export default LogoutBtn;
