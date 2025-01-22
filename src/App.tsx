import './index.scss'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router'
import {AboutPageAsync} from './pages/aboutPage/AboutPage.async'
import {MainPageAsync} from './pages/mainPage/MainPage.async'
import {Suspense} from 'react'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
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
        </BrowserRouter>
    )
}

export {
    App,
}