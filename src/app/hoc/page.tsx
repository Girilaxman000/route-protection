"use client";
import { withAuth } from "@/components/withAuth";
import React from "react";

const HOC = () => {
  return <div>HOC</div>;
};

export default withAuth(HOC);
