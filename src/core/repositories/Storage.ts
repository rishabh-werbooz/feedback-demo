import { Organization } from "../entities/Organization";

/**
 * Saves organization data to sessionStorage.
 * @param data Organization[]
 */
export const saveToSessionStorage = (name:string,data: Organization[]): void => {
  sessionStorage.setItem(name, JSON.stringify(data));
};

/**
 * Retrieves organization data from sessionStorage.
 * @returns Organization[] | null
 */
export const getFromSessionStorage = (name:string): Organization[] | null => {
  const data = sessionStorage.getItem(name);
  return data ? JSON.parse(data) : null;
};
