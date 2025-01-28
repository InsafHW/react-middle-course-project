import {createContext} from 'react'

enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

type ThemeContextType = {
    theme: Theme,
    setTheme: (theme: Theme) => void,
}

const LS_THEME_KEY = 'theme'

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export {
    Theme,
    ThemeContext,
    LS_THEME_KEY,
}