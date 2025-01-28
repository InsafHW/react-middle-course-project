import {createRoot} from 'react-dom/client'
import {App} from './App'
import {ThemeProvider} from './theme/ThemeProvider'
import {BrowserRouter} from 'react-router'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)