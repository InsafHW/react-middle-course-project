import {useCallback, useContext} from 'react'
import {LS_THEME_KEY, Theme, ThemeContext} from './ThemeContext'

type UseThemeResult = {
    theme: Theme,
    toggleTheme: () => void,
    setTheme: (theme: Theme) => void,
}

function useTheme(): UseThemeResult {
    const {
        theme,
        setTheme: setThemeImpl,
    } = useContext(ThemeContext)

    const setTheme = useCallback((theme: Theme) => {
        localStorage.setItem(LS_THEME_KEY, theme)
        setThemeImpl(theme)
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }, [theme, setTheme])

    return {
        theme,
        setTheme,
        toggleTheme,
    }
}

export {
    useTheme,
}