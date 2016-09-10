import MainLayout from '../components/MainLayout/MainLayout';
import HomeContainer from './home/containers/HomeContainer';
import Chat from './chat';

const createRoutes = store => ({
  path: '/',
  component: MainLayout,
  indexRoute: {
    component: HomeContainer
  },
  childRoutes: [
    Chat(store)
  ]
});

export default createRoutes;
