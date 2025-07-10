import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from '@mantine/core'
import NoonLoader from './assets/components/NoonLoader.tsx'

import { routeTree } from './routeTree.gen.ts'
import NoonNotFound from './assets/components/NoonNotFound.tsx'

const router = createRouter({ routeTree, defaultPendingComponent: NoonLoader, defaultNotFoundComponent: NoonNotFound, basepath: import.meta.env.BASE_URL })

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <MantineProvider defaultColorScheme="dark" theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </StrictMode>,
    )
}