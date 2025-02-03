import {routeConfig} from 'shared/config/routeConfig/routeConfig'
import {Suspense} from 'react'
import {Routes as RoutesImpl, Route} from 'react-router'

function Routes() {
    return (
        <RoutesImpl>
            {Object.values(routeConfig).map((route) => (
                <Route
                    {...route}
                    key={route.path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {route.element}
                        </Suspense>
                    )}
                />
            ))}
        </RoutesImpl>
    )
}

export {
    Routes,
}