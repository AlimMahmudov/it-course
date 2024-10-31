"use client";
import LayoutSlice from "@/components/layout/LayoutSlice";
import ReduxProvider from "@/provider/ReduxProvider";
import { SessionProvider } from "@/provider/SessionProvider";
import React, { FC, ReactNode } from "react";

interface LayoutClientType {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        <LayoutSlice>{children}</LayoutSlice>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default LayoutClient;
