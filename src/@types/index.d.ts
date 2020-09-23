import { RouteProps } from 'react-router-dom'

interface IDataRegister {
  email: string
  password: string
}

interface IAuthContext {
  signed: boolean
  user: firebase.User | null
  loading: boolean
  register(dataToRegister: IDataRegister): Promise<void>
  login(dataToLogin: IDataRegister): Promise<void>
  logout(): Promise<void>
}

interface IPrivateRoute extends RouteProps {
  redirect: string
}

interface IHeaderProps {
  title: string
  background?: string
}

interface IPageProps {
	titlePage: string
}
