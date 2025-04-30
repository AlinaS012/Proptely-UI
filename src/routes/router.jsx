import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Loader from '../components/loader/Loader.jsx';
import paths, { rootPaths } from './paths.js';


const App = lazy(() => import('../App.jsx'));
const MainLayout = lazy(() => import('../layouts/main-layout/index.jsx'));
const PortfolioUnits = lazy(() => import('../pages/portfolio/Units.jsx'));
const Properties = lazy(() => import('../pages/portfolio/Properties.jsx'));
const Tenants = lazy(() => import('../pages/contacts/Tenants.jsx'));
const All = lazy(() => import('../pages/leasing/All.jsx'));
const Draft = lazy(() => import('../pages/leasing/Draft.jsx'));

const routes = [
    {
        path: '/',
        element: (
            <App />
        ),
        children: [
            {
                element: (
                    <MainLayout>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </MainLayout>
                ),
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={<Loader />}>
                            <PortfolioUnits />
                        </Suspense>
                    },
                    {
                        path: paths.properties,
                        element: <Suspense fallback={<Loader />}>
                            <Properties />
                        </Suspense>
                    },
                    {
                        path: paths.tenants,
                        element: <Suspense fallback={<Loader />}>
                            <Tenants />
                        </Suspense>
                    },
                    {
                        path: paths.all,
                        element: <Suspense fallback={<Loader />}>
                            <All />
                        </Suspense>
                    },
                    {
                        path: paths.draft,
                        element: <Suspense fallback={<Loader />}>
                            <Draft />
                        </Suspense>
                    },
                ],
            },
            {
                path: '*',
                element: (
                    <MainLayout>
                        <Suspense fallback={<Loader />}>
                            <PortfolioUnits />
                        </Suspense>
                    </MainLayout>
                ),
            },
        ],
    },
]

const router = createBrowserRouter(routes);
export default router;
