import {createRoot} from 'react-dom/client'
import {App} from 'app/App'
import {RouterProvider} from 'app/providers/routerProvider'
import {ThemeProvider} from 'app/providers/themeProvider'

const root = createRoot(document.getElementById('root'))
root.render(
    <RouterProvider>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </RouterProvider>
)