import {useState} from 'react';
export function useAuth<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (type: keyof T, text: string) => {
    setValue({...value, [type]: text});
  };

  return {value, handleInputChange};
}
