import { ChangeEvent, useState } from "react";

const useInput = (init?: string) => {
  const [value, setValue] = useState(init || "");

  const changeValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, changeValue, resetValue];
};

export default useInput;
