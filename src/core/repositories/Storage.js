"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromSessionStorage = exports.saveToSessionStorage = void 0;
/**
 * Saves organization data to sessionStorage.
 * @param data Organization[]
 */
const saveToSessionStorage = (data) => {
    sessionStorage.setItem("orgData", JSON.stringify(data));
};
exports.saveToSessionStorage = saveToSessionStorage;
/**
 * Retrieves organization data from sessionStorage.
 * @returns Organization[] | null
 */
const getFromSessionStorage = () => {
    const data = sessionStorage.getItem("orgData");
    return data ? JSON.parse(data) : null;
};
exports.getFromSessionStorage = getFromSessionStorage;
