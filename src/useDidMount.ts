import { useEffect, useState } from "react";

/**
 * Hook to check if the component has mounted.
 * @returns {boolean} True if the component has mounted.
 */
export function useDidMount(): boolean {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return didMount;
}
