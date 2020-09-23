import React from 'react'
import { Redirect, Route } from 'react-router'

import { IPrivateRoute } from '../../@types'
import { useAuth } from '../../contexts/auth'

const PrivateRoute: React.FC<IPrivateRoute> = ({ redirect, ...restProps }) => {
  const { signed, loading } = useAuth()

  if (loading) {
    return <h1>Loading...</h1>
  }

  return signed ? <Route {...restProps} /> : <Redirect to={redirect} />
}

export default PrivateRoute
