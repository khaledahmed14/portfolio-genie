
import { useState } from "react";

export function useLocalStorage<T>(
key: string,
initialValue: T
): [T, (value: T) => void] {
const [storedValue, setStoredValue] = useState<T>(() => {
    try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) as T : initialValue;
    } catch {
    return initialValue;
    }
});

const setValue = (value: T): void => {
    try {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
    console.error("Error saving to localStorage:", error);
    }
};

return [storedValue, setValue];
}
