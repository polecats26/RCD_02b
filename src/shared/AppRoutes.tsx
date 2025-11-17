import { createBrowserRouter, RouterProvider } from "react-router"

import Home from '../pages/home/index.tsx'
import AboutUs from '../pages/about/index.tsx'
import AboutDrChao from "../pages/about/drchao.tsx"
import AboutDrRangel from "../pages/about/drrangel.tsx"
import AboutCoco from "../pages/about/coco.tsx"
import Appointments from '../pages/appointments/index.tsx'
import ErrorPage from '../pages/error/index.tsx'
import Layout from './Layout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/about-us",
        Component: AboutUs
      },
      {
        path: "/about/drchao",
        Component: AboutDrChao
      },
      {
        path: "/about/drrangel",
        Component: AboutDrRangel
      },
      {
        path: "/about/coco",
        Component: AboutCoco
      },
      {
        path: "/appointments",
        Component: Appointments
      },
    ],
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />
}
