import { useRef } from "react";

/**
 * Executes a function once on the client side.
 * @param fn - The function to execute.
 */
export function useClientOnce(fn: () => void): void {
  const canCall = useRef<boolean>(true);

  if (typeof window !== "undefined" && canCall.current) {
    canCall.current = false;
    fn();
  }
}
