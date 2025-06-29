import { useEffect } from 'react'
import './MainApp.scss'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import { setContacts } from 'src/store/actions/contactsActions'
import { setFavoriteContacts } from 'src/store/actions/favoriteContactsActions'
import { setGroupContacts } from 'src/store/actions/groupContactsActions'
import { useAppDispatch } from 'src/store'
import { AppRoutes } from './routes/AppRoutes'

export const MainApp = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setContacts(DATA_CONTACT))
    dispatch(
      setFavoriteContacts([
        DATA_CONTACT[0].id,
        DATA_CONTACT[1].id,
        DATA_CONTACT[2].id,
        DATA_CONTACT[3].id,
      ])
    )
    dispatch(setGroupContacts(DATA_GROUP_CONTACT))
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
