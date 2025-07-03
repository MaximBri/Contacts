import { useEffect } from 'react'
import './MainApp.scss'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useAppDispatch } from 'src/store'
import { AppRoutes } from './routes/AppRoutes'
import { loadInitialData } from 'src/store/actions/thunks'

export const MainApp = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadInitialData())
  }, [dispatch])

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
