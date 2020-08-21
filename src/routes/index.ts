import { FC } from 'react';
import Cards from '../components/pages/Cards';
import About from '../components/pages/About';

interface IRoutesItem {
  name: string;
  path: string;
  component: FC;
  exact: boolean;
}

const routes: IRoutesItem[] = [
  {
    name: 'Cards',
    path: '/',
    component: Cards,
    exact: true,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: false,
  },
];

export default routes;
