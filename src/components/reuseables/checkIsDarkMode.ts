export const checkIsDarkMode = ({ theme }: { theme: string }) => { 
    return theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? true : false
}