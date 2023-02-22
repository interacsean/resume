import { useCallback } from "react";

type E = {
  target: {
    value: string;
  };
};

function useTargetValue<R>(handler: (val: string) => R) {
  return useCallback((e: E) => handler(e.target.value), [handler]);
}

export default useTargetValue;
