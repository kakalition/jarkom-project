import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import QRPage from './page/QRPage.jsx';
import AbsenPage from './page/AbsenPage.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import SuccessPage from './page/SuccessPage.jsx';
import UserPage from './page/UserPage.jsx';
import LogPage from './page/LogPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Welcome</div>,
  },
  {
    path: "/:key",
    element: <AbsenPage />,
  },
  {
    path: "/absen",
    element: <QRPage />,
  },
  {
    path: "/confirmed",
    element: <SuccessPage />,
  },
  {
    path: "/manajemen/user",
    element: <UserPage />,
  },
  {
    path: "/manajemen/log-absen",
    element: <LogPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
