import './styles/index.scss'
import {NavLink} from 'react-router'
import {Theme, useTheme} from 'app/providers/themeProvider'
import {classNames} from 'shared/classNames'
import {Routes} from 'app/providers/routerProvider'

function App() {
    const {theme, setTheme} = useTheme()

    return (
        <div className={classNames('app', {}, theme)}>
            <button onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}>Change Theme</button>
            <div>
                <NavLink to={'/'}>to main</NavLink>
                <NavLink to={'/about'}>to about</NavLink>
                <Routes />
            </div>
        </div>
    )
}

export {
    App,
}