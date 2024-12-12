import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import Landing from './views/landing/page';
import CreateAccount from './views/create-account/page';
import Login from './views/login/page';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Landing />, index: true },
      { path: '/login', element: <Login /> },
      { path: '/create-account', element: <CreateAccount /> },
    ],
  },
]);

export default router;
