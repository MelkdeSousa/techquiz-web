import React from 'react'
import { Route, Router, Switch } from 'react-router'

import history from '../histories'

import PrivateRoute from '../components/PrivateRoute'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import { AuthProvider } from '../contexts/auth'

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute
            exact
            path="/"
            redirect="/login"
            component={Dashboard}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default Routes
