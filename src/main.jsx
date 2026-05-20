import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    hydrateFallbackElement: <div>Loading...</div>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/read',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
