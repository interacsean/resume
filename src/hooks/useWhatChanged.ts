import { useEffect, useRef } from "react";

const useWhatChanged = (deps: Record<string, any>) => {
  const refs = useRef(deps);
  useEffect(() => {
    Object.keys(deps).map((depName) => {
      if (deps[depName] !== refs.current[depName]) {
        console.warn("What changed: ", depName, {
          old: refs.current[depName],
          new: deps[depName]
        });
        refs.current[depName] = deps[depName];
      }
    });
  }, Object.values(deps));
};

export default useWhatChanged;
