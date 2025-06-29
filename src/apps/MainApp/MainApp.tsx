import { useEffect } from 'react'
import './MainApp.scss'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from 'src/pages'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import { setContacts } from 'src/store/actions/contactsActions'
import { setFavoriteContacts } from 'src/store/actions/favoriteContactsActions'
import { setGroupContacts } from 'src/store/actions/groupContactsActions'
import { useAppDispatch } from 'src/store'

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
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path='contact'>
              <Route index element={<ContactListPage />} />
              <Route path=':contactId' element={<ContactPage />} />
            </Route>
            <Route path='groups'>
              <Route index element={<GroupListPage />} />
              <Route path=':groupId' element={<GroupPage />} />
            </Route>
            <Route path='favorit' element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
