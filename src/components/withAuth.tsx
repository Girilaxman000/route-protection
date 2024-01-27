"use client";
import { useEffect } from "react";
import { isUserAuthenticated } from "../session";
import { redirect } from "next/navigation";

export const withAuth = (WrappedComponent: any) => {
  return function WithAuth(props: any) {
    const session = isUserAuthenticated;
    useEffect(() => {
      if (!session) {
        redirect("/");
      }
    }, []);

    if (!session) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};
