"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GeneralContextProvider } from "./ContextStore";
const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <GeneralContextProvider>{children}</GeneralContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Provider;
