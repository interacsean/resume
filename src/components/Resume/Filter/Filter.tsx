import { useCallback, useState, memo, useEffect } from "react";
import useInputField from "hooks/useInputField";
import useDebounce from "hooks/useDebounce";
import {
  FilterContainer,
  FilterIcon,
  FilterIconCtnr,
  FilterInput
} from "./Filter.styles";

type Props = {
  onTermChanged: (term: string) => void;
  placeholder?: string;
};

const useTermUpdater = (onDebouncedUpdate: (val: string) => void) => {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 500);
  useEffect(() => onDebouncedUpdate(debouncedTerm), [
    debouncedTerm,
    onDebouncedUpdate
  ]);

  return {
    setTerm
  };
};

function Filter({ onTermChanged, placeholder }: Props) {
  const [filterActive, setFilterActive] = useState(true);

  const { setTerm } = useTermUpdater(onTermChanged);

  const { inputProps } = useInputField({
    onValueChange: setTerm
  });

  const activateFilter = useCallback(() => setFilterActive(true), [
    setFilterActive
  ]);
  const deactivateFilter = useCallback(() => setFilterActive(false), [
    setFilterActive
  ]);

  return (
    <FilterContainer>
      <FilterIconCtnr>
        <FilterIcon />
      </FilterIconCtnr>
      <FilterInput noBorder placeholder={placeholder} {...inputProps} />
    </FilterContainer>
  );
}

export default memo(Filter);
