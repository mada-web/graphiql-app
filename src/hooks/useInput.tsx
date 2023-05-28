import React, { RefObject, useEffect, useState } from 'react';

interface IUseInput {
  ref: RefObject<HTMLInputElement | null>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const useInput = ({ ref, value, onChange }: IUseInput) => {
  const [cursor, setCursor] = useState<number | null>(null);

  useEffect(() => {
    const input = ref.current;

    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCursor(target.selectionEnd);
    onChange && onChange(e);
  };

  return { handleInput };
};

export default useInput;
