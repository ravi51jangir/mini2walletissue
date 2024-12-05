import { useEffect, ReactNode } from "react";
import { SDKProvider, useLaunchParams } from "@telegram-apps/sdk-react";
import { useDidMount } from "./useDidMount";
import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorPage } from "./ErrorPage";
import { useTelegramMock } from "./useTelegramMock";

interface TelegramProviderProps {
  children: ReactNode;
}

export function TelegramProvider({ children }: TelegramProviderProps) {
  const didMount = useDidMount();
  const launchParams = useLaunchParams();
  const debug = launchParams?.startParam === "debug";

  if (process.env.NODE_ENV === "development") {
    useTelegramMock();
  }

  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return didMount ? (
    <SDKProvider acceptCustomStyles debug={debug}>
      <ErrorBoundary fallback={ErrorPage}>{children}</ErrorBoundary>
    </SDKProvider>
  ) : (
    <div>Loading...</div>
  );
}
