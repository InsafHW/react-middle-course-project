import './styles/index.scss'
import {NavLink, Route, Routes} from 'react-router'
import {Suspense} from 'react'
import {Theme, useTheme} from 'app/providers/themeProvider'
import {classNames} from 'shared/classNames'
import {AboutPage} from 'pages/aboutPage'
import {MainPage} from 'pages/mainPage'

function App() {
    const {theme, setTheme} = useTheme()

    return (
        <div className={classNames('app', {}, theme)}>
            <button onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}>Change Theme</button>
            <div>
                <NavLink to={'/'}>to main</NavLink>
                <NavLink to={'/about'}>to about</NavLink>
                <Routes>
                    <Route
                        path="/"
                        element={(
                            <Suspense key={'/'} fallback={<div>LOADING))</div>}>
                                <AboutPage />
                            </Suspense>
                        )}
                    />
                    <Route
                        path="/about"
                        element={(
                            <Suspense key={'/about'} fallback={<div>LOADING)))))</div>}>
                                <MainPage />
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