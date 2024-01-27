import { isUserAuthenticated } from "@/session";
import { redirect } from "next/navigation";
import React from "react";

const ServerSide = () => {
  const session = isUserAuthenticated;
  if (!session) {
    redirect("/");
  }

  return <div>ServerSide</div>;
};

export default ServerSide;
