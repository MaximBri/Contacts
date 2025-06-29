import { Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import { routes } from './routes'
import {
  ContactListPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
  GroupPage,
} from 'src/pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ContactListPage />} />
        <Route path={routes.contact}>
          <Route index element={<ContactListPage />} />
          <Route path=':contactId' element={<ContactPage />} />
        </Route>
        <Route path={routes.groups}>
          <Route index element={<GroupListPage />} />
          <Route path=':groupId' element={<GroupPage />} />
        </Route>
        <Route path={routes.favorit} element={<FavoritListPage />} />
      </Route>
    </Routes>
  )
}
