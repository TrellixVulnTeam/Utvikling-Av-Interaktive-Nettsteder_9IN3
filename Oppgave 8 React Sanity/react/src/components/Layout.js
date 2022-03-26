import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className="flex h-screen max-w-4xl items-center justify-center bg-cyan-900">
      <Outlet />
    </main>
  )
}

export default Layout
