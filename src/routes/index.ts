import { FC } from 'react';
import Cards from '../components/pages/Cards';
import Decks from '../components/pages/Decks';
import About from '../components/pages/About';

interface RoutesItem {
  name: string;
  path: string;
  component: FC;
  exact: boolean;
}

const routes: RoutesItem[] = [
  {
    name: 'Cards',
    path: '/',
    component: Cards,
    exact: true,
  },
  {
    name: 'Decks',
    path: '/decks',
    component: Decks,
    exact: false,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: false,
  },
];

export default routes;
