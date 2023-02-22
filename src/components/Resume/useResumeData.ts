import data from "data";
import { useMemo } from "react";

const prepareStatement = (statement: string) => statement.trim().split("\n\n");

function useResumeData() {
  return useMemo(
    () => ({
      ...data,
      statement: prepareStatement(data.statement)
    }),
    []
  );
}

export default useResumeData;
