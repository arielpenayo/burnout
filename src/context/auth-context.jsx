import * as React from 'react'
import { FullPageSpinner, FullPageErrorFallback } from '../components/lib'
import * as auth from '../auth-provider'
import { useAsync } from '../utils/hooks';
import NotificationContext from './alert-context';
import { useContext } from 'react';


async function bootstrapAppData() {
  let user = null
  const token = await auth.getToken()
  if (token) {
    user = await auth.getUserFromToken(token)
  }
  return typeof user === 'string' ? JSON.parse(user) : user
}
const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider(props) {
  const { data: user, error, isLoading, isIdle, isError, isSuccess, run, setData } = useAsync()
  const [loginLoading, setLoginLoading] = React.useState(false); 
  React.useEffect(() => {
    const appDataPromise = bootstrapAppData()
    run(appDataPromise)
  }, [run])
  const notificationCtx = useContext(NotificationContext);
  const login = React.useCallback((form) => {
    setLoginLoading(true);
    auth.login(form).then(user => {
      console.log('user', user)
      if (user.ok === false) {
        switch (user.status) {
          case 401:
            notificationCtx.error(user?.message || 'Usuario o contraseña inválida')
            break;

          default: notificationCtx.error('Error de comunicación')
            break;
        }
      } else {
        setData(user)
        notificationCtx.success('Usuario logueado')
      }
      setLoginLoading(false);
      return true
    })
  }, [setData, notificationCtx]);

  const register = React.useCallback(
    form => auth.register(form).then(user => setData(user)),
    [setData],
  )
  const logout = React.useCallback(() => {
    auth.logout()
    setData(null)
  }, [setData])

  const value = React.useMemo(
    () => ({ user, login, logout, register, loginLoading }),
    [login, logout, register, user, loginLoading],
  )
  
 
  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />
  }

 
  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />
  }
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }

 