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
                        element: <PortfolioUnits />,
                    },
                    {
                        path: paths.properties,
                        element: <Properties />,
                    },
                    {
                        path: paths.tenants,
                        element: <Tenants />,
                    },
                    {
                        path: paths.all,
                        element: <All />,
                    },
                    {
                        path: paths.draft,
                        element: <Draft />,
                    },
                ],
            },
            {
                path: '*',
                // element: <Dashboard />, //Error404
                element: (
                    <MainLayout>
                        <Suspense fallback={<Loader />}>
                            <PortfolioUnits />
                        </Suspense>
                    </MainLayout>
                ),
                // children: [
                //   {
                //     index: true, 
                //     element: <Dashboard />,
                //   },
                // ],
            },
        ],
    },
]

const router = createBrowserRouter(routes);
export default router;
