import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DisplayCardPage from '../pages/DisplayCard'
import DisplayListPage from '../pages/DisplayList'
import DisplayRecallPage from '../pages/DisplayRecall'
import LoginPage from '../pages/Login'
import { envProps } from '../utils/environments'

interface IAppRouteProps {
  path: string
  component: any
}

interface IRoute {
  id: number
  path: string
  component: any
}

const routes: IRoute[] = [
  {
    id: 1,
    path: '/login', //environment.loginUrl,
    component: LoginPage,
  },
  {
    id: 2,
    path: '/kds', //environment.kdsCardUrl,
    component: DisplayCardPage,
  },
  {
    id: 3,
    path: '/kdsList',
    component: DisplayListPage,
  },
  {
    id: 4,
    path: '/kdsRecall',
    component: DisplayRecallPage,
  },
  // {
  //   id: 5,
  //   path: environment.healthUrl,
  //   component: HealthPage,
  // },
  // {
  //   id: 6,
  //   path: '/',
  //   component: undefined,
  // },
]

const EMPTY_PATH = '/'

const AppRoute: React.FC<IAppRouteProps> = ({ path, component }) => (
  <>
    {path === EMPTY_PATH ? (
      <Redirect to={envProps.loginUrl} />
    ) : (
      <Route path={path} component={component} exact />
    )}
  </>
)

const Routes = () => (
  <Switch>
    {routes.map((route) => (
      <AppRoute key={route.id} path={route.path} component={route.component} />
    ))}
  </Switch>
)

export default Routes
