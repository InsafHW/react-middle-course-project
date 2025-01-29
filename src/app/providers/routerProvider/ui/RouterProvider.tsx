import {BrowserRouter} from 'react-router'
import {PropsWithChildren} from 'react'

function RouterProvider({children}: PropsWithChildren<{}>) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export {
    RouterProvider,
}