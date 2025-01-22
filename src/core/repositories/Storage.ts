import { Organization } from "../entities/Organization";

/**
 * Saves organization data to sessionStorage.
 * @param data Organization[]
 */
export const saveToSessionStorage = (data: Organization[]): void => {
  sessionStorage.setItem("orgData", JSON.stringify(data));
};

/**
 * Retrieves organization data from sessionStorage.
 * @returns Organization[] | null
 */
export const getFromSessionStorage = (): Organization[] | null => {
  const data = sessionStorage.getItem("orgData");
  return data ? JSON.parse(data) : null;
};
