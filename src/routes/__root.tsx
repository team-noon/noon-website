import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NoonNavbar from '../assets/components/NoonNavbar'
export const Route = createRootRoute({
    component: () => (
        <>
            <NoonNavbar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})