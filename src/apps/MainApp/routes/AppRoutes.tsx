import { Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import { routes } from './routes'
import { lazy, Suspense } from 'react'

const ContactListPage = lazy(() =>
  import('src/pages/ContactListPage').then((modules) => ({
    default: modules.ContactListPage,
  }))
)
const ContactPage = lazy(() =>
  import('src/pages/ContactPage').then((modules) => ({
    default: modules.ContactPage,
  }))
)
const GroupListPage = lazy(() =>
  import('src/pages/GroupListPage').then((modules) => ({
    default: modules.GroupListPage,
  }))
)
const GroupPage = lazy(() =>
  import('src/pages/GroupPage').then((modules) => ({
    default: modules.GroupPage,
  }))
)
const FavoritListPage = lazy(() =>
  import('src/pages/FavoritListPage').then((modules) => ({
    default: modules.FavoritListPage,
  }))
)

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
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
    </Suspense>
  )
}
