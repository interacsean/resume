import { useCallback, useMemo, useState } from "react";
import useTargetValue from "./useTargetValue";

interface Config {
  initialValue?: string;
  controlledValue?: string;
  onValueChange?: (val: string) => void;
}

function useInputField(config: Config) {
  const { initialValue, controlledValue, onValueChange }: Config = config;

  const [value, setValue] = useState(initialValue || "");
  const usedValue = controlledValue !== undefined ? controlledValue : value;

  const onChange = useTargetValue(
    useCallback(
      (val: string) => {
        onValueChange?.(val);
        if (controlledValue === undefined) {
          setValue(val);
        }
      },
      [onValueChange, controlledValue === undefined]
    )
  );

  return useMemo(
    () => ({
      inputProps: {
        value: usedValue,
        onChange
      },
      setValue
    }),
    [value, onChange]
  );
}

export default useInputField;
