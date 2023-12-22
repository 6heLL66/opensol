import { Theme } from "../contexts/ThemeContext"

export const getThemeFromLocalStorage = (): Theme => {
  const theme = localStorage.getItem('theme') as Theme

  return Theme.Dark
}

export const setThemeToLocalStorage = (theme: Theme) => {
  localStorage.setItem('theme', theme)
}