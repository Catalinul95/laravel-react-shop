import {createBrowserRouter} from "react-router-dom";

import AdminLayout from "./components/layout/AdminLayout";
import NotFound from "./views/NotFound";
import Dashboard from "./views/admin/Dashboard";
import Users from "./views/admin/User/Users";
import Orders from "./views/admin/Orders";
import Customers from "./views/admin/Customers";
import UserForm from "./views/admin/User/Form";
import Index from "./views/Index";
import DefaultLayout from "./components/layout/DefaultLayout";
import ProductShow from "./views/product/ProductShow";

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminLayout/>,
    children: [
      {
        path: '',
        element: <Dashboard/>,
      },
      {
        path: 'users',
        element: <Users/>,
      },
      {
        path: 'users/create',
        element: <UserForm/>,
      },
      {
        path: 'shop/orders',
        element: <Orders/>,
      },
      {
        path: 'shop/customers',
        element: <Customers/>,
      }
    ],
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/products/:slug',
        element: <ProductShow />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

export default router;
