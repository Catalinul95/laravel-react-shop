import {ReactComponent as DashboardIcon} from './assets/dashboard.svg'
import {ReactComponent as UsersIcon} from './assets/users.svg';
import {ReactComponent as BagIcon} from './assets/bag.svg';
import {ReactComponentElement} from "react";

export interface Navigation
{
  path: string | undefined;
  label: string;
  icon: ReactComponentElement<any> | undefined;
  children: Navigation[] | undefined;
}

const navigation = [
  {
    path: '/admin',
    label: 'Dashboard',
    icon: DashboardIcon,
    children: [],
  },
  {
    path: '/admin/users',
    label: 'Users',
    icon: UsersIcon,
    children: [],
  },
  {
    path: undefined,
    label: 'Shop',
    icon: undefined,
    children: [
      {
        path: '/admin/shop/orders',
        label: 'Orders',
        icon: BagIcon,
      },
      {
        path: '/admin/shop/customers',
        label: 'Customers',
        icon: UsersIcon,
      }
    ],
  },
] as Navigation;

export default navigation;