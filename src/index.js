import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Restaurant from './pages/Restaurant';
import Search from './pages/Search';
import './styles.css';

const Contact = lazy(() => import('./pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'restaurants/:id',
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
