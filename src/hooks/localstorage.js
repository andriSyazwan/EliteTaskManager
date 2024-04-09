import { useEffect, useState } from "react";

const decode = (value) => {
  try {
    return JSON.parse(value); // Parsing JSON string into an array
  } catch (error) {
    // Handle parsing error
    console.error("Error parsing JSON from localStorage:", error);
    return null;
  }
};

const encode = (value) => {
  return JSON.stringify(value); // Converting array into JSON string
};

// useLocalStorage hook
const useLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? decode(storedValue) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem(key, encode(value)); // Encode value before storing in local storage
  }, [key, value]); // Include key in dependencies array

  return [value, setValue];
};

export { useLocalStorage };