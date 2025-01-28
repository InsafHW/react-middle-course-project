import {PropsWithChildren, useMemo, useState} from 'react'
import {LS_THEME_KEY, Theme, ThemeContext} from './ThemeContext'

function getInitialTheme(): Theme {
    const themeFromLs = localStorage.getItem(LS_THEME_KEY) as Theme | undefined
    return themeFromLs ?? Theme.LIGHT
}

function ThemeProvider({children}: PropsWithChildren<{}>) {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

    const context = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeProvider,
}