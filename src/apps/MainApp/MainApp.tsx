import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

import { store } from 'src/store'
import { AppRoutes } from './routes/AppRoutes'
import './MainApp.scss'

export const MainApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint='xxs'
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}
