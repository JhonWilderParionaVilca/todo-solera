/* eslint-disable no-unused-vars */
import { useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T[]
): [T[], (value: T[]) => void] {
  const item = window.localStorage.getItem(key);
  const [storedValue, setStoredValue] = useState<T[]>(
    item ? JSON.parse(item) : initialValue
  );

  const setValue = (value: T[]) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
