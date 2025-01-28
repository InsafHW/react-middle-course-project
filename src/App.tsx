import './styles/index.scss'
import {NavLink, Route, Routes} from 'react-router'
import {AboutPageAsync} from './pages/aboutPage/AboutPage.async'
import {MainPageAsync} from './pages/mainPage/MainPage.async'
import {Suspense} from 'react'
import {Theme} from './theme/ThemeContext'
import {useTheme} from './theme/useTheme'

function App() {
    const {theme, setTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}>Change Theme</button>
            <div>
                <NavLink to={'/'}>to main</NavLink>
                <NavLink to={'/about'}>to about</NavLink>
                <Routes>
                    <Route
                        path="/"
                        element={(
                            <Suspense key={'/'} fallback={<div>LOADING))</div>}>
                                <MainPageAsync />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="/about"
                        element={(
                            <Suspense key={'/about'} fallback={<div>LOADING)))))</div>}>
                                <AboutPageAsync />
                            </Suspense>
                        )}
                    />
                </Routes>
            </div>
        </div>
    )
}

export {
    App,
}